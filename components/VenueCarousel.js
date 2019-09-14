import {Animated, View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import IndustryCity from '../assets/images/Industry-City9.jpg';

export default class VenueCarousel extends Component {
    _renderItem ({item, index}) {
    console.log('render item', item, index);
      return (
        <View
          style={{
            // flex: 1,
            backgroundColor: 'red',
            width: Dimensions.get('window').width
            // height: 50
          }}
        >
          <Image
            style={{width: Dimensions.get('window').width}}
            source={IndustryCity}
          />
          {/* <Text>
            Hello world
          </Text> */}
        </View>
      )
    }


    render () {
    return (
        <View>
          {/* <Image
            style={{width: 50, height: 50}}
            source={globe}
          /> */}
          <Carousel
            // style={{ backgroundColor: 'green' }}
            ref={(c) => { this._carousel = c; }}
            data={[
              {title: '1'},
              {title: '2'},
              {title: '3'}
            ]}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
          />
        </View>
      );
    }
}
