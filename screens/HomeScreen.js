import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from '../navigation/Tabs';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={require('../assets/images/SV.png')}
                    resizeMode="cover"
                    style={{width: '100%', height:'90%', borderWidth:5, borderColor:'black'}}
                />
            </View>  
            <View style={styles.container}>
                <Text>WELCOME TO</Text>
                <Text style={styles.title}> KUST PLAYER </Text>
                <Text style={styles.press}>La Press parle de nous!</Text>
                <Image
                    source={require('../assets/images/Press.png')}
                    resizeMode="cover"
                    style={{width: '60%', height:'50%',borderWidth:2, borderColor:'black'}}
                />
            </View> 
        </View>
        </SafeAreaView>
        
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0EBE1',
      alignItems: 'center',
      width: '100%',
    },
    image: {
        width:'100%',
        height:'40%',
    },
    title: {
        fontSize: 30,
        marginBottom:30,
        // borderWidth:2,
        // borderColor:'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.50,
        elevation: 5
    },
    press: {
        fontSize: 20,
        marginBottom:10,
        
        
    },
  });