import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from './AddObjectScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { authUser, getUsers } from '../../api/user.service'
import { UserContext, useAuth2 } from '../../Contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
import { createObject } from '../../api/object'

export const AddObjectScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: '',
      foto: '',
      observaciones: '',
    },
  })
  const auth = useAuth2()

  const handleAddObject = async (obj) => {
    const objectCard = {
      ...obj,
      idPropietario: auth.idPerfil,
    }
    // console.log(objectCard)
    //Call the API service to add the pet card (Replace with your API service)
    await createObject(objectCard)
      .then((data) => data.json())
      .then((json) => {
        console.log('Objeto agregada correctamente!')
        console.log(json)
        // Navigate to the appropriate screen
        navigation.navigate('Object')
      })
      .catch((err) => {
        // Handle error (e.g., show an error message)
        console.warn('Error al agregar objeto!:', err)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Objetos</Text>
      {/*Nombre */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nombre del Objeto"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="nombre"
        rules={{ required: 'Ingrese nombre del objeto' }}
      />
      {errors.nombre && (
        <Text style={styles.errorText}>{errors.nombre.message}</Text>
      )}

      {/*Observaciones */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Observaciones"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="observaciones"
        rules={{ required: 'Ingrese observaciones' }}
      />
      {errors.observaciones && (
        <Text style={styles.errorText}>{errors.observaciones.message}</Text>
      )}

      {/*foto */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Link de foto"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="foto"
        rules={{ required: 'Ingrese foto' }}
      />
      {errors.foto && (
        <Text style={styles.errorText}>{errors.foto.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleAddObject)}
      >
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
      <Image
        source={require('./../../../assets/images/corner.png')}
        style={styles.image}
      ></Image>
    </View>
  )
}
