import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Greeting from './greeting';
import Blink from './blink';
import PizzaTranslator from './pizza-translator';
import BestScrollView from './best-scroll-view';
import SuckyListView from './sucky-list-view';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5,
  },
  firstPart: {
    flex: 1,
    justifyContent: 'center',
  },
  secondPart: {
    flex: 1,
    justifyContent: 'center', 
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

export default class MyScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstPart}>
          <Text>Current Scene: {this.props.title}</Text>

          <TouchableHighlight onPress={this.props.toggleRoute}>
            <Text>Tap me to switch scenes!</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.secondPart}>
          <Greeting name='Albert'/>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Blink ref="0" text='OooOoOoOoH'/>
          <Blink ref="1" text='AaAAaaaaAH'/>
        </View>
        <PizzaTranslator/>
        <BestScrollView/>
        <SuckyListView/>
      </View>
    );
  }
}