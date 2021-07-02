/* eslint-disable react/no-array-index-key */
import React, { ReactNode, useState, useEffect, useCallback } from 'react';

import { TabProps } from './Tab';

import StyledTabs from './Tabs.style';

export type TabsProps = {
  initialIndex?: number;
  centered?: boolean;
  onClick?: (index: number) => void;
  children: ReactNode;
};

const Tabs = ({ initialIndex = 0, onClick, children, centered }: TabsProps) => {
  const [selected, setSelected] = useState(initialIndex);
  const [activeLink, setActiveLink] = useState(null);

  const childs = React.Children.toArray(children);

  useEffect(() => {
    setSelected(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    // Dont focus active link, if active element is <body>
    if (document.activeElement === document.body) return;
    activeLink?.focus();
  }, [activeLink]);

  const previousTab = useCallback(index => {
    if (index > 0) setSelected(index - 1);
    if (index === 0) setSelected(childs.length - 1);
  }, []);

  const nextTab = useCallback(index => {
    if (index < childs.length - 1) setSelected(index + 1);
    if (index === childs.length - 1) setSelected(0);
  }, []);

  const handleClick = useCallback((e, index) => {
    e.preventDefault();
    if (onClick) onClick(index);
    setSelected(index);
  }, []);

  const handleKeyup = useCallback((e, index) => {
    e.preventDefault();
    if (e.which === 13) setSelected(index);
    else if (e.which === 37) previousTab(index);
    else if (e.which === 39) nextTab(index);
  }, []);

  return (
    <StyledTabs centered={centered}>
      <ul role="tablist" className="tabs__list">
        {React.Children.map(children, (tab, i) => {
          if (!React.isValidElement<TabProps>(tab)) {
            return null;
          }

          return (
            <li role="presentation" key={`tab_${i}`}>
              <button
                id={`tab_${i}`}
                type="button"
                role="tab"
                aria-controls={`tab_${i}`}
                aria-selected={i === selected}
                tabIndex={i === selected ? 0 : -1}
                onClick={e => handleClick(e, i)}
                onKeyUp={e => handleKeyup(e, i)}
                ref={link => {
                  if (selected === i) setActiveLink(link);
                }}
              >
                {tab.props.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div>
        {React.Children.map(children, (tab, i) => {
          if (!React.isValidElement<TabProps>(tab)) {
            return null;
          }

          return React.cloneElement(tab, {
            index: i,
            selected: i === selected
          });
        })}
      </div>
    </StyledTabs>
  );
};

export default Tabs;
