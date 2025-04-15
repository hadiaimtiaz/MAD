import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Image } from 'react-native';
import { Image } from './Components/image';
import { Text } from './Components/Textinput';
export default function App() {
  <>
  return (
    <View style={styles.container}>
      <Image  source={require('./assets/paperimage.jpg')} style={{width: 100, height: 100}}/>
      <Text>hadia imtiaz</Text>
      <Text>age 18</Text>
      <StatusBar style="auto" />
    </View>
  );
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//image.js
import {Image} from "react-native";
export default function Image() {
    return(
        <Image  source={require('./assets/paperimage.jpg')} style={{width: 100, height: 100}}/>
    )
}
//Textinput.js
import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';

export default function CustomText(props) {
    const [text, setText] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const handleTextChange = (input) => {
        setText(input);
        const age = parseInt(input, 10);
        if (!isNaN(age) && age > 18) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>hadia imtiaz{props.name}</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter age"
                onChangeText={handleTextChange}
                value={text}
                keyboardType="numeric"
            />
            {isVerified ? (
                <Text style={styles.verifiedText}>verified</Text>
            ) : (
                <Text style={styles.notVerifiedText}>not verified</Text>
            )}
            {isVerified && (
                <Button title="Show" onPress={() => alert('Button Pressed')} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    verifiedText: {
        fontSize: 18,
        color: 'green',
    },
    notVerifiedText: {
        fontSize: 18,
        color: 'red',
    },
});