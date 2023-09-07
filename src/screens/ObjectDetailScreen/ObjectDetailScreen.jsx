import React from "react";
import { View, Text, ScrollView } from "react-native"
import { styles } from "./ObjectDetailScreen.styles"

export const ObjectDetailScreen = ({ route }) => {

  const { item } = route.params

  /*Agregar carrousel de fotos 1er view*/
  return (
    <ScrollView style={styles.container}>

      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>RAZA</Text>
        <Text style={styles.title}>EDAD</Text>
        <View>
          <Text style={styles.title}>QR</Text>
          <Text style={styles.title}>QR detail</Text>
        </View>

      </View>

      <View>
        <Text>Descripcion</Text>
        <Text>dueño</Text>
        <Text>Contacto</Text>
      </View>

    </ScrollView>

  )

}