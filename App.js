import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import GroceriesScreen from './src/screens/GroceriesScreen';
import ActivitiesScreen from './src/screens/ActivitiesScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Groceries" component={GroceriesScreen} />
        <Drawer.Screen name="Activities" component={ActivitiesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}