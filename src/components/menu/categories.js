import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Category from './category';

class Categories extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.categories}>
        {this.props.categories.map((category, index) => {
          return this.renderCategory(category, index)
        })}
      </ScrollView>
    );
  }

  renderCategory(category, index) {
    return (
      <Category
        key={category.label}
        category={category}
        index={index}
        selectedCategoryIndex={this.props.selectedCategoryIndex}
        onSelectCategory={this.props.onSelectCategory}/>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    flex: 1
  }
});

module.exports = Categories;
