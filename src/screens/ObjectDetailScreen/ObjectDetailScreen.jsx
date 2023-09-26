import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native'
import { styles } from './ObjectDetailScreen.styles'
import { useAuth2 } from '../../Contexts/UserContext'
import QRCode from 'react-native-qrcode-svg' // Importa la biblioteca
import { FontAwesome5 } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'

//Librerias utilizadas para compartir la imagen del QR
import * as FileSystem from 'expo-file-system'
import { shareAsync } from 'expo-sharing'

export const ObjectDetailScreen = ({ route }) => {
  const { item } = route.params
  const auth = useAuth2()
  const [petQRref, setPetQRref] = useState()

  const downloadFromUrl = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return
    }
    if (petQRref) {
      const path = FileSystem.cacheDirectory + 'qr.jpeg'
      petQRref.toDataURL(async (data) => {
        const result = await FileSystem.writeAsStringAsync(path, data, {
          encoding: FileSystem.EncodingType.Base64,
        })
          .then(() => FileSystem.getInfoAsync(path))
          .catch((err) => console.log(err))
        save(result.uri)
      })
    }
  }
  const save = (uri) => {
    shareAsync(uri)
  }

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

    const hasPermission = await PermissionsAndroid.check(permission)
    if (hasPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./../../../assets/images/example-pet.jpg')}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.card}>
        <View>
          <QRCode
            value={JSON.stringify({
              name: item.nombre,
              gender: item.sexo,
              vacunas: item.vacunas,
              contacto: item.mail,
              id: item.id,
            })}
            getRef={(c) => setPetQRref(c)}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.titleName}>Nombre: {item.nombre}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnShare} onPress={downloadFromUrl}>
              <FontAwesome5 name="share-alt" size={30} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnShare}>
              <FontAwesome5 name="download" size={30} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Sexo: {item.sexo}</Text>
        <Text style={styles.title}>Vacunas:{item.vacunas}</Text>
        <Text style={styles.title}>Descripción: {item.observaciones}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.title}>Datos del Responsable:</Text>
        <Text style={styles.title}>{auth.mail} </Text>
        <Text style={styles.title}>{auth.perfil.telefono} </Text>
        <Text style={styles.title}>{auth.perfil.direccion} </Text>
      </View>
    </ScrollView>
  )
}
