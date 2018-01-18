import React, { Component } from 'react';
import  { TextInput , Text ,View, Image, StyleSheet } from 'react-native';

class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
      <Text>
         HOME
        </Text>
       
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
  });
  

export default HomeScreen;