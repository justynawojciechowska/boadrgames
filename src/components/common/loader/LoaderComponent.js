/**
 * {@link https://ant.design/components/spin/}
 */
import React from 'react';
import Loader from 'antd/lib/spin';

import 'antd/lib/spin/style/index.css';

const LoaderComponent = props => {
  return (
    <div className="loader">
      <Loader {...props} />
    </div>
  );
};

export default LoaderComponent;
