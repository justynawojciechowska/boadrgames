import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../common';

import NavigationStyles from './NavigationStyles';

function NavigationComponent(props) {
  return (
    <nav className="navigation">
      <Button.Styles />
      <NavigationStyles />
      <div className="container navigation__container">
        <div className="navigation__left">
          <Link className="navigation__main-page" href="/" to="/">
            Zagraj ze mną
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
