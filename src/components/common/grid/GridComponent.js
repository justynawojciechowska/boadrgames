import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import 'antd/lib/grid/style/index.css';

export const GridRow = ({ children, gutter, ...props }) => (
  <Row gutter={gutter} {...props}>
    {children}
  </Row>
);

GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

GridRow.defaultProps = {
  gutter: { xs: 10, md: 20, xl: 34 }
};

export const GridCol = ({ children, ...props }) => (
  <Col {...props}>{children}</Col>
);

GridCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
