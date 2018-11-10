/**
 * {@link https://ant.design/components/modal/}
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../loader';

import modalStyles from './ModalStyles';

class ModalComponent extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  Modal = null;

  state = {
    isLoading: true
  };

  componentDidMount() {
    this.loadModal();
  }

  async loadModal() {
    const [{ default: Modal }] = await Promise.all([
      import('antd/lib/modal'),
      import('antd/lib/modal/style/index.css')
    ]);

    this.Modal = Modal;

    this.setState({
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className={classnames('modal-loader', this.props.className)}>
          <Loader />
        </div>
      );
    }

    const { Modal } = this;
    const { className, ...props } = this.props;

    return (
      <div
        ref={node => {
          this.container = node;
        }}
        className={classnames('modal', className)}
      >
        <style jsx global>
          {modalStyles}
        </style>
        <Modal centered destroyOnClose {...props} />
      </div>
    );
  }
}

export default ModalComponent;
