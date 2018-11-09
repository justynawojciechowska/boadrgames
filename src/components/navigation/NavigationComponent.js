import React from 'react';
import { Link } from 'react-router-dom';

import NavigationStyles from './NavigationStyles';

function NavigationComponent(props) {
  const styles = NavigationStyles();

  return (
    <nav className="navigation">
      <style jsx>{styles}</style>
      <div className="container navigation__container">
        <div className="navigation__left">
          <Link href="/" to="/">
            <span className="navigation__main-page">Zagraj ze mną</span>
          </Link>
        </div>

        <ul className="navigation__right">
          <li className="navigation__item">
            <Link className="button button-reverse" href="/" to="/">
              Zarejestruj
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="button" href="/" to="/">
              Zaloguj
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationComponent;
