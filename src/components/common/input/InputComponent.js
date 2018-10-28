/**
 * {@link https://ant.design/components/input/}
 */
import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';

import InputStyles from './InputStyles';

export const Search = Input.Search;
export const Textarea = Input.Textarea;
export const Group = Input.Group;

const InputComponent = props => {
  const { component: Component, ...rest } = props;

  return (
    <div className="input__wrapper">
      <InputStyles />
      <Component prefixCls="input" {...rest} />
    </div>
  );
};

InputComponent.propTypes = {
  component: PropTypes.func
};

InputComponent.defaultProps = {
  component: Input
};

export default InputComponent;
