import React, { Component } from 'react';
import  { TextInput , Text ,View, Image , Button , StyleSheet } from 'react-native';


 class LoginScreen extends Component {
    render() {

        return(
            <View style={styles.container}>
            <Image    source={require('../img/header.png')} /> 
            <Button title="Go to Home"/>
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
    logo:{
      width:270,
      height:200
    }
  });

  export default LoginScreen;