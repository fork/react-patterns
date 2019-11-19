import React from 'react';
import { storiesOf } from '@storybook/react';

import SvgSprite from './svgSprite';

import CloseIcon from '../../icons/close.svg';

storiesOf('Components|Atoms', module).add('SvgSprite', () => <SvgSprite icon={CloseIcon} />);
