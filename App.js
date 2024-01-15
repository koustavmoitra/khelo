// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


import Home from './App/Pages/Home';
import News from './App/Pages/News';
import Nearby from './App/Pages/Nearby';
import Profile from './App/Pages/Profile';
import Login from './App/Pages/Login';
import ViewMatches from './App/Pages/ViewMatches';
import { YellowBox } from 'react-native';
import { LogBox } from 'react-native';

// Ignore specific warnings
LogBox.ignoreLogs(['ViewPropTypes will be removed']);

// Ignore all logs
LogBox.ignoreAllLogs();

// Ignore specific warnings
YellowBox.ignoreWarnings(['ViewPropTypes will be removed']);

// Disable all warnings
console.disableYellowBox = true;


// app components and logic go here...
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainStackNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={Nearby}
        options={{
          tabBarLabel: 'Nearby',
          tabBarIcon: ({ color }) => (
            <Ionicons name="location" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MainStackNavigator} />
        <Stack.Screen name="ViewMatches" component={ViewMatches} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
