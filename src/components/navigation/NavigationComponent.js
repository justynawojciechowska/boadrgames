import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../common';
import AccountForm from '../account';

import styles from './NavigationStyles';

const REGISTER_FORM = 'register';
const LOGIN_FORM = 'login';

class NavigationComponent extends React.Component {
  state = {
    formVisible: false,
    formType: LOGIN_FORM
  };

  handleShowForm = formType => {
    this.setState({
      formVisible: true,
      formType: formType
    });
  };

  handleHideForm = () => {
    this.setState({
      formVisible: false
    });
  };

  render() {
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
              <Button
                className="button-reverse"
                onClick={() => this.handleShowForm(REGISTER_FORM)}
              >
                Zarejestruj
              </Button>
            </li>
            <li className="navigation__item">
              <Button onClick={() => this.handleShowForm(LOGIN_FORM)}>
                Zaloguj
              </Button>
            </li>
          </ul>
        </div>
        <AccountForm
          formVisible={this.state.formVisible}
          formType={this.state.formType}
          onHideForm={this.handleHideForm}
        />
      </nav>
    );
  }
}

export default NavigationComponent;
