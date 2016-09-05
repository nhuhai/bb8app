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
      <TouchableHighlight style={styles.category} underlayColor='coral' onPress={this._onPressButton}>
        <View style={styles.button}>
          <Image source={{uri: this.props.category.image}} style={{width: 100, height: 100}}/>
          <Text style={styles.categoryText}>{this.props.category.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    flex: 1
  },

  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  categoryText: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
  }
});

module.exports = Category;
