import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  NativeModules,
  NativeAppEventEmitter
} from 'react-native';
import Categories from './categories';
import dotSaigonMenu from '../../data/dot-saigon-menu';
import Items from './items';

const ROUTES = {
  items: Items
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryIndex: 0,
      cardReaderStatus: 'Card Reader Status: '
    };

    this.subscription = NativeAppEventEmitter.addListener(
      'CardReaderStatus',
      (readerStatus) => {
        // No Reader Found!
        // Audio Jack Reader Connected!
        console.log('>>> BB8 - RCT - Card Reader Status:' + readerStatus.message);
        this.setState({ cardReaderStatus: readerStatus.message});
      }
    );

    this.subscription1 = NativeAppEventEmitter.addListener(
      'ePPHTransactionType_CardDataReceived',
      () => {
        console.log('>>> BB8 - RCT - ePPHTransactionType_CardDataReceived:');
        NativeModules.PayPalHereSDKBridge.processPaymentWithPaymentType();
      }
    );
  }

  componentDidMount() {
    console.log('menu componentDidMount');
    NativeModules.PayPalHereSDKBridge.clearAnyExistingInfo();
  }

  componentWillUnmount() {
    this.subscription.remove();
    this.subscription1.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categories}>
          <Categories
            categories={dotSaigonMenu.categories}
            selectedCategoryIndex={this.state.selectedCategoryIndex}
            onSelectCategory={this.onSelectCategory.bind(this)}/>
        </View>

        <Text style={styles.label}>'Card Reader Status: '{this.state.cardReaderStatus}</Text>

        <Navigator
          ref='navigator'
          style={styles.categoryDetail}
          initialRoute={{name: 'items'}}
          renderScene={this.renderScene.bind(this)}
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
    return (
      <Component
        route={route}
        navigator={navigator}
        category={dotSaigonMenu.categories[this.state.selectedCategoryIndex]}/>
    );
  }

  onSelectCategory(index) {
    console.log('onSelectCategory -- index: ' + index);
    this.setState({ selectedCategoryIndex: index });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  categories: {
    flex: 1,
  },

  categoryDetail: {
    flex: 5
  },
});

module.exports = Menu;
