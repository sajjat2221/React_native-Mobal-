import React,{useState} from 'react';
import{TextInput,StyleSheet,Button,View,Modal} from 'react-native';


const Inputevent=(input)=>{

    const [currentdata,setnewdata]=useState();
    
    const buttonfun=()=>{
            input.title(currentdata);
    }
 return(

 <Modal visible={false}>
    <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={setnewdata} placeholder='Enter your Value' />
    <Button color='red' title='Enter' onPress={buttonfun}/>
    </View>
</Modal>
  


    );
}
const styles=StyleSheet.create({

    container:{
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    input:{
        padding:10,
        borderColor:'green',
        borderWidth:2,
        borderRadius:8,
        width:'70%'
    }


});
export default Inputevent;
