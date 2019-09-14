import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Button } from 'react-native-elements';
import { Rating } from 'react-native-elements';
import VenueCarousel from '../components/VenueCarousel';
// import { MonoText } from '../components/StyledText';
export default class HomeScreen extends Component {
  _renderItem ({item, index}) {
    return (
      <View>
        <Text>
        {item.title}
        </Text>
        <Card
          title='Rockwood Music Hall'
          image={require('../assets/images/venues/Rockwood/Rockwood1.jpg')}>
          <Rating
            type='custom'
            onFinishRating={this.ratingCompleted}
            ratingColor='#000'
            ratingTextColor='#000'
            imageSize={20}
            style={{ paddingVertical: 10 }}
          />
          <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW MORE' />
        </Card>
      </View>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <LinearGradient
            colors={['rgba(0,0,0,1)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 300,
            }}
          />
            <Image
              source={
                __DEV__
                  ? require('../assets/images/musability-app.png')
                  : require('../assets/images/musability-app.png')
              }
              style={styles.welcomeImage}
            />
        <Carousel
        ref={(c) => { this._carousel = c; }}
        data={[{title:"1"}, {title: "2"}, {title: "3"}]}
        renderItem={(args)=>{
          return this._renderItem(args);
        }}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        layout={'stack'}
        layoutCardOffset={'18'}
        />
          </View>
        </ScrollView>
        {/* <View style={styles.tabBarInfoContainer}>
        <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 300,
            }}
          />
          <Text style={styles.tabBarInfoText}>
            Tab bar
          </Text>
        </View> */}
      </View>
  );
}
}
// HomeScreen.navigationOptions = {
//   header: null,
// };
// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );
//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }
// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }
// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#851414',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
    marginTop: -30,
    marginLeft: 160,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(56, 51, 51)',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgb(56, 51, 51)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  cardContainer: {
    flex: 1,
    paddingTop: 15,
    height: 250,
    width: 150,
    backgroundColor: '#808080',
  },
});
