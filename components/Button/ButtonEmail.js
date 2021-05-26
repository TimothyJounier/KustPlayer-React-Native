import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ButtonEmail = () => (
    <Button 
        style={styles.btn0}
        icon="email" 
        mode="contained" 
        onPress={() => alert('kustplayers@gmail.com')}>
      Email
    </Button>
  );
  
  export default ButtonEmail;

  const styles = StyleSheet.create ({

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
        marginTop: 40,
        marginBottom:60
    },
  })
  
 