/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import HomeScreen from './src/Screens/Home';
import ProfileScreen from './src/Screens/Profile';
import MenuScreen from './src/Screens/Menu';
import ShoppingCart from './src/Screens/ShoppingCart';
import EnglishTest from './src/Screens/All Test/englishTest';
import HindiTest from './src/Screens/All Test/hindiTest';
import MathTest from './src/Screens/All Test/mathTest';
import Chat from './ChatScreen/Chat';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
      
      <Chat />
     
     
  
  );
}



export default App;
