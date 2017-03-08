import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  greetingStyle: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default class Greeting extends Component {
  render() {
    return (
      <Text
        style={[this.props.style, styles.greetingStyle]}
      >
        Hello {this.props.name}!
      </Text>
    );
  }
}