import React, { useContext } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { styles } from './AddUserScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { authUser, getUsers } from '../../api/user.service'
import { UserContext } from '../../Contexts/UserContext'
import { useNavigation } from '@react-navigation/native'

export const AddUserScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      mail: '',
      password: ''
    }
  })

  const handleLogin = async (data) => {
    //console.log(data);
    try {
      const response = await authUser(data)
      if (response.ok) {
        const json = await response.json()
        if (json.token && json.refreshToken) {
          setCurrentUser(
            { mail: json.mail },
            { id: json.idUsuario }
          );
        }
        console.log("sesion iniciada");
        {/*Volver al inicio */ }
      }
    } catch (error) {
      console.log(error)
    }
    /*
    getUsers()
      .then(users => {
        const user = users[0]
        if (mail === user.mail && password === user.password) {
          setCurrentUser({ mail, password })
          navigation.navigate('Home')
        }
      })
      .catch(err => console.warn(err))
      */
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='correo electronico'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='mail'
        rules={{ required: 'El email de usuario es requerido' }}
      />
      {errors.mail && <Text style={styles.errorText}>{errors.mail.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <View style={styles.imageContainer}>
        <Image source={require('./../../../assets/images/button.png')} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

      </View>


    </View>
  )
}