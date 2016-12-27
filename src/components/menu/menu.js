import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  NativeModules,
  NativeAppEventEmitter,
  ScrollView,
  Image,
  Platform
} from 'react-native';
import Categories from './categories';
import dotSaigonMenu from '../../data/dot-saigon-menu';
import Items from './items';
import Button from 'react-native-button';
import { ENTRIES1 } from '../../data/entries';
import Slider from '../common/Slider';
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

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
        {this._renderScrollableTabView()}

        {this._renderBottomButtons()}
      </View>
    );
  }

  _renderScrollableTabView() {
    return(
      <View style={styles.categories}>
        <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={0}
          renderTabBar={() => <FacebookTabBar />}
          >

          {dotSaigonMenu.categories.map((category, index) => {
            return this._renderCategory(category, index);
          })}

        </ScrollableTabView>
      </View>
    );
  }

  _renderBottomButtons() {
    return(
      <View style={styles.buttonsContainer}>
        <Button
          containerStyle={{padding:10, height:50, width: 200, margin: 30, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
          style={{fontSize: 25, color: 'white'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._onBackButtonPressed()}>
          Back
        </Button>
      </View>
    );
  }

  _renderCategory(category, index) {
    console.log('_renderCategory');
    var rows = [];

    var i, j, temparray, chunk = 2;

    for (i = 0, j = category.items.length; i < j; i += chunk) {
      temparray = category.items.slice(i, i + chunk);
      rows.push(temparray);
    }

    return (
      <ScrollView tabLabel={category.icon} style={styles.tabView} key={category.label}>
        {rows.map((row, index) => {
          return this._renderRow(row, index);
        })}
      </ScrollView>
    );
  }

  _renderRow(items, index) {
    return (
      <View style={styles.row} key={index}>
        {items.map((item, index) => {
          return this._renderCard(item, index);
        })}
      </View>
    );
  }

  _renderCard(item, index) {
    var price = (item.price/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    return (
      <View style={styles.card} key={index}>
        <View style={styles.imageSide}>
          <Image
            source={item.image}
            style={styles.image}
          />
        </View>
        <View style={styles.textSide}>
          <Text style={styles.itemLabel}>{item.label}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${price}</Text>
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
  categories: {
    flex: 10,
    borderWidth: 1,
    borderColor:'red'
  },

  items: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green'
  },

  buttonsContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue'
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
    borderWidth: 1,
    borderColor: 'green'
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 20,
    height: 280,
    width: 600,
    // padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection: 'row'
  },

  imageSide: {
    flex: 2
  },

  textSide: {
    flex: 1
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    borderRadius: Platform.OS === 'ios' ? 6 : 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    width: null, height: null
  },

  itemLabel: {
    fontSize: 25,
    margin: 15
  },

  description: {
    fontSize: 15,
    margin: 15
  },

  price: {
    fontSize: 20,
    margin: 15
  }
});

module.exports = Menu;
