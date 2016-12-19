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
import Button from '../common/button';

const ROUTES = {
  items: Items
};

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('menu componentDidMount');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categoriesContainer}>
          <Text>Categories Container</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button text={'Back'} onPress={() => this._onBackButtonPressed()} />
        </View>
      </View>
    );
  }

  _onBackButtonPressed() {
    this.props.navigator.push({name: 'welcomePage', isGoingBack: true});
  }

  onSelectCategory(index) {
    console.log('onSelectCategory -- index: ' + index);
    this.setState({ selectedCategoryIndex: index });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoriesContainer: {
    flex: 5
  },

  buttonsContainer: {
    flex: 1
  },
});

module.exports = Menu;
