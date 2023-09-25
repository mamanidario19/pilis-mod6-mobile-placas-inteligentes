import React, { useContext } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { styles } from './AddUserScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { authUser, createUser, getUsers } from '../../api/user.service'
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

    console.log(data);
    const response = await createUser(data)
    if (response.ok) {
      console.log(await response.json());
      navigation.navigate("Profile");
    }
    else { console.log(await response.json()) }
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