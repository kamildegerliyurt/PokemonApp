import { StyleSheet, Text, View, Image, Dimensions, Pressable, } from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import Icon from 'react-native-vector-icons/FontAwesome';





const SecondPage = ({navigation, route}) => {

  const data = {
    labels: ["HP", "ATTACK", "DEF","S.A","S.D","SPEED" ],
    datasets: [
      {
        data: [
          route.params.pokemon.stats.hp,
          route.params.pokemon.stats.attack,
          route.params.pokemon.stats.defense,
          route.params.pokemon.stats.specialAttack, 
          route.params.pokemon.stats.specialDefense, 
          route.params.pokemon.stats.speed
        ]
      }
    ]
  };


  return (
          <View style={styles.secondContainer}>
            <View>
              {/* <Pressable style={styles.backTickContainer} onPress={()=> navigation.navigate("")}>
                <Image
                style={{width:50, height:50, top:80, left:-150,}} 
                source={require("../assets/poketop.png")}/>
              </Pressable> */}
              
                
              
            </View>
            <View style={{backgroundColor:"transparent", width:"100%", alignItems:"center",}}>
            <Pressable style={styles.backTickContainer} onPress={()=> navigation.navigate("FirstPage")}>
                <Image
                style={
                  {width:50,
                  height:50,
                  top:110, 
                  left:-160,
                  backgroundColor:"transparent",
                  
                      }} 
                source={require("../assets/poketop.png")}/>
              </Pressable>
                <Image 
                style={styles.ImageContainer}
                source={route.params.pokemon.imageSource}
                />
            </View>
              <View style={styles.textsContainer}>
                <Text style= {styles.text1Container}>{route.params.pokemon.name} </Text>
                <Text style={{fontSize:15, fontWeight:"500", color:"black", bottom:15,}}>{route.params.pokemon.types} </Text>
                <Text><Icon name="heart" size={20} color="red" />  HP: {route.params.pokemon.stats.hp}</Text>
                <Text><Icon name="crosshairs" size={20} color="black" /> ATTACK: {route.params.pokemon.stats.attack}</Text>
                <Text><Icon name="shield" size={20} color="gray" /> DEFENSE: {route.params.pokemon.stats.defense}</Text>
                <Text><Icon name="fire" size={20} color="#F94C10" /> SPECIAL ATTACK: {route.params.pokemon.stats.specialAttack}</Text>
                <Text><Icon name="leaf" size={20} color="green" /> SPECIAL DEFENSE: {route.params.pokemon.stats.specialDefense}</Text>
                <Text><Icon name="angle-double-right" size={20} color="purple" /> SPEED: {route.params.pokemon.stats.speed}</Text>
                  
            </View>


          <View style={{backgroundColor:"transparent", marginBottom:60, height: 300,}}>
            <BarChart style={{top:60, right:10,}}
            data={data} 
            width={Dimensions.get("window").width}
            height={250}
            chartConfig = {{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#08130D",
              backgroundGradientToOpacity: 0,
              color: opacity => `rgb(13, 18, 130)`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.6,
              useShadowColorFromDataset: false // optional
            }}
            />    
           </View>     
              
                



        </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({
  secondContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FFC436",  
    
  },
  ImageContainer: {
    width: 200,
    height: 200,
    margin: 20,
    backgroundColor: "transparent",
    resizeMode: "contain",
    top:25,
    borderWidth:4,
    borderColor: '#337CCF',
    borderRadius:100,
    resizeMode:"center",
    
   
   


  },
  text1Container: {
    fontSize:30,
    fontWeight:"bold",
    color:"black",
    bottom:50,
  
  },
  textsContainer: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"transparent",
    width:300,
    height:270,
    top:15,
    
  },
   backTickContainer: {
    elevation: 10, // Gölge düzeyi
    shadowColor: "black", // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge konumu (isteğe bağlı)
    shadowOpacity: 0.2, // Gölge opaklığı
    shadowRadius: 4, // Gölge yarıçapı
   }
 
 
 
})


 