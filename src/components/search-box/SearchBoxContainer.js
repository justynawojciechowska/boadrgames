import React from 'react';
import PropTypes from 'prop-types';

class SearchBoxContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return <Component {...rest} />;
  }
}

export default SearchBoxContainer;
