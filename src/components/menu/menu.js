import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator
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
      selectedCategoryIndex: 0
    };
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
