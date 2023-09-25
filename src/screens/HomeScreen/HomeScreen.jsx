import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./HomeScreen.styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SurePaws</Text>
      <Text style={styles.text}>Patitas seguras</Text>
      <Image source={require('./../../../assets/images/home.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Principal')}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  )
}