import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Product} from '../types';
import ItemView from '../components/ItemView.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {filterData} from '../data/mockData.ts';
import {BORDER_RADIUS} from '../styles/constants.ts';
import LinearView from '../components/LinearView.tsx';
import ProductCard from '../components/ProductCard.tsx';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter, cartTotal} =
    productStore;

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.cartBtnWrapContainer}>
          <LinearView>
            {/*@ts-ignore*/}
            <Pressable
              onPress={() => props.navigation.navigate('Cart')}
              style={styles.cartBtnContainer}>
              <Image
                source={require('../assets/cart.png')}
                style={styles.icon}
                tintColor={COLORS.white}
              />
              <Text style={styles.cartBtnText}>${cartTotal}</Text>
            </Pressable>
          </LinearView>
        </View>
      ),
    });
  }, [cartTotal]);

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;

  const renderFilter = ({item}: {item: string}) => (
    <Filter
      title={item}
      isActive={activeFilter === item}
      onPress={() => setFilter(item)}
    />
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
      <FlatList
        data={filterData}
        renderItem={renderFilter}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const Filter = ({
  title,
  isActive,
  onPress,
}: {
  title: string;
  isActive: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.filterItemContainer} onPress={onPress}>
      <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
        {title}
      </Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.mainBG,
  },
  container: {
    backgroundColor: COLORS.mainBG,
    paddingBottom: 400,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  filterTextActive: {
    color: COLORS.primary,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    textAlign: 'center',
  },
  filterContainer: {
    height: 80,
    width: '100%',
    paddingLeft: 8,
    justifyContent: 'space-evenly',
  },
  filterItemContainer: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
});

export default observer(HomeScreen);
