import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { Pressable } from 'react-native'







const FirstPage = ({navigation}) => {


const [data, setData]= useState([])

const DATA= [
    {
      "id": 1,
      "name": "Pikachu",
      "imageSource": require('../assets/pikacu.png'),
      "types": ["Grass", "Poison"],
      "stats": {
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 45
      }
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "imageSource": require('../assets/Ivysaur.png'),
        "types": ["Grass", "Poison"],
        "stats": {
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "specialAttack": 80,
          "specialDefense": 80,
          "speed": 60
        }
      },
      {
        "id": 3,
        "name": "Charizard",
        "imageSource": require('../assets/charizard.png'),
        "types": ["Fire", "Poison"],
        "stats": {
          "hp": 65,
          "attack": 61,
          "defense": 62,
          "specialAttack": 83,
          "specialDefense": 82,
          "speed": 61
        }
      },
      {
        "id": 4,
        "name": "Jigglypuff",
        "imageSource": require('../assets/Jigglepuff1.png'),
        "types": ["Grass", "Poison"],
        "stats": {
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "specialAttack": 80,
          "specialDefense": 80,
          "speed": 60
        }
      },
      {
        "id": 5,
        "name": "Squirtle",
        "imageSource": require('../assets/Squirtle.png'),
        "types": ["Water"],
        "stats": {
          "hp": 44,
          "attack": 48,
          "defense": 65,
          "specialAttack": 50,
          "specialDefense": 64,
          "speed": 43
        }
      },
      {
        "id": 6,
        "name": "Weedle",
        "imageSource": require('../assets/Weedle.png'),
        "types": ["Fire"],
        "stats": {
          "hp": 39,
          "attack": 52,
          "defense": 43,
          "specialAttack": 60,
          "specialDefense": 50,
          "speed": 65
        }
      },
      {
        "id": 7,
        "name": "Caterpie",
        "imageSource": require('../assets/Caterpie.png'),
        "types": ["Fire"],
        "stats": {
          "hp": 58,
          "attack": 64,
          "defense": 58,
          "specialAttack": 80,
          "specialDefense": 65,
          "speed": 80
        }
      },
      {
        "id": 8,
        "name": "Pidgeotto",
        "imageSource": require('../assets/Pidgeotto.png'),
        "types": ["Normal", "Flying"],
        "stats": {
          "hp": 63,
          "attack": 60,
          "defense": 55,
          "specialAttack": 50,
          "specialDefense": 50,
          "speed": 71
        }
      },
    ]





const renderItem = ({ item }) => (
  
   <View style={styles.pokemonContainer}>
    <Pressable onPress={()=> navigation.navigate("SecondPage", {pokemon: item})}>
    <Image 
     style={{ 
        width:125,
        height:125,
        margin:10,
        backgroundColor:"transparent",
        resizeMode:"contain",     //----> ÇERÇEVİNİN içinde RESMİ ORTALAR!!!!   
         }}
     source={item.imageSource}  />
   
   </Pressable>
       
    </View>
   
  );



    return (
  <View style={styles.firstContainer}>
    <View>
      <Image  style={{
      width:200,
      height:60,
      
      backgroundColor:"transparent",
      borderRadius:30,
      resizeMode:"contain",
        }} source={require("../assets/pokemonwrite.png")}/>
      
      </View> 
      
    <FlatList 
          vertical
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          numColumns={2}
          data={DATA}
          keyExtractor={(item)=> item.id}
          renderItem={renderItem}
          />
    </View>
    )
  }

export default FirstPage

const styles = StyleSheet.create({
    firstContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFC436",  
        padding:10,
       
    },
    pokemonContainer: {
      backgroundColor:"transparent",
      margin:7,
      marginTop:20,
      borderWidth:4,
      borderColor: '#337CCF',
      borderRadius:100,
    },
       
  
   
})