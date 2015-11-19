import React, {Component, PropTypes, View, StyleSheet, Animated} from 'react-native';

var Dimensions = require('Dimensions');
var Screen = Dimensions.get('window');

var fadeTime = 500;
var minOpacity = 0.0;
var maxOpacity = 0.9;

class Toast extends Component {
  static propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: true,
  }

  static fadeTime = 500
  static minOpacity = 0.0
  static maxOpacity = 0.9

  static styles = {
    container: {
      position: 'absolute',
      top: Screen.height - 35 - 20,
      width: Screen.width - 80,
      left: 40,
      right: 40,
      backgroundColor: '#444',
      alignItems: 'center',
      padding: 6,
      opacity: Toast.minOpacity,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 1,
      shadowOffset: {
        width: 0,
        height: 1
      },
    },
    message: {
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      opacityValue: new Animated.Value(Toast.minOpacity),
    };
  }

  shouldComponentUpdate: function(nextProps, nextState) {
    if (this.props.message !== nextProps.message) {
      return true;
    }

    if (this.props.visible !== nextProps.visible) {
      return true;
    }

    if (this.state.opacityValue.__getValue() !== this.state.opacityValue.__getValue()) {
      return true;
    }

    return false;
  }

  fadeIn: function() {
    Animated.timing(this.state.opacityValue, {
      duration: fadeTime,
      toValue: maxOpacity
    }).start();
  }

  fadeOut: function() {
    Animated.timing(this.state.opacityValue, {
      duration: fadeTime,
      toValue: minOpacity
    }).start();
  }

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.visible && !this.props.visible) {
      this.fadeIn();
    } else {
      if (!nextProps.visible && this.props.visible) {
        this.fadeOut();
      }
    }
  }

  componentDidMount: function() {
    if (this.props.visible) {
      this.fadeIn();
    }
  }

  render: function() {
    var message = this.props.children;

    if (!message) {
      return null;
    }

    return (
      <Animated.View style={[Toast.styles.container, {opacity: this.state.opacityValue}]}>
        <Text style={Toast.styles.message}>{message}</Text>
      </Animated.View>
    );
  }
}

export default Toast;
