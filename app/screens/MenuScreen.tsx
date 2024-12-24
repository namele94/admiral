import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

const bgImg = require('../../app/assets/bg_drawer.png');
const trashIcon = require('../../app/assets/trash.png');

interface MenuScreenProps {
  navigation: any;
}

const MenuScreen: React.FC<MenuScreenProps> = props => {
  const {productStore} = useStore();
  const {navigation} = props;
  const {cart} = productStore;

  return (
    <ImageBackground
      source={bgImg}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <Text style={styles.title}>Admiral</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Shop')}>
            <Text style={styles.menuText}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Reservation')}>
            <Text style={styles.menuText}>Reservation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Contacts')}>
            <Text style={styles.menuText}>Contacts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Events')}>
            <Text style={styles.menuText}>Events</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Cart')}>
        <Image source={trashIcon} style={styles.icon} />
        {cart.length > 0 && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>{cart.length}</Text>
          </View>
        )}
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    letterSpacing: 1,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    marginBottom: 40,
  },
  menuText: {
    color: COLORS.black,
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
  },
  icon: {
    width: 65,
    height: 65,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    paddingRight: 30,
  },
  counter: {
    backgroundColor: COLORS.error,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    position: 'absolute',
    bottom: -3,
    right: 25,
  },
  counterText: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default observer(MenuScreen);
