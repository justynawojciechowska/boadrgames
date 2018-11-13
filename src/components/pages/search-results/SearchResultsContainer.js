import React from 'react';
import PropTypes from 'prop-types';

class SearchResultsContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return <Component {...rest} {...this.state} />;
  }
}

export default SearchResultsContainer;
