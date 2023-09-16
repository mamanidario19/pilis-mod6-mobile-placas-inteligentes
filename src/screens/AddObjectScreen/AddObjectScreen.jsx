import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './AddObjectScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { authUser, getUsers } from '../../api/user.service'
import { UserContext } from '../../Contexts/UserContext'
import { useNavigation } from '@react-navigation/native'

export const AddObjectScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      descripcion: '',
      caracteristicas: '',
    }
  })

  const handleAddObject = ({ descripcion, caracteristicas }) => {
    const objectCard = {
      descripcion,
      caracteristicas,

    }
    // Call the API service to add the pet card (Replace with your API service)
    addObjectCard(objectCard)
      .then(() => {
        // Handle success (e.g., show a success message)
        console.log('Objeto agregada correctamente!')
        // Navigate to the appropriate screen
        navigation.navigate('Object')
      })
      .catch(err => {
        // Handle error (e.g., show an error message)
        console.warn('Error al agregar objeto!:', err)
      })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Objetos</Text>

      {/*Descripcion */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Descripción general'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='descripcion'
        rules={{ required: 'Ingrese descripción adicional' }}
      />
      {errors.descripcion && <Text style={styles.errorText}>{errors.descripcion.message}</Text>}

      {/*Caracteristicas */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Caracteristicas adicionales'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='caracteristicas'
        rules={{ required: 'Ingrese caracteristicas adicionales' }}
      />
      {errors.caracteristicas && <Text style={styles.errorText}>{errors.caracteristicas.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleAddObject)}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}