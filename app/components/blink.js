import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  blink: {
    flex: 1,
    alignSelf: 'center',
  }
});

export default class Blink extends Component {

  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle state to show/hide text every second
    setInterval( () => {
      if (this.refs.myRef) {
        this.setState({ showText: !this.state.showText });
      }
    }, 1000);
  }

  render() {
    const display = this.state.showText ? this.props.text : '';
    return (
      <View style={styles.blink}>
        <Text style={[this.props.style, styles.blink]}>{display}</Text>
      </View>
    );
  }
}