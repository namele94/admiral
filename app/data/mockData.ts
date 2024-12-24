import {Product, Event} from '../types';

export const products: Product[] = [
  {
    id: '10',
    name: 'Semolina cake with cherry jam',
    image: 'https://www.gurmanluk.com/wp-content/uploads/2021/01/monte.png',
    price: 29,
    oldPrice: 35,
    calories: '282 Kcal',
    weight: '224 g',
    category: 'Favorite',
  },
  {
    id: '11',
    name: 'Grilled chicken with vegetables',
    image:
      'https://avatars.mds.yandex.net/i?id=b08eb365230e1b8d76d34c5e87d2ff17_l-8183963-images-thumbs&n=13',
    price: 35,
    oldPrice: 40,
    calories: '320 Kcal',
    weight: '300 g',
    category: 'Lunch',
  },
  {
    id: '12',
    name: 'Pasta with tomato sauce',
    image:
      'https://moreprodukt.info/wp-content/uploads/2019/11/spagetti_i_tunets.zxj0t.png',
    price: 25,
    oldPrice: 30,
    calories: '250 Kcal',
    weight: '200 g',
    category: 'Lunch',
  },
  {
    id: '13',
    name: 'Salmon with herbs',
    image:
      'https://cdn.shopify.com/s/files/1/1537/4819/files/Screen_Shot_2020-10-06_at_8.24.11_PM.png?v=1601987409',
    price: 45,
    oldPrice: 50,
    calories: '280 Kcal',
    weight: '250 g',
    category: 'Dinner',
  },
  {
    id: '14',
    name: 'Cheesecake with strawberries',
    image:
      'https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2019/05/07142008/homeubuntureleasesrelease_20190505071537webappmu-pluginsfoody-white-labeltmp1557228007-jZEExr.png',
    price: 20,
    oldPrice: 25,
    calories: '360 Kcal',
    weight: '150 g',
    category: 'Favorite',
  },
  {
    id: '15',
    name: 'Chocolate cake',
    image:
      'https://i.pinimg.com/736x/f9/dc/b0/f9dcb008a61b996656c5e8037f82be56.jpg',
    price: 18,
    oldPrice: 22,
    calories: '420 Kcal',
    weight: '200 g',
    category: 'Favorite',
  },
  {
    id: '16',
    name: 'Vegetable salad with feta',
    image:
      'https://as2.ftcdn.net/jpg/00/77/86/97/500_F_77869700_TntgBRb2cCrUheOFsLCU7TrOMWTkZmat.jpg',
    price: 19,
    oldPrice: 25,
    calories: '200 Kcal',
    weight: '180 g',
    category: 'Lunch',
  },
  {
    id: '17',
    name: 'Beef steak with fries',
    image:
      'https://t4.ftcdn.net/jpg/01/17/85/73/360_F_117857361_79u6JFB5H2frAzuolUgU1TJojgexu59s.jpg',
    price: 40,
    oldPrice: 45,
    calories: '500 Kcal',
    weight: '350 g',
    category: 'Dinner',
  },
  {
    id: '18',
    name: 'Fruit platter',
    image:
      'https://i.pinimg.com/736x/a0/6e/60/a06e60d662a3be27fc19948f2c98d497--fruit-platters-game-night.jpg',
    price: 22,
    oldPrice: 28,
    calories: '180 Kcal',
    weight: '300 g',
    category: 'Favorite',
  },
  {
    id: '19',
    name: 'Avocado toast',
    image:
      'https://avatars.mds.yandex.net/i?id=7af392fb031e9fb47acbcecb613a89f7_l-10636447-images-thumbs&n=13',
    price: 15,
    oldPrice: 20,
    calories: '210 Kcal',
    weight: '180 g',
    category: 'Lunch',
  },
  {
    id: '20',
    name: 'Vegetable soup',
    image:
      'https://i.pinimg.com/736x/e4/15/58/e4155835a3598c01567e5386d12a1352--veggie-soup-vegetable-soups.jpg',
    price: 12,
    oldPrice: 15,
    calories: '120 Kcal',
    weight: '250 g',
    category: 'Dinner',
  },
  {
    id: '21',
    name: 'Greek Salad',
    image:
      'https://www.chefmarket.ru/blog/wp-content/uploads/2018/07/grecheskiy-salat-1-e1686047817994.jpg',
    price: 19,
    oldPrice: 23,
    calories: '220 Kcal',
    weight: '200 g',
    category: 'Lunch',
  },
  {
    id: '22',
    name: 'Grilled Shrimp Skewers',
    image:
      'https://i.pinimg.com/736x/3a/6d/f4/3a6df4d2096380fc54465396c1f7fe17.jpg',
    price: 30,
    oldPrice: 35,
    calories: '190 Kcal',
    weight: '250 g',
    category: 'Dinner',
  },
  {
    id: '23',
    name: 'Chicken Caesar Salad',
    image:
      'https://www.chefmarket.ru/blog/wp-content/uploads/2019/08/caesar-salad-e1565347162946.jpg',
    price: 24,
    oldPrice: 28,
    calories: '280 Kcal',
    weight: '230 g',
    category: 'Favorite',
  },
  {
    id: '24',
    name: 'Roasted Salmon',
    image:
      'https://i.pinimg.com/originals/9d/98/73/9d9873840e1503b56a4446f56e975cb2.jpg',
    price: 45,
    oldPrice: 50,
    calories: '310 Kcal',
    weight: '300 g',
    category: 'Dinner',
  },
  {
    id: '25',
    name: 'Tuna Poke Bowl',
    image:
      'https://i.pinimg.com/736x/74/d7/8a/74d78a6cb30598d950048aa090eb6c34.jpg',
    price: 35,
    oldPrice: 40,
    calories: '350 Kcal',
    weight: '280 g',
    category: 'Favorite',
  },
  {
    id: '26',
    name: 'Vegetable Stir Fry',
    image:
      'https://thumbs.dreamstime.com/b/stir-fry-vegetables-wok-stir-fry-vegetables-wok-healthy-vegan-food-low-calorie-dish-112976451.jpg',
    price: 25,
    oldPrice: 29,
    calories: '180 Kcal',
    weight: '300 g',
    category: 'Lunch',
  },
  {
    id: '27',
    name: 'Spaghetti Carbonara',
    image:
      'https://i.pinimg.com/736x/bc/46/12/bc4612e97975eccecf83eeebf6d5336f.jpg',
    price: 28,
    oldPrice: 32,
    calories: '420 Kcal',
    weight: '250 g',
    category: 'Dinner',
  },
  {
    id: '28',
    name: 'Chocolate Mousse',
    image:
      'https://i.pinimg.com/736x/8a/64/99/8a649936603cea0ef93cbadb5f28f882.jpg',
    price: 15,
    oldPrice: 18,
    calories: '320 Kcal',
    weight: '150 g',
    category: 'Favorite',
  },
  {
    id: '29',
    name: 'Pumpkin Soup',
    image:
      'https://i.pinimg.com/originals/05/79/bc/0579bcbf7ea114203409c38b46ee63ea.jpg',
    price: 12,
    oldPrice: 15,
    calories: '110 Kcal',
    weight: '220 g',
    category: 'Lunch',
  },
];

export const Events = {
  Event1: {
    id: '1',
    title:
      'Eat and enjoy your food in the dark with dimmed lights and live music, immerse yourself completely in this atmosphere, ',
    subtitle: 'Get good vibes with it',
  },
  Event2: {
    id: '2',
    title:
      'Spend your time pleasantly, in a pleasant company, dance to cheerful music, forget about all your problems, and enjoy the moment',
    subtitle: 'Our place will help you with that.',
  },
  Event3: {
    id: '2',
    title:
      'Drink tea in pleasant company, with interesting interactives and events',
    subtitle: 'Immerse yourself in tea culture with us',
  },
};

export const filterData: string[] = ['Favorite', 'Lunch', 'Dinner'];
