import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';

const EventsScreen = (props: any) => {
  const handleNavigate = (routeName: string) => {
    props.navigation.navigate('Event', {routeName});
  };

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => handleNavigate('Event1')}
          style={[styles.buttonContainer, styles.topButton]}>
          <Image
            source={require('../assets/event1.png')}
            style={styles.image}
          />
        </Pressable>
        <Pressable
          onPress={() => handleNavigate('Event2')}
          style={styles.buttonContainer}>
          <Image
            source={require('../assets/event2.png')}
            style={styles.image}
          />
        </Pressable>
        <Pressable
          onPress={() => handleNavigate('Event3')}
          style={styles.buttonContainer}>
          <Image
            source={require('../assets/event3.png')}
            style={styles.image}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  topButton: {
    paddingTop: 30,
  },
});

export default EventsScreen;
