import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'

const {width,height}=Dimensions.get("window")

export default function DateTimeHeader() {
  return (
    <View style={styles.main} >
        <View style={styles.subContainer} > 
            <View style={styles.dateTime} >
                <View style={styles.date} >
                <Image source={require('../assets/images/calendar.png')} style={{width:20,height:20,marginRight:8}} />
                <Text style={styles.text} >21 May 2021</Text>
                </View>
                <Divider orientation="vertical" insetType='middle' />
                <View style={styles.time} >
                <Image source={require('../assets/images/alarm.png')} style={{width:20,height:20,marginRight:8}} />
                <Text style={styles.text} >10:30 Pm-12:30Pm</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:0,
    },
    subContainer:{
        width:width,
        height:height*.08,
        backgroundColor:'#414141'
    },
    dateTime:{
        width:width*.83,
        padding:10,
        height:height*.08,
        backgroundColor:'#FFF',
        position:'absolute',
        justifyContent:'space-around',
        flexDirection:'row',
        top:35,
        borderRadius:10,
        alignSelf:'center',
        shadowColor:'#000',
        elevation:10,
        alignItems:'center'
    },
    text:{
        color:'#414141',
        fontSize:15,
        alignSelf:'center',
        fontWeight:600
    },
    date:{
        flexDirection:'row',
        alignSelf:'center'
    },
    time:{
        flexDirection:'row',
        alignSelf:'center'
    }
})