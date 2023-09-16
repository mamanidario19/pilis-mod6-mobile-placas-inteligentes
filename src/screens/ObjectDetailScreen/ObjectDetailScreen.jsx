import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./ObjectDetailScreen.styles";
import { UserContext } from "../../Contexts/UserContext";
import QRCode from "react-native-qrcode-svg"; // Importa la biblioteca

export const ObjectDetailScreen = ({ route }) => {
  const { item } = route.params;
  //const { user } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/*<ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{ uri: `https://drive.google.com/uc?id=${image}` }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>*/}
      </View>
      <View>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.title}>{item.sexo}</Text>
        <Text style={styles.title}>{item.vacunas}</Text>
        <View>
          {/* Utiliza react-native-qrcode-svg para mostrar el código QR */}
          {/* Cambiar por get ID*/}
          <QRCode
            value={JSON.stringify({
              name: item.nombre,
              gender: item.sexo,
              vacunas: item.vacunas,
              id: item.id,
            })}
            size={250} // Ajusta el tamaño según tus preferencias
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Descripción</Text>
        <Text style={styles.title}>{item.observaciones}</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ipsam nam veritatis sint iste eum molestiae velit itaque fugiat enim. Eius nihil ex corrupti
          doloremque totam perferendis et quaerat laboriosam itaque.</Text>
      </View>

      <View>
        <Text>{item.observaciones}</Text>
        <Text>Contacto</Text>
        <Text>dueño</Text>
      </View>
    </ScrollView>
  );
};