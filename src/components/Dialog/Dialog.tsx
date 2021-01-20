import React, { createContext, useContext, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import { space, color, variant } from '../../stylesheets';
import { Colors } from '../../tokens';

import useFocusTrap from '../../hooks/useFocusTrap';

import Flex from '../Flex';
import IconButton from '../IconButton';

const DialogContext = createContext({
  onClose: () => {
    console.log('Dialog onClose');
  }
});

type StyledDialogProps = {
  size: 'narrow' | 'default' | 'wide' | 'full';
  fullHeight?: boolean;
};

const ShimLayer = styled.button`
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  /* backdrop-filter: blur(3px); */
  appearance: none;
  margin: 0;
  padding: 0;
  cursor: zoom-out;
`;

const StyledDialog = styled(Flex)<StyledDialogProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999;

  .dialog__wrapper {
    height: ${props => props.fullHeight && '100%'};
    max-width: 750px;
    width: 100%;
    max-height: calc(100vh - ${space('l')});
    margin: ${space('m')};
    z-index: 999;
    border-radius: ${space('s')};
    overflow: hidden;

    ${variant({
      prop: 'size',
      narrow: css`
        max-width: 450px;
      `,
      wide: css`
        max-width: 900px;
      `,
      full: css`
        max-width: none;
        width: calc(100% - ${space('l')});
        height: calc(100vh - ${space('l')});
      `
    })}
  }
`;

export interface DialogProps {
  onClose: () => void;
  initialFocusRef?: React.RefObject<HTMLElement> | null;
  background?: Colors;
  children: ReactNode;
  size?: 'full' | 'wide' | 'default' | 'narrow';
  fullHeight?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  size = 'default',
  background = 'white',
  onClose,
  fullHeight,
  initialFocusRef
}: DialogProps) => {
  const { ref } = useFocusTrap<HTMLDivElement>({
    initialFocusRef,
    onKeyDown: e => {
      if (e.keyCode === 27) onClose();
    }
  });

  return createPortal(
    <StyledDialog
      role="dialog"
      justifyContent="center"
      alignItems="center"
      size={size}
      fullHeight={fullHeight}
    >
      <DialogContext.Provider value={{ onClose }}>
        <ShimLayer aria-label="Close Dialog" onClick={onClose} />

        <Flex ref={ref} direction="column" background={background} className="dialog__wrapper">
          {children}
        </Flex>
      </DialogContext.Provider>
    </StyledDialog>,
    document.body
  );
};

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  padding: ${space('m')};
  padding-bottom: ${space('s')};
`;

export const DialogBody = styled.div<{ background?: Colors }>`
  padding: ${space('m')};
  background: ${props => props.background && color(props.background)};
  flex-grow: 2;
  overflow-y: scroll;
`;

export const DialogFooter = styled(Flex)`
  padding: ${space('m')};
  padding-top: ${space('s')};
  border-radius: 0;
  flex-shrink: 0;
`;

export const DialogClose: React.FC = () => {
  const { onClose } = useContext(DialogContext);

  return <IconButton icon="close" label="Close dialog" onClick={onClose} />;
};

export default Dialog;
