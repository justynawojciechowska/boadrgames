import css from 'styled-jsx/css';

const PageWrapperStyles = () => {
  return (
    /*language=CSS*/
    css`
      .navigation {
        height: 100px;
        display: flex;
        align-items: center;
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
    `
  );
};

export default PageWrapperStyles;
