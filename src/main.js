import React, { Component } from 'react';
import { View, Navigator, StyleSheet, StatusBar } from 'react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import AuthorizePayPal from './components/authentication/authorize-paypal';
import Menu from './components/menu/menu';
import WelcomePage from './components/menu/welcome-page';

const ROUTES = {
  signin: SignIn,
  signup: SignUp,
  authorizePayPal: AuthorizePayPal,
  welcomePage: WelcomePage,
  menu: Menu
};

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Navigator
          ref='navigator'
          style={styles.navigator}
          initialRoute={{name: 'welcomePage'}}
          renderScene={this.renderScene}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
          onDidFocus={(route) => {
            if (route.reset) {
              this.refs.navigator.immediatelyResetRouteStack([{ name: route.name }])
            }
          }}
          />
      </View>
    );
  }

  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigator: {
    flex: 1
  }
})

module.exports = Main;
