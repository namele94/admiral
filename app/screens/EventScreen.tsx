import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import CustomButton from '../components/CustomButton.tsx';
import {Events} from '../data/mockData.ts';

interface EventScreenProps {
  navigation: any;
  route: {
    params: {
      routeName: 'Event1' | 'Event2' | 'Event3';
    };
  };
}

const eventImages: any = {
  1: require('../assets/event1.png'),
  2: require('../assets/event2.png'),
  3: require('../assets/event3.png'),
};

const EventScreen: React.FC<EventScreenProps> = props => {
  const {route} = props;
  const imageSource =
    eventImages[Events[route.params.routeName]?.id] ||
    require('../assets/event1.png');

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.topContainer}>
          <Text style={styles.text}>
            {Events[route.params.routeName].title}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.subText}>
            {Events[route.params.routeName].subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'Back to menu'}
          onPress={() => props.navigation.navigate('Menu')}
        />
      </View>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: COLORS.white,
    fontSize: 20,
    // width: '80%',
  },
  subText: {
    textAlign: 'center',
    fontWeight: '500',
    color: COLORS.primary,
    fontSize: 20,
    marginTop: 20,
  },
  topContainer: {
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  bottomContainer: {
    paddingBottom: 140,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});
