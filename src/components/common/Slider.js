import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import styles from '../styles/Slider.style';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';

export default class Slider extends Component {

  _renderItem (entry) {
    return (
      <SliderEntry {...entry} />
    );
  }

  render () {
    return (
      <Carousel
        {...this.props}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        slideStyle={styles.slide}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
      />
    );
  }
}
