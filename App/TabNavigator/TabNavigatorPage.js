// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Nearby from '../Pages/Nearby'; // Import your Nearby component
import Profile from '../Pages/Profile'; // Import your Profile component

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
   <View>
    <Text>tab</Text>
   </View>
  );
}
