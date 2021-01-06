import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';


const Showfun=(show)=>{
    return(

        <TouchableOpacity onPress={show.onDelete.bind(this,show.id)}>
            <View style={styles.container}>
                <Text>
                    {show.Showtitle}
                </Text>
            </View>
        </TouchableOpacity>

        
    );
}
const styles=StyleSheet.create({

    container:{
        margin:10,
        borderWidth:2,
        borderColor:'red',
        borderRadius:8,
        padding:10,

    }

});

export default Showfun;
