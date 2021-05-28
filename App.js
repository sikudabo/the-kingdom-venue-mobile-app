import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import KingdomLogo from './media/the-kingdom-logo.png';
import CatComponent from './components/cat';

export default function App() {
  return (
    <ScrollView>
      <Text>
        Welcome to the Kingdom Venue
      </Text>
      <View>
        <Text>
          The best place to get out in Marion
        </Text>
        <Image
          source={{
            uri: KingdomLogo,
          }}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <CatComponent name='Tiger' />
        <TextInput 
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue='You can type in me!'
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
