import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

// import components
import HomeScreen from '../screens/HomeScreen';
import SavoirFaireScreen from '../screens/SavoirFaireScreen';
import RealisationScreen from '../screens/RealisationScreen';
import ContactScreen from '../screens/ContactScreen';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height:70,
            borderRadius: 35,
            backgroundColor: 'red'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
            showLabel: false,
            style: {
                position:"absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: 'black',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
    >
            <Tab.Screen
                name="Accueil"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red' : '#F0EBE1',
                                }}
                            />
                            <Text
                                style={{color : focused ? 'red' : '#F0EBE1', fontSize:12, marginTop:5}}>HOME
                            </Text>
                        </View>
                    ),
                    
                }}/>

<Tab.Screen
                name="Savoir Faire"
                component={SavoirFaireScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/savoirFaireIcon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red' : '#F0EBE1',
                                }}
                            />
                            <Text
                                style={{color : focused ? 'red' : '#F0EBE1', fontSize:12, marginTop:5}}>SAVOIR FAIRE
                            </Text>
                        </View>
                    ),
                }}/>

            {/* <Tab.Screen 
                name="Post" 
                component={PostScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/icons/aaplus.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#F0EBE1'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            
            /> */}
                
            <Tab.Screen
                name="Realisation"
                component={RealisationScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/outilIcon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red' : '#F0EBE1',
                                }}
                            />
                            <Text
                                style={{color : focused ? 'red' : '#F0EBE1', fontSize:12, marginTop:5}}>REALISATION
                            </Text>
                        </View>
                    ),
                }}/>
            <Tab.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/contactIcon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red' : '#F0EBE1',
                                }}
                            />
                            <Text
                                style={{color : focused ? 'red' : '#F0EBE1', fontSize:12, marginTop:5}}>CONTACT
                            </Text>
                        </View>
                    ),
                }}/>
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create ({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;