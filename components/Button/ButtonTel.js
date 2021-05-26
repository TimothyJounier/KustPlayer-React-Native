import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ButtonTel = () => (
    <Button 
        style={styles.btn0}
        icon="phone" 
        mode="contained" 
        onPress={() => alert('07.68.51.37.77')}>
      Téléphone
    </Button>
  );
  const styles = StyleSheet.create ({
      
    btn: {
        marginBottom: 80
    },
    btn0: {
        backgroundColor:'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 40
    },
  })
  
  export default ButtonTel;