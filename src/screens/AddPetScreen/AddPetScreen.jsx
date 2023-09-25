import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from './AddPetScren.styles'
import { useForm, Controller } from 'react-hook-form'
import { authUser, getUsers } from '../../api/user.service'
import { UserContext, useAuth2 } from '../../Contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
import { createPet } from '../../api/pet.service'

export const AddPetScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const auth = useAuth2()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: '',
      sexo: '',
      vacunas: '',
      edad: '',
      observaciones: '',
      idResponsable: '',
      idRaza: '',
    },
  })

  const handleAddPet = async (pet) => {
    const petCard = {
      ...pet,
      idResponsable: auth.idPerfil,
      idRaza: 1,
    }
    console.log(petCard)
    // Call the API service to add the pet card (Replace with your API service)
    await createPet(petCard)
      .then(() => {
        // Handle success (e.g., show a success message)
        console.log('Mascota agregada correctamente!')
        // Navigate to the appropriate screen
        navigation.navigate('Object')
      })
      .catch((err) => {
        // Handle error (e.g., show an error message)
        console.warn('Error al agregar mascota!:', err)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Mascotas</Text>

      {/* Nobre de Mascota*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nombre de la mascota"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="nombre"
        rules={{ required: 'El nombre de la mascota es requerido' }}
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      {/* Edad de Mascota*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            style={styles.input}
            placeholder="Edad de la mascota"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="edad"
        rules={{ required: 'Edad la mascota es requerido' }}
      />
      {errors.edad && (
        <Text style={styles.errorText}>{errors.edad.message}</Text>
      )}

      {/* Genero de Mascota*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Sexo de la mascota"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="sexo"
        rules={{ required: 'El sexo de la mascota es requerido' }}
      />
      {errors.sexo && (
        <Text style={styles.errorText}>{errors.sexo.message}</Text>
      )}

      {/* Vacunas*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Vacunas"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="vacunas"
        rules={{ required: 'Las vacunas son requeridas' }}
      />
      {errors.vacunas && (
        <Text style={styles.errorText}>{errors.vacunas.message}</Text>
      )}

      {/* Nacimiento
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Fecha de Nacimiento'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='nacimiento'
        rules={{ required: 'la fecha de nacimiento de la mascota es requerido' }}
      />
      {errors.nacimiento && <Text style={styles.errorText}>{errors.nacimiento.message}</Text>}*/}

      {/* Observacions */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Observaciones y/o caracteristicas"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="observaciones"
        rules={{ required: 'Ingrese descripción adicional' }}
      />
      {errors.observaciones && (
        <Text style={styles.errorText}>{errors.observaciones.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleAddPet)}
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
