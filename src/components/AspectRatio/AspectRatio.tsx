import { ReactNode } from 'react';
import styled from 'styled-components';

export type AspectRatioProps = {
  ratio?: string;
  children: ReactNode;
};

const getRatio = ({ ratio = '16:9' }: AspectRatioProps): string => {
  const [width, height] = ratio.split(':');
  return `${height}/${width}`;
};

const AspectRatio = styled.div<AspectRatioProps>`
  height: 0;
  padding-bottom: calc(${getRatio} * 100%);
  position: relative;

  > * {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

export default AspectRatio;
