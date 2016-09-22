import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Category extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.category}
        underlayColor='coral'
        onPress={ () => this._onSelectCategory() }>
        <View style={this._getButtonStyle()}>
          <Image source={{uri: this.props.category.image}} style={styles.categoryImage}/>
          <Text style={this._getCategoryTextStyle()}>{this.props.category.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onSelectCategory() {
    console.log('_onSelectCategory - index: ' + this.props.index);
    this.props.onSelectCategory(this.props.index);
  }

  _getButtonStyle() {
    if (this.props.selectedCategoryIndex === this.props.index) {
      return [styles.button, styles.buttonSelected];
    }

    return styles.button;
  }

  _getCategoryTextStyle(){
    if (this.props.selectedCategoryIndex === this.props.index) {
      return [styles.categoryText, styles.categoryTextSelected];
    }

    return styles.categoryText;
  }
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    // borderWidth: 1,
    borderColor: 'blue',
  },

  categoryImage: {
    width: 110,
    height: 110
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonSelected: {
    backgroundColor: 'lightskyblue'
  },

  categoryText: {
    fontSize: 20,
    paddingTop: 5,
  },

  categoryTextSelected: {
    fontWeight: 'bold',
    color: 'white'
  }
});

module.exports = Category;
