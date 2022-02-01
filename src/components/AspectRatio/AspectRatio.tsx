import { ReactNode } from 'react';
import styled from 'styled-components';

export type AspectRatioProps = {
  ratio?: string;
  children: ReactNode;
};

const getRatio = ({ ratio = '16:9' }: AspectRatioProps) => {
  const [width, height] = ratio.split(':');
  return `${(parseInt(height, 10) / parseInt(width, 10)) * 100}%`;
};

const AspectRatio = styled.div<AspectRatioProps>`
  height: 0;
  padding-bottom: ${getRatio};
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
