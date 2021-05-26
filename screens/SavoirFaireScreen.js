import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SavoirFaireScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Image
                    source={require('../assets/images/realisation5.png')}
                    resizeMode='cover'
                    style={styles.image}
                />
            </View>
            <View style={styles.container2}>
            
                    <View style={styles.view1}>
                        <ScrollView>
                            <Text style={styles.text1}>QUI SOMMES-NOUS?{"\n"}</Text>
                            <Text style={styles.text2}>Seb et Jérôme, deux frères. Nous préparons, réparons, KUSTomisons, et d'entretenons votre HARLEY DAVIDSON au sein de la KUST FACTORY, avec
                            le GARISSON BARBERSHOP et BIGGY'S KUST WEAR SHOP qui nous accompagne.{"\n"}</Text>
                            <Text style={styles.text3}>Nous domaines de réalisons:{"\n"}

                            - entretient (normes H.D){"\n"}

                            - réparation (moteur,châssis..){"\n"}

                            - customisation{"\n"}

                            - peinture (RAL harley, aéro ){"\n"}

                            - stage 1, 2, 3 ect..{"\n"}

                            - fabrication sur mesure{"\n"}

                                - garde boue{"\n"}

                                - réservoir{"\n"}

                                - pièces alu, inox ect..{"\n"}

                                - électricité{"\n"}
                            </Text>
                            <Text style={styles.text4}>Pour les pièces after-market nous avons les meilleurs fournisseurs pour un large choix de pièces Zodiac, Custom-Chrome, Motorcycle storehouse, Harley davidson US, MAG online, Parts Europe, Drag etc..)</Text>
                        </ScrollView>
                    </View>
            </View>
            <View style={styles.view2}>
                        <Image 
                        source={require('../assets/images/moi.png')}
                        resizeMode='cover'
                        style={{width:'100%', height:'100%', borderRadius:20}}
                        />
            </View>
            
        </SafeAreaView>
    );
};

export default SavoirFaireScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0EBE1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width:'90%',
        height:'90%',
        borderRadius:30,
    },
    view1: {
        width:'90%',
        height:'90%',
        alignItems:'center',
        marginTop:10,
        marginLeft:20,
        borderWidth:3,
        borderColor:'black',
        backgroundColor:'#efe6e6'
    },
    view2: {
        width:'90%',
        height:'22%',
        marginBottom:100,
        marginTop:20
    },
    container1: {
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',

    },
    container2: {
        width:'100%',
        height:'30%',
    },
    // container3: {
    //     width:'100%',
    //     height:'25%',
    // },
    text1: {
        fontSize:30,
        marginLeft:35
    },
    text2: {
        fontSize: 17
    },
    text3:{
        fontSize: 17,
        marginLeft:60
    },
    text4: {
        fontSize:17,
    }
  });