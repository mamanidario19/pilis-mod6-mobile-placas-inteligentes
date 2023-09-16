import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./HomeScreen.styles";

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Make a new friends!!!</Text>
      <Text style={styles.text}>Adopt don't shop</Text>
      <Image source={require('./../../../assets/images/logo.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Principal')}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>
    </View>
  )
}