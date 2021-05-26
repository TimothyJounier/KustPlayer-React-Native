import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import ButtonTel from '../components/Button/ButtonTel';
import ButtonEmail from '../components/Button/ButtonEmail';
import MapView, { Marker } from 'react-native-maps';


const ContactScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.text1}>MARDI AU SAMEDI</Text>
                <Text style={styles.text2}>9h30 - 13h / 14h - 18h</Text>
            </View>
            <View style={styles.image1}>
                <MapView style={styles.map}
                    minZoomLevel={12}  
                    initialRegion={{
                        latitude: 49.00110,
                        longitude: 2.22485,
                        latitudeDelta: 49.00110,
                        longitudeDelta: 2.22485,
                    }}
                >
                <Marker
                    pinColor={'red'}
                    coordinate={{
                        latitude: 49.00110,
                        longitude: 2.22485 ,
                    }}
                />
             
                {/* <Image
                    source={require('../assets/images/map.png')}
                    resizeMode="cover"
                    style={styles.image2}
                /> */}
                </MapView>
            </View>
            <View style={styles.btn}>
                <ButtonTel />
                <ButtonEmail />                
            </View>
        </SafeAreaView>
    );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0EBE1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        width: '80%',
        height: '5%',
        alignItems:'center',
        backgroundColor:'black',
    },
    text1: {
        color:'#FFFF',
        marginTop: 3,
        fontSize: 16
    },
    text2: {
        color:'#FFFF',
        fontSize: 16
    },
    image1: {
        width:'80%',
        height:'50%',
        backgroundColor:'red'
        
    },
    image2: {
        width:'100%',
        height:'100%'
    },
    map: {
        width:'100%',
        height:'100%'
    },
    

  });