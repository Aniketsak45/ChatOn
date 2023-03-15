import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./config/firebase";
import { useNavigation } from "@react-navigation/native";



 const Login = () => {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const onHandleLogin = () => {

  if (email !== "" && password !== "") {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login success"))
      .catch((err) => Alert.alert("Login error", err.message));
  }



};

    const navigation = useNavigation();
    return(

        <View style={styles.container}>
            
            < Image style={styles.backImage} source={{uri: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
            <View style={styles.whiteSheet}/>
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>ChatOn</Text>
                <Image
                source={{ uri: "https://freepngimg.com/thumb/chat/1-2-chat-png-image.png" }}
                style={{
                    width: 100,
                    height: 100,
                    alignSelf:'center',
                    borderRadius:10,
                  
                    
                }}
            />
        <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
      
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
      
      </TouchableOpacity>
      
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      </SafeAreaView>
      
    </View>
    )



 }


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: "white",
      alignSelf: "center",
      paddingTop:50,
    },
    input: {
      backgroundColor: "#F6F7FB",
      height: 58,
      marginTop:10,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
    },
    backImage: {
      width: "100%",
      height: 340,
      position: "absolute",
      top: 0,
      resizeMode: 'cover',
    },
    whiteSheet: {
      width: '100%',
      height: '75%',
      position: "absolute",
      bottom: 0,
      backgroundColor: '#fff',
      borderTopLeftRadius: 60,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 30,
    },
    button: {
      backgroundColor: '#f57c00',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
    },
  });


 export default Login;