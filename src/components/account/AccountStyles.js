import css from 'styled-jsx/css';

import { colors, border } from '../../styleVariables';

/*language=CSS*/
const AccountStyles = css.global`
  .account-modal__wrapper {
    display: flex;  
    border-radius: ${border.small};
    height: 600px;
    overflow: hidden;
  }
  
  .account-modal__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    width: 40%;
  }
  
  .account-modal__image {
     background-image: linear-gradient(
      294deg,
      ${colors.primary_dk},
      ${colors.primary}
    );
    width: 60%;
  }
  
  .account-modal .ant-modal-body {
    padding: 0;
  }
`;

export default AccountStyles;
