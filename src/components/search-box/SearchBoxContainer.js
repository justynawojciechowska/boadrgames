import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as API from '../../API';

class SearchBoxContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,

    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  };

  state = {
    game: '',
    city: '',
    date: '',
    redirect: null
  };

  async componentDidMount() {
    const data = await API.getAllGames();

    console.log(data);
  }

  redirect = (pathname = '/search-results', state = {}) => {
    if (
      pathname === '/search-results' &&
      pathname !== this.props.location.pathname
    ) {
      this.setState({ redirect: { pathname, state } });
    }
  };

  handleInputChange = (event, inputType) => {
    this.setState({
      [inputType]: event.target.value
    });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleSearch = () => {
    this.redirect();
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Component
        {...rest}
        {...this.state}
        onSearch={this.handleSearch}
        onInputChange={this.handleInputChange}
        onDateChange={this.handleDateChange}
      />
    );
  }
}

export default withRouter(SearchBoxContainer);
