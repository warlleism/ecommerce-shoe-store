/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/homeScreen';
import ProductList from './src/screens/release-list/release-list';
import { Provider } from 'mobx-react';
import Stores from './src/store';
import ProductRender from './src/screens/product-render/product-render'
import CartList from './src/screens/cart-list/cart-list';

function Home() {
  return <HomeScreen />
}

function AllProduct() {
  return <ProductList />
}

function Product() {
  return <ProductRender />
}

function Cart() {
  return <CartList />
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider {...Stores}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="/" component={Home} />
          <Stack.Screen name="ProductList" component={AllProduct} />
          <Stack.Screen name="Detail" component={Product} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;


