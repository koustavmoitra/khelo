import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors';
import { FontAwesome } from '@expo/vector-icons';



export default function Login({ navigation }) {

  // Set the header options for this specific screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  return (
    <View style={{ flex: 1, }}>
      <Text style={{ fontSize: 65, textAlign: 'center', marginTop: 50 }}>Khel⚽</Text>
      <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 50, marginBottom: 25 }}>Ready, Steady, Play !</Text>
      <Image source={require('./../Assets/Images/logo.jpg')} style={{ width: '100%', height: 350, alignItems: 'center', resizeMode: 'contain', borderRadius: 50, borderColor: '#fff' }} />
      <Text style={{ fontSize: 35, textAlign: 'center', marginTop: 50, fontStyle: 'italic' }}> New to khelo App </Text>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <FontAwesome style={{ marginRight: 15 }} name="google" size={24} color="black" />
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 20,
    margin: 30,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  }
});