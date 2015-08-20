import React, {Component, Animated} from 'react-native';

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Animated.View>{this.props.children}</Animated.View>
    )
  }
}

Toast.defaultProps = {
  visible: true,
};

export default Toast;
