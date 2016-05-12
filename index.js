import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Modal,
} from 'react-native';

const Screen = Dimensions.get('window');

const propTypes = {
  timeout: PropTypes.number,
  fadeTime: PropTypes.number,
  minOpacity: PropTypes.number,
  maxOpacity: PropTypes.number,
  message: PropTypes.string,
};

const defaultProps = {
  timeout: 3000,
  fadeTime: 500,
  minOpacity: 0.0,
  maxOpacity: 0.9,
  message: '',
};

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityValue: new Animated.Value(this.props.minOpacity),
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      this.fadeIn();
      this.setState({
          modalVisible: true,
        });

      const timerId = setTimeout(() => {
        this.fadeOut();
        this.setState({
          modalVisible: false,
        });
        clearTimeout(timerId);
      }, this.props.timeout);
    }
  }

  fadeIn = () => {
    Animated.timing(this.state.opacityValue, {
      duration: this.props.fadeTime,
      toValue: this.props.maxOpacity,
    }).start();
  }

  fadeOut = () => {
    Animated.timing(this.state.opacityValue, {
      duration: this.props.fadeTime,
      toValue: this.props.minOpacity,
    }).start();
  }

  render() {
    if (this.props.message === '') {
      return null;
    }

    return (
      <Modal
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {this.setState({modalVisible: false})}}
      >
        <Animated.View style={[Notification.styles.container, { opacity: this.state.opacityValue }]}>
          <Text style={Notification.styles.message}>{this.props.message}</Text>
        </Animated.View>
      </Modal>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
Notification.styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    width: Screen.width - 80,
    left: 40,
    right: 40,
    backgroundColor: '#444',
    alignItems: 'center',
    padding: 6,
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
});

export default Notification;
