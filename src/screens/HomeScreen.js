import { View, Text, StyleSheet,Dimensions, StatusBar,ActivityIndicator } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import DateTimeHeader from '../components/DateTimeHeader'
import HeaderList from '../components/HeaderList'
import StoryFlatList from '../components/StoryFlatList'
import MainFlatList from '../components/MainFlatList'
import { ScrollView } from 'react-native'

const {width,height}=Dimensions.get("window")

export default function HomeScreen() {

  return (
    <View style={styles.mainContainer} >
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Header title="Select Dishes" justifyContent="space-around" />
      <DateTimeHeader/>
      <View style={{marginTop:StatusBar.currentHeight}} >
      <HeaderList/>
      </View>
      <View style={{marginTop:10,marginBottom:10}} > 
        <StoryFlatList/>
      </View> 
      <ScrollView>
        <MainFlatList/> 
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#FFF'
    },
    subContainer:{

    }
})