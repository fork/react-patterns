/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styled from 'styled-components';

import { color } from '../../stylesheets';

export default {
  title: 'Tokens/Colors'
};

const getColor = () => props => color(props.color)(props);

const Color = styled.div`
  position: relative;
  height: 120px;
  width: 220px;
  padding: 10px;
  background: ${getColor()};
  margin-top: 12px;
  margin-right: 12px;
  border: 1px solid #979797;

  &:before {
    z-index: 1;
    position: absolute;
    bottom: 10px;
    color: ${props => (props.color === 'white' ? '#000000' : '#ffffff')};
    text-transform: uppercase;
    content: '${props => props.color} | ${getColor()}';
  }
`;

const ColorRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Story = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <ColorRow>
        <Color color="black" />
      </ColorRow>
      <ColorRow>
        <Color color="white" />
      </ColorRow>
      <ColorRow>
        <Color color="primary" />
      </ColorRow>
      <ColorRow>
        <Color color="secondary" />
      </ColorRow>
      <ColorRow>
        <Color color="highlight" />
      </ColorRow>
    </div>
  </>
);
