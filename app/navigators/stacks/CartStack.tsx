import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../../screens/Cart/CartScreen.tsx';
import COLORS from '../../styles/colors';
import ConfirmOrderScreen from '../../screens/Cart/ConfirmOrderScreen.tsx';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerStyle: {backgroundColor: COLORS.mainBG},
        headerTintColor: COLORS.white,
        headerBackTitle: 'Back',
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={ConfirmOrderScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
