import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import * as Speech from 'expo-speech';

export default function App(){
  const [text, setText] = useState('Olá, você acaba de escrever um codigo usando Expo, com API Speech')

  function speak(){
    Speech.speak(text, {
      language: 'pt-BR'
    });
  }
  return(
    <View style={styles.container}>
      <Button
        title="Escutar"
        onPress={speak}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    justifyContent:'center',
  }
})