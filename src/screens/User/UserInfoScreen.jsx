import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext, useAuth2 } from '../../Contexts/UserContext'
import { authUser } from '../../api/user.service'
import { Form } from 'react-hook-form'
import { FormProfile } from '../../components/Profile/FormProfile'


export const UserInfoScreen = () => {
  const auth = useAuth2()
  const [isUpdate, setIsUpdate] = useState(false)

  const handleLogout = () => {
    auth.setIdUsuario(null)
  }
  const handleModPerfil = () => {
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
        <TouchableOpacity style={styles.buttonModProfile} onPress={handleModPerfil}>
          <Text style={styles.buttonText}>Actualizar Datos</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        {isUpdate && (<FormProfile />)}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Salir</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}