/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Notification from 'react-native-notification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class NotificationExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  onPress = () => {
    this.setState({
      message: 'Hello World!',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.welcome}>
            Tap me!
          </Text>
        </TouchableOpacity>
        <Notification message={this.state.message} />
      </View>
    );
  }
}

export default NotificationExample;
