import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  NativeModules,
  Linking
} from 'react-native';
import Button from '../common/button';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  componentDidMount() {
    var url = Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));

    Linking.addEventListener('url', this._handleOpenURL);

    NativeModules.PayPalHereSDKBridge.showImage()
  }

  _handleOpenURL(event) {
    console.log('access token');
    console.log(event.url);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signInForm}>
          <Text>Sign In</Text>

          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})} />

          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})} />

          <Text style={styles.label}>{this.state.errorMessage}</Text>

          <Button text={'Sign In'} onPress={() => this.onSigninPress()} />
          <Button text={'I need an account'} onPress={() => this.onSignupPress()} />
        </View>

        <View style={styles.emptySpace}></View>
      </View>
    );
  }

  onSigninPress() {
    var paypalLoginUrl = 'http://paypal-retail-node.herokuapp.com/toPayPal/sandbox';

    Linking.canOpenURL(paypalLoginUrl).then(supported => {
      if (supported) {
        Linking.openURL(paypalLoginUrl);
      } else {
        console.log('Don\'t know how to open URI: ' + paypalLoginUrl);
      }
    });

    if (this.state.username.toLowerCase() === 'dotsaigon' && this.state.password === '1234') {
      console.log('sign in successfully');
      this.setState({errorMessage: ''});
      this.props.navigator.push({name: 'menu', reset: true});
    } else {
      this.setState({errorMessage: 'Invalid login parameters'});
    }

    this.setState({password: ''});
  }

  onSignupPress() {
    // navigate over to signup
    this.props.navigator.push({name: 'signup'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  signInForm: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptySpace: {
    flex: 2
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

module.exports = SignIn;
