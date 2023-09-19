import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./ObjectDetailScreen.styles";
import { UserContext, useAuth2 } from "../../Contexts/UserContext";
import QRCode from "react-native-qrcode-svg"; // Importa la biblioteca

export const ObjectDetailScreen = ({ route }) => {
  const { item } = route.params;
  //const { user } = useContext(UserContext);
  const auth = useAuth2();
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
        <Image source={require('./../../../assets/images/example-pet.jpg')} style={styles.image}></Image>
      </View>
      <View style={styles.card}>
        <View style={styles.column}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text style={styles.title}>{item.sexo}</Text>
          <Text style={styles.title}>Vacunas:{item.vacunas}</Text>
        </View>
        <View>
          {/*<Text style={styles.title_qr}>QR</Text>*/}
          {/* Utiliza react-native-qrcode-svg para mostrar el código QR */}
          {/* Cambiar por get ID*/}
          <QRCode
            value={JSON.stringify({
              name: item.nombre,
              gender: item.sexo,
              vacunas: item.vacunas,
              contacto: item.mail,
              id: item.id,
            })}
            size={125} // Ajusta el tamaño según tus preferencias
          />
        </View>
      </View>

      <View style={styles.infoContainer}>

        <Text style={styles.title}>Descripción</Text>
        <Text style={styles.title}>{item.observaciones}</Text>
        <Text style={styles.description}>Hola! soy un pequeño perro amante de los huesos. Por favor si me ves solo contactate con
          mi humano!</Text>
        <View style={styles.separator}></View>
        <Text style={styles.title}>Gmail Responsable:</Text>
        <Text style={styles.title}>{auth.mail} </Text>


      </View>

    </ScrollView >
  );
};