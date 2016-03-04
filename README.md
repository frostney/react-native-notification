# react-native-notification
Customizable toast-like notifications for React Native

![notification](https://github.com/frostney/react-native-notification/blob/master/docs/notification-ios.gif)

## Install
```
$ npm install react-native-notification
```

## Usage
```javascript
import React, { Component, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Notification from 'react-native-notification';

class MyComponent extends Component {
  constructor() {
    this.state = {
      notificationVisible: false,
    };
  }

  onPress = () => {
    this.setState({
      notificationVisible: true,
    });

    setTimeout(() => {
      this.setState({
        notificationVisible: false,
      });
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.text}>Tap me!</Text>
        </TouchableOpacity>
        <Notification visible={this.state.notificationVisible}>Hi there</Notification>
      </View>
    );
  }
}

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

export default MyComponent;
```

### Customization
The styles of the notification are exposed as `Notification.styles`. The `container` property describes the notification container (by default the rounded gray-ish rectangle) and the `message` property the message itself (the white color text).

## License
MIT (See `LICENSE`)
