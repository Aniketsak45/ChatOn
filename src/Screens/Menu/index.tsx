import React from "react";
import { View, Text, StyleSheet } from "react-native";



const MenuScreen =  () => {

return(

        <View>
            <Text style={Styles.text}>This is Menu Screen</Text>
        </View>
);

};


const Styles = StyleSheet.create({

text:{
    fontSize:18,
    fontWeight:'bold',

},


})




export default MenuScreen;