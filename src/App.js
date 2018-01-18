/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import LoginScreen from './page/LoginScreen'
import HomeScreen from './page/HomeScreen'
import SitemapScreen from './page/SitemapScreen'

export default class App extends Component {

  render() {
   
    return (
    <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Sitemap: {screen: SitemapScreen},
});

const styles = StyleSheet.create({
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
