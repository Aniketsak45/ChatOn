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
  ActivityIndicator,
  
} from 'react-native';
import {useState, createContext, useContext, useEffect} from "react"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './ChatScreen/config/firebase';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

// Chat screen
import Chat from './ChatScreen/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './ChatScreen/Login';
import Signup from './ChatScreen/Signup';
import Home from './ChatScreen/Home';
import { async } from '@firebase/util';

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});


const AuthenticatedUserProvider = ({children}) => {

const [user, setUser] = useState(null);

return(
      <AuthenticatedUserContext.Provider value={{user, setUser}}>

        {children}

      </AuthenticatedUserContext.Provider>

);

};
// ChatStack Navigation

const ChatStack = () => {

return (

  <Stack.Navigator screenOptions={{headerShown:true}}>

    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Chat" component={Chat}/>
  </Stack.Navigator>
)

};


function AuthStack  () {

  return(
    <Stack.Navigator>

    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Signup" component={Signup}/>

  </Stack.Navigator>
  )
  };




const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );



// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
};





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <AuthenticatedUserProvider>

        <RootNavigator />

    </AuthenticatedUserProvider>      
      
     
     
  
  );
}



export default App;
