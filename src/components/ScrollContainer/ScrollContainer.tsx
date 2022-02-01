/* eslint-disable react/no-array-index-key */
import React, { useRef, useLayoutEffect, useEffect, useState, useCallback, ReactNode } from 'react';

import Button from '../Button';

import StyledScrollContainer from './ScrollContainer.style';

export type ScrollContainerProps = {
  children: ReactNode | ReactNode[];
};

const ScrollContainer = ({ children }: ScrollContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = () => {
    const { scrollWidth, scrollLeft } = ref.current;
    setNextDisabled(scrollWidth <= scrollLeft + containerWidth);
    setPrevDisabled(scrollLeft <= 0);
  };

  const handleResize = () => {
    if (!ref.current) return;
    const { width } = ref.current?.getBoundingClientRect();
    if (ref.current.scrollWidth > width) setIsScrollable(true);
    setContainerWidth(width);
  };

  const scrollTo = useCallback(
    (value: number) => {
      if (!ref.current) return;
      const { scrollLeft } = ref.current;

      let left = scrollLeft + value;

      if (left > scrollLeft + containerWidth) {
        left = scrollLeft + containerWidth;
      } else if (left < 0) {
        left = 0;
      }

      ref.current.scrollTo({ left, behavior: 'smooth' });
    },
    [ref, containerWidth]
  );

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, [ref]);

  useEffect(() => {
    ref.current?.addEventListener('scroll', handleScroll);

    return () => {
      ref.current?.removeEventListener('scroll', handleScroll);
    };
  }, [containerWidth]);

  return (
    <StyledScrollContainer>
      <div className="scrollContainer__items" ref={ref}>
        {React.Children.map(children, (child: any, index) =>
          React.cloneElement(child, {
            key: index,
            className: 'scrollContainer__item',
            ...child.props
          })
        )}
      </div>

      {isScrollable && (
        <>
          <Button
            label="Previous"
            onClick={() => scrollTo(-containerWidth)}
            icon="Previous"
            iconPosition="only"
            variant="secondary"
            className="scrollContainer__prev"
            disabled={prevDisabled}
          />
          <Button
            label="Next"
            onClick={() => scrollTo(containerWidth)}
            icon="Next"
            iconPosition="only"
            variant="secondary"
            className="scrollContainer__next"
            disabled={nextDisabled}
          />
        </>
      )}
    </StyledScrollContainer>
  );
};

export default ScrollContainer;
