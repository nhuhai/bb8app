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
          configureScene={(route) => {
              if (route.isGoingBack) {
                return Navigator.SceneConfigs.FloatFromLeft;
              } else {
                return Navigator.SceneConfigs.FloatFromRight;
              }
            }
          }
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
    Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
       return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
     };
    
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
