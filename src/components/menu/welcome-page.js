import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  NativeModules,
  Linking,
  Image
} from 'react-native';
import Button from 'react-native-button';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('welcomePage componentDidMount');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topEmptySpace}>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../../images/dot-saigon-logo.png')}
            style={styles.logo}/>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            containerStyle={{padding:10, height:50, width: 200, margin: 30, overflow:'hidden', borderRadius:4, backgroundColor: 'darkorange'}}
            style={{fontSize: 25, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._onDineInPressed()}>
            Dine In
          </Button>

          <Button
            containerStyle={{padding:10, height: 50, width: 200, margin: 30, overflow:'hidden', borderRadius:4, backgroundColor: 'midnightblue'}}
            style={{fontSize: 25, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._onTakeOutPressed()}>
            Take Out
          </Button>
        </View>

        <View style={styles.bottomEmptySpace}>
        </View>

      </View>
    );
  }

  _onDineInPressed() {
    this.props.navigator.push({name: 'menu'});
  }

  _onTakeOutPressed() {
    this.props.navigator.push({name: 'menu'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topEmptySpace: {
    flex: 1
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue'
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  bottomEmptySpace: {
    flex: 3
  }
});

module.exports = WelcomePage;
