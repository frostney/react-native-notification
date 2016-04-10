import React, {
  Component,
  PropTypes,
  Text,
  Animated,
  Dimensions,
} from 'react-native';

const Screen = Dimensions.get('window');

class Notification extends Component {
  static propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      opacityValue: new Animated.Value(Notification.minOpacity),
    };
  }

  componentDidMount() {
    if (this.props.visible) {
      this.fadeIn();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && !this.props.visible) {
      this.fadeIn();
    } else {
      if (!nextProps.visible && this.props.visible) {
        this.fadeOut();
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    // TODO: Compare the messages with each other
    /* if (this.props.message !== nextProps.message) {
      return true;
    }*/

    if (this.props.visible !== nextProps.visible) {
      return true;
    }

    // TODO: Is there a reliable way not use `__getValue` and something else that may not be as unstable
    if (this.state.opacityValue.__getValue() !== this.state.opacityValue.__getValue()) {
      return true;
    }

    return false;
  }

  static fadeTime = 500;
  static minOpacity = 0.0;
  static maxOpacity = 0.9;

  static styles = {
    container: {
      position: 'absolute',
      bottom: 35,
      width: Screen.width - 80,
      left: 40,
      right: 40,
      backgroundColor: '#444',
      alignItems: 'center',
      padding: 6,
      opacity: Notification.minOpacity,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 1,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    message: {
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
  };

  fadeIn = () => {
    Animated.timing(this.state.opacityValue, {
      duration: Notification.fadeTime,
      toValue: Notification.maxOpacity,
    }).start();
  }

  fadeOut = () => {
    Animated.timing(this.state.opacityValue, {
      duration: Notification.fadeTime,
      toValue: Notification.minOpacity,
    }).start();
  }

  render() {
    const message = this.props.children;

    if (!message) {
      return null;
    }

    return (
      <Animated.View style={[Notification.styles.container, {opacity: this.state.opacityValue}]}>
        <Text style={Notification.styles.message}>{message}</Text>
      </Animated.View>
    );
  }
}

export default Notification;
