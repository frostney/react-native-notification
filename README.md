# react-native-notification [![npm version](https://img.shields.io/npm/v/react-native-notification.svg?style=flat)](https://www.npmjs.com/package/react-native-notification)
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
      message: '',
    };
  }

  onPress = () => {
    this.setState({
      message: 'Hi there',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.text}>Tap me!</Text>
        </TouchableOpacity>
        <Notification message={this.state.message} />
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

## What may be in store for future versions
- Allow message as `props.children` allowing other components to be part of the message
- More unit tests

## License
MIT (See `LICENSE`)
