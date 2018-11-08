import css from 'styled-jsx/css';

const HomepageStyles = () => {
  return (
    /*language=CSS*/
    css`
      .homepage {
        padding-bottom: 300px;
      }

      .homepage__hero {
        position: relative;
        display: flex;
        align-items: center;
        height: calc(100vh - 100px);
        min-height: 500px;
      }

      .homepage__hero-content {
        max-width: 550px;
        padding-bottom: 50px;
      }

      .homepage__hero-img {
        position: absolute;
        max-height: 1000px;
        top: -150px;
        right: -50px;
        z-index: -1;
      }

      .homepage__hero-subtitle {
        font-size: 2.2rem;
        margin-bottom: 30px;
      }

      .homepage__subtitle {
        text-align: center;
        width: 100%;
      }
    `
  );
};

export default HomepageStyles;
