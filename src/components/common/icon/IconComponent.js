/**
 * {@link https://ant.design/components/icon/}
 */
import React from 'react';

class IconComponent extends React.Component {
  Icon = null;

  state = {
    isLoading: true
  };

  componentDidMount() {
    this.loadIconsLib();
  }

  async loadIconsLib() {
    // const { Icon } = await import('antd/lib/icon');
    // this.Icon = Icon;
    // this.setState({
    //   isLoading: false
    // });
  }

  render() {
    const { Icon } = this;

    if (this.state.isLoading) {
      return <div className="icon" />;
    }
    return <Icon {...this.props} />;
  }
}

export default IconComponent;
