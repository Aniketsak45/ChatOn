import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import BottomTabNav from "./bottomTabNav";



const Root = createStackNavigator();

const Router =  () => {

return(

        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen component={BottomTabNav} name="Bottom-Tab" />
            </Root.Navigator>

        </NavigationContainer>
);

};



export default Router;