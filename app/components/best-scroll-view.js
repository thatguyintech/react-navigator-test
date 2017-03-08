import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    margin: 10,
  }
});

export default class BestScrollView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
      </View>
    );
  }
}