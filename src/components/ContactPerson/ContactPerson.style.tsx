import styled from 'styled-components';

import { color, space, mq } from '../../stylesheets';

const StyledContactPerson = styled.div`
  display: flex;
  flex-direction: column;

  ${mq('m')} {
    align-items: center;
    flex-direction: row;
  }

  .contact-person__image {
    width: 100%;
    background-color: ${color('neutral', 30)};
    border-radius: 100%;
    overflow: hidden;
    margin-bottom: ${space('l')};

    ${mq('m')} {
      width: 200px;
      margin-bottom: 0;
      margin-right: ${space('l')};
    }
  }

  .contact-person__contact {
    display: flex;
    flex-direction: column;
    margin-top: ${space('m')};

    & > * + * {
      margin-top: ${space('xs')};
    }
  }
`;

export default StyledContactPerson;
