import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';

const ProductCard = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.price}>
          ${item.price} <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        </Text>
        <View style={styles.favoriteButton}>
          <Image
            source={require('../assets/heart.png')}
            style={styles.icon}
            tintColor={
              item.category === 'Favorite' ? COLORS.error : COLORS.white
            }
            resizeMode={'contain'}
          />
        </View>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          {item.calories}, {item.weight}
        </Text>
      </View>
      <View style={{alignContent: 'flex-end'}}>
        {quantity > 0 ? (
          <View style={styles.counterContainer}>
            <CounterButton
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          </View>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to basket</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: 'gray',
  },
  favoriteButton: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
  },
  heart: {
    fontSize: 18,
    color: 'gray',
  },
  heartActive: {
    color: '#FFD700',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    marginTop: 10,
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
    height: width * 0.15,
  },
});

export default ProductCard;
