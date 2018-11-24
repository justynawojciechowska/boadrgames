import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '../common';
import AccountForm from '../account';

import styles from './NavigationStyles';
import { account } from '../application-state';

const REGISTER_FORM = 'register';
const LOGIN_FORM = 'login';

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(account.actions.logout())
});

class NavigationComponent extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,

    logout: PropTypes.func.isRequired
  };

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

          {this.props.isLoggedIn ? (
            <Button className="button-reverse" onClick={this.props.logout}>
              Logout
            </Button>
          ) : (
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
          )}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);
