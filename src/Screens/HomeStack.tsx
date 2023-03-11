import React from "react";
import {Text, View, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Home";
import EnglishTest from "./All Test/englishTest";
import HindiTest from "./All Test/hindiTest";
import MathTest from "./All Test/mathTest";
import MenuScreen from "./Menu";

const Stack = createStackNavigator();

const HomeStack = () => {

return (


    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={EnglishTest} name="English" />
        <Stack.Screen component={HindiTest} name="Hindi" />
        <Stack.Screen component={MathTest} name="Math" />


    </Stack.Navigator>


);



};

export default HomeStack;