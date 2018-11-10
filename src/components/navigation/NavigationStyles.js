import css from 'styled-jsx/css';

/*language=CSS*/
const PageWrapperStyles = css`
  .navigation {
    background-color: #fff;
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }

  .navigation__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .navigation__right {
    display: flex;
    align-items: center;
  }

  .navigation__item {
    margin-left: 10px;
  }

  .navigation__main-page {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

export default PageWrapperStyles;
