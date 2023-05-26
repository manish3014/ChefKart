import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Dimensions } from 'react-native'

const {width,height}=Dimensions.get("window")

const data=[
  {id:1,name:"Italian"},
  {id:2,name:"Indian"},
  {id:3,name:"Indian"},
  {id:4,name:"Indian"},
  {id:5,name:"Indian"},
  {id:6,name:"Indian"},
  {id:7,name:"Indian"},
  {id:8,name:"Indian"},
]

function RenderItem(item){

  const [selected,setSelected]=React.useState('')
  
  const handleSelect=(item)=>{
    setSelected(item)
  }
  
    return(
        <TouchableOpacity onPress={()=>handleSelect(item.item.item.id)} >
        <View style={{width:width*.22,height:height*.04,borderRadius:20,marginRight:15,borderColor:item.item.item.id === selected ? 'red' : "#414141",borderWidth:1,borderStyle:'solid',backgroundColor:'#FFF',justifyContent:'center'}} >
                <Text style={{color: item.item.item.id === selected ? 'red' : "#414141" ,fontSize:17,alignSelf:'center'}} >{item.item.item.name} </Text>
        </View>
        </TouchableOpacity>
    )
}

export default function HeaderList() {
  return (
    <View style={{marginTop:10,marginLeft:30}} >
      <FlatList 
      data={data}
      renderItem={item => <RenderItem item={item} />}
      keyExtractor={item=>item.id}
      horizontal
      />
    </View>
  )
}