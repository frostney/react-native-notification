/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Notification from 'react-native-notification';

let styles;

class NotificationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationVisible: false,
    };
  }

  onPress = () => {
    this.setState({
      notificationVisible: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress}>
          <Text style={styles.welcome}>
            Show notification
          </Text>
        </TouchableHighlight>
        <Notification visible={this.notificationVisible}>Hello there!</Notification>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NotificationExample', () => NotificationExample);
