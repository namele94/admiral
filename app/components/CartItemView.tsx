import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';
import {observer} from 'mobx-react';
import {BORDER_RADIUS} from '../styles/constants.ts';

interface ItemViewProps {
  item: Product;
}

const CartItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus, removeFromCart} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.price}>
            ${item.price} <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          </Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>
            {item.calories}, {item.weight}
          </Text>
        </View>
        <View style={styles.addButtonContainer}>
          {quantity > 0 ? (
            <View style={styles.counterContainer}>
              <CounterButton
                value={quantity}
                plus={() => handlePlus(item)}
                minus={() => handleMinus(item.id)}
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to basket</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    margin: 8,
    paddingVertical: 4,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: '40%',
  },
  image: {
    width: 131,
    height: 135,
    alignSelf: 'center',
    borderRadius: 16,
  },
  contentContainer: {
    width: '55%',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 12,
    padding: 4,
  },
  topContainer: {
    flexDirection: 'row',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: 'gray',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    marginTop: 4,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    width: 18,
    height: 18,
  },
  nameContainer: {
    height: width * 0.13,
  },
  addButtonContainer: {
    paddingHorizontal: 4,
  },
});

export default observer(CartItemView);
