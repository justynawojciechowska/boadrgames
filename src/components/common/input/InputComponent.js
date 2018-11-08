/**
 * {@link https://ant.design/components/input/}
 */
import React from 'react';
import Input from 'antd/lib/input';

import InputStyles from './InputStyles';

const InputComponent = props => {
  const styles = InputStyles();

  return (
    <div className="input__wrapper">
      <style jsx global>
        {styles}
      </style>
      <Input prefixCls="input" {...props} />
    </div>
  );
};

export default InputComponent;
