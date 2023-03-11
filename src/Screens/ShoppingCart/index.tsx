import React from "react";
import { View, Text, StyleSheet } from "react-native";



const ShoppingCart =  () => {

return(

        <View>
            <Text style={Styles.text}>This is Shopping Cart Screen</Text>
        </View>
);

};


const Styles = StyleSheet.create({

text:{
    fontSize:18,
    fontWeight:'bold',

},


})




export default ShoppingCart;