import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { useAuth2 } from '../../Contexts/UserContext'
import { FormProfile } from '../../components/Profile/FormProfile'

export const UserInfoScreen = () => {
  const auth = useAuth2()
  const [isUpdate, setIsUpdate] = useState(false)
  const [perfilUpdate, setPerfilUpdate] = useState(null)
  const defaultValues = {
    apellido: '',
    nombre: '',
    telefono: '',
    facebook: '',
    instagram: '',
    direccion: '',
    idLocalidad: '',
    idUsuario: '',
  }

  const handleLogout = () => {
    auth.logOut()
  }
  const handleModPerfil = () => {
    if (auth.idPerfil) {
      setPerfilUpdate({
        apellido: auth.perfil.apellido,
        nombre: auth.perfil.nombre,
        telefono: auth.perfil.telefono,
        facebook: auth.perfil.facebook,
        instagram: auth.perfil.instagram,
        direccion: auth.perfil.direccion,
        idLocalidad: '',
        idUsuario: '',
      })
    } else {
      setPerfilUpdate(defaultValues)
    }
    setIsUpdate(true)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/owner.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Nickname</Text>
          <Text style={styles.profileLocation}>{auth.mail}</Text>
          <Text style={styles.profileLocation}>Argentina</Text>
        </View>
        <View style={styles.profileInfo}>
          <TouchableOpacity
            style={styles.buttonModProfile}
            onPress={handleModPerfil}
          >
            <Text style={styles.buttonText}>
              {auth.idPerfil ? 'Actualizar' : 'Crear Perfil'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogOut} onPress={handleLogout}>
            <Text style={styles.buttonTextLogOut}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        {isUpdate && <FormProfile perfil={perfilUpdate} />}
      </View>
    </ScrollView>
  )
}
