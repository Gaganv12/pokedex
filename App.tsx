import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';

function App(){
  
  return (
    <SafeAreaView style={{flex:1}}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
