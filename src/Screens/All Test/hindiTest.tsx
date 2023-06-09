import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image  } from "react-native";




const HindiTest =  () => {


const hindiTest = () => {

   console.warn('Hindi Test Started');

}

return(
        <View style={Styles.row}>
        <View style={Styles.title}>
            <Text style={Styles.titletext}>Join UPSC Hindi Test</Text>

        </View>

       < Image style={Styles.image} source={{uri: "https://images.pexels.com/photos/5427873/pexels-photo-5427873.jpeg?auto=compress&cs=tinysrgb&w=600" }} />
       <Text onPress={hindiTest} style={Styles.testText}> Start Test</Text>
       
        </View>

        

);

};


const Styles = StyleSheet.create({


row:{
    alignItems:'center',
    backgroundColor:'white'

},
title:{

    alignItems:'center',
    backgroundColor:'black',
    marginHorizontal:10,
    marginTop:20,
},
titletext:{
    padding:4,
    fontSize:24,
    fontWeight:'800',
    color:'white'
    

},

image:{
    marginVertical:10,
    borderRadius:10,
    width:200,
    height:200,
},

testText:{
        fontSize:24,
        fontWeight:'400',
        color:"blue"
        

},
})




export default HindiTest;