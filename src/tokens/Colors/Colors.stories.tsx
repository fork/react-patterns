import React from 'react';

import tokens, { Colors } from '../index';

export default {
  title: 'Tokens/Colors'
};

export const Simple: React.FC = () => (
  <div style={{ display: 'flex' }}>
    {Object.keys(tokens.colors).map((key: Colors) => (
      <div
        key={key}
        style={{
          margin: '10px'
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            background: tokens.colors[key],
            boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
            marginBottom: '5px'
          }}
        />
        <p>
          {key} - {tokens.colors[key]}
        </p>
      </div>
    ))}
  </div>
);
