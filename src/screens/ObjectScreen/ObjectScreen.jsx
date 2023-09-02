import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "./ObjectScreen.styles"

export const ObjectScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <Text styles={styles.title}>"Object Screen"</Text>
    </SafeAreaView>
  )
}