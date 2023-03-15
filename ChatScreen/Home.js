import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";



const Home = () => {

const navigation = useNavigation();


useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <FontAwesome name="search" size={24} color={'grey'} style={{marginLeft: 15}}/>
        ),
        headerRight: () => (
            <Image
                source={{ uri: "https://images.pexels.com/photos/2304123/pexels-photo-2304123.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                style={{
                    width: 40,
                    height: 40,
                    marginRight: 15,
                    borderRadius:24,
                }}
            />
        ),
    });
}, [navigation]);

return (
    <View style={styles.container} >
            
            <Text style={styles.titleText}>Welcome To ChatOn</Text>
            <Image
                source={{ uri: "https://freepngimg.com/thumb/chat/1-2-chat-png-image.png" }}
                style={{
                    width: 300,
                    height: 300,
                    alignSelf:'center',
                    borderRadius:10,
                    
                }}
            />
        
        
        
    <View style={styles.container}>

        <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            style={styles.chatButton}
        >
            <Entypo name="chat" size={24} color={'grey'} />
        </TouchableOpacity>
    </View>
    </View>
);


};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "#31548c",
    },
    title:{
    
        flexDirection:'row-reverse',
        
    },
    titleText:{
        fontSize:35,
        color:'white',
        alignSelf:'center',
        fontWeight:'800',
    },
    chatButton: {
        backgroundColor: '#f5f5f5',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    }
});


export default Home;