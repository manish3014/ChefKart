import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Product" component={ProductDetail} options={{headerShown:false}} />
      </Stack.Navigator>
  );
}

export default MainNavigation;