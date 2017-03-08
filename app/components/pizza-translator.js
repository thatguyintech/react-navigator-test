import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    padding: 5,
    margin: 5,
  },

  textInput: {
    height: 40,
  }
});

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text
          style={styles.translationText}
        >
          {this._translateText(this.state.text)}
        </Text>
      </View>
    );
  }

  _translateText(someText) {
    const letters = someText.split("");
    const translator = (letter) => this._replaceLetter(letter); 
    return letters.map(translator).join('');
  }

  _replaceLetter(letter) {
    const vowels = {'a':'4', 'e':'3', 'i':'1', 'o':'0', 'u':'v'};
    if (letter in vowels) {
      return vowels[letter];
    }
    return letter;
  }
}