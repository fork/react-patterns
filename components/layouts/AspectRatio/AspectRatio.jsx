import PropTypes from 'prop-types';
import styled from 'styled-components';

const getRatio = ({ ratio }) => {
  const [width, height] = ratio.split(':');
  return `${height}/${width}`;
};

const AspectRatio = styled.div`
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

AspectRatio.propTypes = {
  ratio: PropTypes.string,
  children: PropTypes.node
};

AspectRatio.defaultProps = {
  ratio: '16:9',
  children: null
};

export default AspectRatio;
