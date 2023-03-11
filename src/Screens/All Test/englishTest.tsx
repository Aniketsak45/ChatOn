import React from "react";
import { View, Text, StyleSheet, Image  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";



const EnglishTest =  () => {
   
const englishTest = () => {

   console.warn('Hindi Test Started');

}

return(
    
        <SafeAreaView style={Styles.row}>
        <View style={Styles.title}>
            <Text style={Styles.titletext}>Join UPSC English Test</Text>

        </View>

       < Image style={Styles.image} source={{uri: "https://images.pexels.com/photos/6502822/pexels-photo-6502822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
       <Text onPress={englishTest} style={Styles.testText}> Start Test</Text>
       
        </SafeAreaView>

        

);

};


const Styles = StyleSheet.create({


row:{
    alignItems:'center',
    backgroundColor:'blue'

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




export default EnglishTest;