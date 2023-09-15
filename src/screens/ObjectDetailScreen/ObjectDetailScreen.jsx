import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./ObjectDetailScreen.styles";
import { UserContext } from "../../Contexts/UserContext";
import QRCode from "react-native-qrcode-svg"; // Importa la biblioteca

export const ObjectDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{ uri: `https://drive.google.com/uc?id=${image}` }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.card}>
        <View style={styles.column}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text style={styles.title}>{item.sexo}</Text>
          <Text style={styles.title}>{item.edad}</Text>
        </View>
        <View>
          <Text style={styles.title_qr}>QR</Text>
          {/* Utiliza react-native-qrcode-svg para mostrar el código QR */}
          {/* Cambiar por get ID*/}
          <QRCode
            value={JSON.stringify({
              name: item.nombre,
              gender: item.sexo,
              age: item.edad,
              id: item.id,
            })}
            size={250} // Ajusta el tamaño según tus preferencias
          />
        </View>
      </View>

      <View>        
        <Text style={styles.title}>Descripción</Text>
        <Text>{item.observaciones}</Text>
        <Text style={styles.title}>Contacto: {item.contacto}</Text>
        <Text style={styles.title}>Dueño: {item.propietario}</Text>
      </View>
    </ScrollView>
  );
};