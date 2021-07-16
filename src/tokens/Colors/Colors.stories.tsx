import React from 'react';

import tokens, { Colors } from '../index';

export default {
  title: 'Tokens/Colors'
};

export const Simple = () => (
  <div>
    {Object.keys(tokens.colors).map((key: Colors) => (
      <div
        key={key}
        style={{
          margin: '20px'
        }}
      >
        <p>{key}</p>

        <div style={{ display: 'inline-flex' }}>
          {Object.keys(tokens.colors[key]).map(shade =>
            shade !== 'default' ? (
              <div key={`${key}-${shade}`}>
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    border: '1px solid #ddd',
                    background: tokens.colors[key][shade]
                  }}
                />

                <p>
                  <b>{shade}</b> {tokens.colors[key][shade]}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
    ))}
  </div>
);
