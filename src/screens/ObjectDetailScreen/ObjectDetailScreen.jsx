import React, { useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native"
import { styles } from "./ObjectDetailScreen.styles"
import { UserContext } from "../../Contexts/UserContext";

export const ObjectDetailScreen = ({ route }) => {

  const { item } = route.params

  /* Requerimos sesion para ver futuro botones. */
  //const { currentUser } = useContext(UserContext)

  /*Agregar carrousel de fotos 1er view*/
  return (
    <ScrollView style={styles.container}>

      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{ uri: `https://drive.google.com/uc?id=${image}` }}
              style={styles.image}
              resizeMode='cover'
            />
          ))}
        </ScrollView>
      </View>

      <View>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.title}>{item.sexo}</Text>
        <Text style={styles.title}>{item.edad}</Text>
        <View>
          <Text style={styles.title}>QR</Text>
        </View>
      </View>

      <View>
        <Text>{item.observaciones}</Text>
        <Text>Contacto</Text>
        <Text>dueño</Text>
      </View>

    </ScrollView>

  )

}