import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import ProfileItems from "../componenets/ProfileItems"

export default function Profile() {
  
  return (
    <View style={styles.container}>
       <Image 
            style={{height:200}}
            source={{uri: require("../assets/profile.jpg")}}
       />
       <ProfileItems name="UserName" value="Fatemah Sama" />
       <ProfileItems name="Gamil"    value="samafatemah@gmail.com" />
       <ProfileItems name="Gender"    value="Famile" />
       <ProfileItems name="Mobile"     value="0799 78 78 90" />
       <ProfileItems name="Address"     value="Herat/Afghanistan" />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
     
    }, 

});
