import React from "react";
import { TextInput, View, Image, Text, TouchableOpacity } from "react-native";
import { useForm, Controller } from 'react-hook-form'
import { StyleSheet } from 'react-native'
import { styles } from "./FormProfile.styles";
export const FormProfile = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      apellido: '',
      nombre: '',
      telefono: '',
      facebook: '',
      instagram: '',
      telegram: '',
      calle: '',
      numero: '',
      latitud: '',
      longitud: '',
      idLocalidad: '',
    }
  })
  const handleModProfile = ({ apellido, nombre, telefono, facebook, instragram, telegram, calle, numero, latitud, longitud, idLocalidad }) => {
    const modProfile = {
      apellido,
      nombre,
      telefono,
      facebook,
      instragram,
      telegram,
      calle,
      numero,
      latitud,
      longitud,
      idLocalidad
    }
    // Call the API service to add 
    modNewProfile(modProfile)
      .then(() => {
        // Handle success 
        console.log('Perfil agregado correctamente!')
        // Navigate to the appropriate screen
        navigation.navigate('Object')
      })
      .catch(err => {
        // Handle error 
        console.warn('Error al actualizar perfil!:', err)
      })
  }
  return (
    <View >
      {/* Apellido*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su Apellido'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='apellido'
        rules={{ required: 'El apellido requerido' }}
      />
      {errors.apellido && <Text style={styles.errorText}>{errors.apellido.message}</Text>}

      {/*Nombre*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su Nombre'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='nombre'
        rules={{ required: 'Su nombre es requerido' }}
      />
      {errors.nombre && <Text style={styles.errorText}>{errors.nombre.message}</Text>}

      {/* telefono*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su numero telefonico'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='telefono'
        rules={{ required: 'El telefono es requerido' }}
      />
      {errors.telefono && <Text style={styles.errorText}>{errors.telefono.message}</Text>}

      {/* facebook*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su perfil de facebook'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='facebook'
        rules={{ required: 'Las vacunas son requeridas' }}
      />
      {errors.facebook && <Text style={styles.errorText}>{errors.facebook.message}</Text>}

      {/* instagram */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su perfil de instagram'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='instagram'
        rules={{ required: 'Su perfil de instagram es requerido ' }}
      />
      {errors.instagram && <Text style={styles.errorText}>{errors.instagram.message}</Text>}

      {/* telegram */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su perfil de telegram'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='telegram'
        rules={{ required: 'Su perfil de telegram es requerido ' }}
      />
      {errors.telegram && <Text style={styles.errorText}>{errors.telegram.message}</Text>}

      {/* calle */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese calle'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='calle'
        rules={{ required: 'Su calle es requerido ' }}
      />
      {errors.calle && <Text style={styles.errorText}>{errors.calle.message}</Text>}

      {/* numero */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su numero de calle'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='numero'
        rules={{ required: 'Su num de calle es requerido ' }}
      />
      {errors.numero && <Text style={styles.errorText}>{errors.numero.message}</Text>}

      {/* IdLocalidad */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese su localidad'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='idLocalidad'
        rules={{ required: 'Su Localidad es requerido ' }}
      />
      {errors.idLocalidad && <Text style={styles.errorText}>{errors.idLocalidad.message}</Text>}


      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleModProfile)}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>

  )
}