/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class BB8App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={require('./Resources/dotsaigon.png')} style={styles.image}/>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight underlayColor='#368a55' style={styles.button} onPress={() => console.log('pressed')}>
            <Text style={styles.buttonText}>Dine ing</Text>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#368a55' style={styles.button} onPress={() => console.log('pressed')}>
            <Text style={styles.buttonText}>Take out</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  button: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#43AC6A'
  },
  buttonText: {
    fontSize: 40,
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('BB8App', () => BB8App);
