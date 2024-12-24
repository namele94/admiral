import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/StoreContext';
import COLORS from '../../styles/colors';
import CustomButton from '../../components/CustomButton.tsx';
import CartItemView from '../../components/CartItemView.tsx';

const emptyIcon = require('../../assets/empty.png');
const CartScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, cartTotal, clearCart} = productStore;

  const navigateToConfirmScreen = () => {
    navigation.navigate('Order');
    clearCart();
  };

  if (cart.length === 0) {
    return <EmptyCartView />;
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartItemView item={item} />}
          contentContainerStyle={{paddingBottom: 100}}
        />

        {cartTotal > 0 && (
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={navigateToConfirmScreen}
                title={`Total: ${cartTotal}$`}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCartText}>Your cart is empty</Text>
      <Text style={[styles.emptyCartText, styles.emptyCartSubText]}>
        Select the first item
      </Text>
      <Image source={emptyIcon} style={styles.emptyIcon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomContainer: {
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: '600',
  },
  emptyCartSubText: {
    color: COLORS.primary,
    marginTop: 20,
    marginBottom: 60,
  },
  emptyIcon: {
    width: 200,
    height: 200,
  },
});

export default observer(CartScreen);
