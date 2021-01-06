
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Inputevent from './components/inputgoal';
import ShowEvent from './components/showgoal';
export default function App() {

  const [currentarray,setnewarray]=useState([]);

  const arrayfun=(data)=>{
    
    setnewarray([...currentarray,{id:Math.random().toString(),value:data}]);

  }

  const removefun=(items)=>{
    setnewarray(currentarray=>{
      return currentarray.filter((item)=> items!==item.id);
    });
  }

  return (
    <View>
     <Inputevent title={arrayfun}/>

      <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={currentarray} renderItem={items=><ShowEvent id={items.item.id} onDelete={removefun} Showtitle={items.item.value}/>}/>

    </View>
  );
}

