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
import Button from 'react-native-button';
import { ENTRIES1 } from '../../data/entries';
import Slider from '../common/Slider';

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
          <Slider
            items={ENTRIES1}
            firstItem={1}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.6}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            containerStyle={{padding:10, height:50, width: 200, margin: 30, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
            style={{fontSize: 25, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._onBackButtonPressed()}>
            Back
          </Button>
        </View>
      </View>
    );
  }

  _renderItem(data, index) {
    console.log('_renderItem');
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
    flex: 6,
    marginTop: 200
    // marginBottom: 150
  },

  buttonsContainer: {
    flex: 1
  },
});

module.exports = Menu;
