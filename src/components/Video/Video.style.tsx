import styled from 'styled-components';

const StyledVideo = styled.div`
  width: 100%;
  position: relative;

  .video__overlay {
    position: relative;
    width: 100%;

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default StyledVideo;
