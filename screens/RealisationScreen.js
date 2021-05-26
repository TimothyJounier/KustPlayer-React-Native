import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PhotoZoom from 'react-native-photo-zoom';

const RealisationScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>


                <View style={styles.container1}>
                    <View style={styles.view1}>
                    <Image
                            source={require('../assets/images/realisation1.png')}
                            style={{width:'100%', height:'100%', borderRadius:50}}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Text>STREET LEGACY{"\n"}
HARLEY DAVIDSON 1340</Text>
                    </View>

                </View>

        
                <View style={styles.container2}>
                    <View style={styles.view2}>
                        <Text>PURPLE RAIN{"\n"}    BAGGER</Text>
                    </View>
                    <View style={styles.view1}>
                        <Image
                            source={require('../assets/images/realisation2.png')}
                            style={{width:'100%', height:'100%', borderRadius:50}}
                        />
                    </View>

                </View>

                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <Image
                            source={require('../assets/images/realisation3.png')}
                            style={{width:'100%', height:'100%', borderRadius:50}}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Text>FRONT SPRINGER{"\n"} FORK BOBBER</Text>
                    </View>

                </View>

                <View style={styles.container2}>
                    <View style={styles.view2}>
                        <Text>SPORTSTER 883{"\n"}   upgrade 1200 {"\n"}         BUELL</Text>
                    </View>
                    <View style={styles.view1}>
                        <Image
                            source={require('../assets/images/realisation4.png')}
                            style={{width:'100%', height:'100%', borderRadius:50}}
                        />
                    </View>

                </View>

                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <Image
                            source={require('../assets/images/Realisation6.png')}
                            style={{width:'100%', height:'100%', borderRadius:50}}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Text>HARLEY CHOPPER SEHEIAH Shovelhead</Text>
                    </View>

                </View>
                
            <View style={{marginBottom: 100}}>
            
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RealisationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0EBE1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
        width:400,
        height:250,
        marginTop: 10,
        flexDirection:'row',
    },
    container2: {
        width:400,
        height:250,
        marginTop: 10,
        flexDirection:'row',
    },
    view1: {
        flex: 0.6,
        borderWidth:3,
        borderColor:'black',
        borderRadius:55,
        backgroundColor:'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 10
    },
    view2: {
        flex: 0.4,
        alignItems:'center',
        justifyContent:'center'
    },
  });