import React from 'react';
import './Spacings_storybook.css'; /* eslint-disable guard-for-in */

import { tokens, Spacings } from '../index';

export default {
  title: 'Tokens/Spacings'
};

export const Default = () => (
  <div className="st-spacings">
    <ul className="st-spacings__list">
      {Object.keys(tokens.default.spacings).map((key: Spacings) => (
        <li key={key} className="st-spacings__item">
          <div>
            <span className="st-spacings__item-title">{key}</span>
            <span className="st-spacings__item-value">{tokens.default.spacings[key]}px</span>
          </div>
          <span
            className="st-spacings__item-space"
            style={{
              height: `${tokens.default.spacings[key]}px`
            }}
          />
        </li>
      ))}
    </ul>
  </div>
);
