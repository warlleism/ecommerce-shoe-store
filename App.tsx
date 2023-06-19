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
import ProductList from './src/screens/product-list/product-list';

function Home() {
  return <HomeScreen />
}

function Product() {
  return <ProductList />
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="ProductList" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


