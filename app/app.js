/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import MyScene from './components/myscene';

export default class NavigatorPracticeApp extends Component {
  render() {

    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to toggle between first and second route
            toggleRoute={() => {
              if (route.index === 0) {
                navigator.push(routes[1]);
              } else {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('NavigatorPracticeApp', () => NavigatorPracticeApp);
