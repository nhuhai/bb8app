import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Category from './category';

class Categories extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.categories}>
        {this.props.categories.map(this.renderCategory)}
      </ScrollView>
    );
  }

  renderCategory(category) {
    return (
      <Category key={category.label} category={category} />
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    flex: 1,
    flexDirection: 'column',
    borderRightWidth: 1,
    borderRightColor: 'orange'
  }
});

module.exports = Categories;
