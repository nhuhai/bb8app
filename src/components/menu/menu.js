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
  Platform,
  TouchableOpacity,
  Modal
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
    this.state = {
      modalVisible: false,
      width: null,
      height: null,
      selectedItem: null,
      selectedCategoryIndex: 0
    };
  }

  componentDidMount() {
    console.log('menu componentDidMount');
    setTimeout(this.measureSwiper);
  }

  storeSwiperLayout = (ox, oy, width, height, px, py) => {
    this.setState({ width: width, height: height })
    console.log('width: ' + width);
    console.log('height: ' + height);
  }

  measureSwiper = () => this.refs.container.measure(this.storeSwiperLayout);

  render() {
    return (
      <View style={styles.container} ref="container">
        {this._renderScrollableTabView()}

        {this._renderBottomButtons()}

        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }

  _renderModalContent() {
    console.log('_renderModalContent');
    const item = this.state.selectedItem;

    if (item) {
      return (
        <View style={styles.modal}>
          <View
            width={this.state.width * 0.9}
            height={this.state.height * 0.9}
            style={styles.modalContent}>

            {this._renderModalContentMain(item)}
            {this._renderModalContentBottomButtons()}
          </View>
        </View>
      );
    }
  }

  _addToCart() {
    console.log('_addToCart');
  }

  _renderModalContentMain(item) {
    const selectedIndex = this.state.selectedCategoryIndex;
    const customization = dotSaigonMenu.categories[selectedIndex].customization;

    return (
      <View style={styles.modalContentMain}>
        <View style={styles.modalContentMainHeader}>
          <Text style={styles.modalContentMainHeaderText}>Customize your {item.label}</Text>
        </View>

        {this._renderCustomizationCategories(customization)}
      </View>
    );
  }

  _renderCustomizationCategories(customization) {
    if (customization) {
      return (
        <View style={styles.modalContentMainScrollViewContainer}>
          <ScrollView>
            {customization.map((category, index) => {
              return this._renderCustomizationCategory(category, index);
            })}
          </ScrollView>
        </View>
      );
    }
  }

  _renderCustomizationCategory(category, index) {
    return (
      <View key={index} style={styles.customizationCategory}>
        <View style={styles.customizationCategoryHeader}>
          <Text style={styles.customizationCategoryHeaderText}>{category.label}</Text>
        </View>

        <ScrollView
          style={styles.customizationCategoryScrollView}
          horizontal={true}>
          {category.selections.map((selection, index) => {
            return this._renderCustomizationItem(selection, index);
          })}
        </ScrollView>
      </View>
    );
  }

  _renderCustomizationItem(selection, index) {
    return (
      <Text key={index}>{selection.label}</Text>
    );
  }

  _renderModalContentBottomButtons() {
    return (
      <View style={styles.modalContentBottomButtons}>
        <Button
          containerStyle={{padding:10, height:50, width: 200, margin: 30, overflow:'hidden', borderRadius:4, backgroundColor: 'red'}}
          style={{fontSize: 25, color: 'white'}}
          styleDisabled={{color: 'red'}}
          onPress={this._setModalVisible.bind(this, false)}>
          Cancel
        </Button>

        <Button
          containerStyle={{padding:10, height:50, width: 200, margin: 30, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
          style={{fontSize: 25, color: 'white'}}
          styleDisabled={{color: 'red'}}
          onPress={() => {this._addToCart()}}>
          Add to Cart
        </Button>
      </View>
    );
  }

  _renderScrollableTabView() {
    return(
      <View style={styles.categories}>
        <ScrollableTabView
          style={{marginTop: 20}}
          initialPage={0}
          renderTabBar={() => <FacebookTabBar />}
          onChangeTab={(selectedTab) => this.setState({selectedCategoryIndex: selectedTab.i})}>

          {dotSaigonMenu.categories.map((category, index) => {
            return this._renderCategory(category, index);
          })}

        </ScrollableTabView>
      </View>
    );
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

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
      <TouchableOpacity style={styles.card} key={index}
        activeOpacity={0.9}
        onPress={() => { this._onSelectItem(item) }}>
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
      </TouchableOpacity>
    );
  }

  _onSelectItem(item) {
    console.log('_onSelectItem');
    console.log(item);

    this.setState({
      selectedItem: item
    });

    this._setModalVisible(true);
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
    flex: 10
  },

  items: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonsContainer: {
    flex: 1
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)'
  },

  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 20,
    height: 280,
    width: 600,
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
    margin: 5
  },

  description: {
    fontSize: 11,
    margin: 5
  },

  price: {
    fontSize: 20,
    margin: 5
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContent: {
    backgroundColor: '#fefefe'
  },

  modalContentMain: {
    flex: 7
  },

  modalContentBottomButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalContentMainHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalContentMainScrollViewContainer: {
    flex: 6,
    padding: 40
  },

  modalContentMainHeaderText: {
    fontSize: 25,
    fontWeight: '700'
  },

  customizationCategory: {
    height: 210
  },

  customizationCategoryHeader: {
    flex: 1
  },

  customizationCategoryHeaderText: {
    fontSize: 18,
    fontWeight: '600'
  },

  customizationCategoryScrollView: {
    flex: 6
  }
});

module.exports = Menu;
