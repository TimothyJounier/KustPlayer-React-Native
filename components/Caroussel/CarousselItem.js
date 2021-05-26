import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default CarousselItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.images}
                source={item.image}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    images: {
        width:370,
        height:300,
    }
})
