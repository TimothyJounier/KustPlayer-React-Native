import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import slide from '../Caroussel/slide'
import CarousselItem from '../Caroussel/CarousselItem';

const Caroussel = () => {
    return (

            <FlatList 
                style={styles.flat}
                data={slide}
                renderItem={({ item }) => <CarousselItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator
                bounces={false}
                keyExtractor={(item) => item.id}
            />

    )
}

const styles = StyleSheet.create ({
    
})

export default Caroussel;