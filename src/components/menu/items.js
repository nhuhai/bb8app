import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Item from './item';
import Swiper from 'react-native-swiper';

class Items extends Component {
  constructor(props) {
    super(props)
    this.state = { width: null, height: null }
  }

  componentDidMount() {
    setTimeout(this.measureSwiper)
  }

  storeSwiperLayout = (ox, oy, width, height, px, py) => this.setState({ width: width, height: height })

  measureSwiper = () => this.refs.container.measure(this.storeSwiperLayout);

  renderSwiper = () => {
    if ( this.state.width > 0 ) {
      return (
        <Swiper width={this.state.width} height={this.state.height} showsButtons={true}>
           { this.props.category.items.map(item => this.renderItem(item)) }
        </Swiper>
      )
    }
  }

  render() {
    // console.log(this.props.category);
    return (
      <View style={styles.container} ref="container">
        { this.renderSwiper() }
      </View>
    );
  }

  renderItem(item) {
    return (
      <Item key={item.itemId} item={item} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightskyblue'
  }
});

module.exports = Items;
