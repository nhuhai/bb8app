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
    console.log('signin componentDidMount');
    var url = Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));

    Linking.addEventListener('url', this._handleOpenURL.bind(this));
  }

  _handleOpenURL(event) {
    var self = this;

    async function initializeSDKMerchantWithToken(accessToken) {
      try {
        var result = await NativeModules.PayPalHereSDKBridge.initializeSDKMerchantWithToken(accessToken);

        console.log('>>>>> RCT: successfully authorized with Paypal');
        console.log('>>>>> RCT-result: ');
        console.log(result);
        self.setState({errorMessage: ''});
        self.props.navigator.push({name: 'menu', reset: true});
      } catch (e) {
        console.log('>>>>> RCT: Failed to authorize with Paypal');
        console.log('>>>>> Error: ');
        console.error(e);
        self.setState({errorMessage: 'Failed to Authorize Payment'});
      }
    }

    if (event && event.url) {
      var questionMarkIndex = event.url.indexOf('?');

      if (questionMarkIndex !== -1) {
        var startIndex = questionMarkIndex + 1;
        var accessToken = event.url.slice(startIndex);

        if (accessToken) {
          accessToken = decodeURIComponent(accessToken);
          console.log('access token');
          console.log(accessToken);

          initializeSDKMerchantWithToken(accessToken);
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signInForm}>
          <Button text={'Authorize Payment'} onPress={() => this.onAuthorizePaymentPressed()} />
          <Text style={styles.label}>{this.state.errorMessage}</Text>
        </View>

        <View style={styles.emptySpace}></View>
      </View>
    );
  }

  onAuthorizePaymentPressed() {
    // Paypal server: 'http://pph-retail-sdk-sample.herokuapp.com/toPayPal/live'
    // My server: 'http://paypal-retail-node.herokuapp.com/toPayPal/live'
    var paypalLoginUrl = 'http://pph-retail-sdk-sample.herokuapp.com/toPayPal/live';

    Linking.canOpenURL(paypalLoginUrl).then(supported => {
      if (supported) {
        Linking.openURL(paypalLoginUrl);
      } else {
        console.log('Don\'t know how to open URI: ' + paypalLoginUrl);
      }
    });
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
