import React from 'react';

import { tokens, Colors } from '../index';
import './Colors_storybook.css'; /* eslint-disable guard-for-in */

export default {
  title: 'Tokens/Colors'
};

export const Default = () => (
  <div className="st-colors">
    {Object.keys(tokens.default.colors).map((key: Colors) => (
      <div key={key}>
        <p className="st-colors__title">{key}</p>

        <ul className="st-colors__list">
          {Object.keys(tokens.default.colors[key]).map(shade =>
            shade !== 'default' ? (
              <li
                className="st-colors__item"
                key={`${key}-${shade}`}
                style={{ background: tokens.default.colors[key][shade] }}
              >
                <div className="st-colors__item-info">
                  <div className="st-colors__item-key">{shade}</div>
                  <div className="st-colors__item-value">{tokens.default.colors[key][shade]}</div>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    ))}
  </div>
);
