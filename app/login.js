import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet,Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Login(){

const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");

const loginUser = async () => {

const savedPhone = await AsyncStorage.getItem("phone");
const savedPassword = await AsyncStorage.getItem("password");

if(phone === savedPhone && password === savedPassword){

router.replace("/home");

}
else{

Alert.alert("Invalid Login");

}

};

return(

<View style={styles.container}>

<Text style={styles.title}>Login</Text>

<TextInput
placeholder="Phone Number"
style={styles.input}
onChangeText={setPhone}
/>

<TextInput
placeholder="Password"
secureTextEntry
style={styles.input}
onChangeText={setPassword}
/>

<Button title="Login" onPress={loginUser}/>

<Text
style={styles.link}
onPress={()=>router.push("/register")}
>
Create Account
</Text>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20
},

title:{
fontSize:26,
textAlign:"center",
marginBottom:20
},

input:{
borderWidth:1,
padding:10,
marginBottom:15
},

link:{
marginTop:20,
color:"blue",
textAlign:"center"
}

});