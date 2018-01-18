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


import FetchLocation from '../conponents/FetchLocation';
import UserMap from '../conponents/UserMap';
import LoginScreen from './LoginScreen'
const Realm = require('realm');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class SitemapScreen extends Component {

// state = {
//   userLocation:null,
//   realmDb:null
// }

// componentWillMount() {
//   Realm.open({
//     schema: [{name: 'Dog', properties: {name: 'string'}}]
//   }).then(realm => {
//     realm.write(() => {
//       realm.create('Dog', {name: 'Rex'});
//     });
//     this.setState({ realmDb: realm  });
//   });
// }

//   getUserLocationHandler = () => {
//     //ToastAndroid.show("ronel gonzales", 3000);
//     navigator.geolocation.getCurrentPosition(position => {
//       // ToastAndroid.show(position.timestamp.toString(), 3000);
//       this.setState({
//         userLocation: {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.0622,
//           longitudeDelta: 0.0421 
//         }
//       });
//     }, err => ToastAndroid.show(err.message, 3000))
//   };

  render() {
    // const info = this.state.realmDb
    // ? 'Number of dogs in this Realm: ' + this.state.realmDb.objects('Dog').length
    // : 'Loading...';

    return (
    <View></View>
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


export default SitemapScreen;