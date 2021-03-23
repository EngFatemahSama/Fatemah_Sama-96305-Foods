import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';

import {Rating } from '@react-navigation-ratings'
import {useRoute } from '@react-navigation/native'

export default function Detail() {
   
    const {name, image, price, detail } = useRoute().params
  

    return(
        <ScrollView style= {styles.container}>
        <Image
          style={{hight: 190}}
       source = {{uri:image}}
       />
        
      <View>
          <Text style={style.title}>{name}</Text>
          <Text style={style.title}>Price:{price}</Text>
           <Rating showRating imageSize ={34}/>
          </View> 
          <View style={{margin: 8}}>
          <Text style={style.title}>Introduction</Text>
          <Text>{detail}</Text>
              </View> 
            <Button
              title="Added to favorite"
              color="#777777"
            />  

    </ScrollView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    title: {
        textAlign: "center",
        fontWeight: "blod",
        fontSize: 18,
        marginTop: 9
    }
});