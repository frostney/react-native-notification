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
  TouchableOpacity,
} from 'react-native';
import Notification from 'react-native-notification';

class NotificationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationVisible: false,
    }
  }

  onPress = () => {
    this.setState({
      notificationVisible: true,
    });

    setInterval(() => {
      this.setState({
        notificationVisible: false,
      });
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.welcome}>
            Tap me!
          </Text>
        </TouchableOpacity>
        <Notification visible={this.state.notificationVisible}>
          Hi there!
        </Notification>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
