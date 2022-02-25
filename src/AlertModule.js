import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';

export class AlertModule extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {Alert.alert(
          'Server Error',
          'Unable to upload the file',
          [{ text: 'OK' }],
          { cancelable: false }
        )}
      </View>
    );
  }
}

export default AlertModule;
