import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../common/button';

class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You can sign up here!</Text>
        <Button text={'I have an account...'} onPress={() => {this.onSigninPress()}} />
      </View>
    );
  }

  onSigninPress() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

module.exports = SignUp;
