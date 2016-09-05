import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Categories from './categories';

const categories = [
  {
    label: 'Banh Mi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png'
  },
  {
    label: 'Noodle Salad',
    image: 'http://4.bp.blogspot.com/-ocSjuJNh9Xs/TjisRBBh0II/AAAAAAAABFY/P9hsMibCGYI/s1600/IMG_1927.JPG'
  },
  {
    label: 'Pho',
    image: 'http://dx9rjq5h30myv.cloudfront.net/wp-content/uploads/2012/02/pho_chin.jpg'
  },
  {
    label: 'Rolls',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Spring_rolls_with_peanut_sauce.jpg'
  },
  {
    label: 'Drinks',
    image: 'https://franhayden.files.wordpress.com/2016/07/cocktails.png'
  }
];

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categories}>
          <Categories categories={categories} />
        </View>

        <View style={styles.categoryDetail}>
          <Text>Category Detail</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  categories: {
    flex: 1,
    paddingTop: 20
  },

  categoryDetail: {
    flex: 5,
    flexDirection: 'row',
  },
});

module.exports = Menu;
