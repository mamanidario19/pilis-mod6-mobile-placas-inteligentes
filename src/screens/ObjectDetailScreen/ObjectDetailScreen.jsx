import React from "react";
import { View, Text, ScrollView } from "react-native"
import { styles } from "./ObjectDetailScreen.styles"

export const ObjectDetailScreen = ({ route }) => {
  console.warn(route.params)
  const { item } = route.params
  return (
    <ScrollView style={styles.container}>
      <Text>Object Detail Screen</Text>
    </ScrollView>

  )

}