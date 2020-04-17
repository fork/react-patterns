import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getBackground, getColor, getBorderRadius, getSpacings } from './helper';

const Container = styled.div`
  color: ${p => getColor(p.color)};
  background: ${p => getBackground(p.background)};
  padding: ${p => getSpacings(p.padding)};
  margin: ${p => getSpacings(p.margin)};
  text-align: ${props => props.alignment};
  border-radius: ${p => getBorderRadius(p.borderRadius)};
`;

Container.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'right', 'center'])
};

Container.defaultProps = {
  color: undefined,
  background: undefined,
  padding: undefined,
  borderRadius: undefined,
  margin: undefined,
  alignment: 'left'
};

export default Container;
