import React from 'react';

import tokens, { Spacings } from '../index';

export default {
  title: 'Tokens/Spacings'
};

export const Simple: React.FC = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(tokens.spacings).map((key: Spacings) => (
      <div
        key={key}
        style={{
          margin: '10px'
        }}
      >
        <div
          style={{
            width: '70px',
            height: `${tokens.spacings[key]}px`,
            boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
            marginBottom: '5px',
            background: '#00ffff'
          }}
        />
        <p>
          {key} - {tokens.spacings[key]}px
        </p>
      </div>
    ))}
  </div>
);
