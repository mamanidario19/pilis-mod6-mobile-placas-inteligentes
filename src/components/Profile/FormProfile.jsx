import React, { useEffect } from 'react'
import { TextInput, View, Image, Text, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { styles } from './FormProfile.styles'
import { useAuth2 } from '../../Contexts/UserContext'
import { createProfile, updateProfile } from '../../api/perfil.service'
import { useNavigation } from '@react-navigation/native'

export const FormProfile = ({ perfil }) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm(perfil)
  const auth = useAuth2()
  const navigation = useNavigation()

  const handleModProfile = async (data) => {
    const modProfile = {
      ...data,
      idLocalidad: 1,
      idUsuario: auth.idUsuario,
    }
    console.log(modProfile)
    // Call the API service to add
    if (auth.idPerfil) {
      //Actualizar perfil
      await updateProfile(modProfile, auth.idPerfil)
        .then(() => {
          // Handle success
          console.log('Perfil actualizado correctamente!')
          // Navigate to the appropriate screen
          navigation.navigate('Object')
        })
        .catch((err) => {
          // Handle error
          console.warn('Error al actualizar perfil!:', err)
        })
    } else {
      await createProfile(modProfile)
        .then(() => {
          // Handle success
          console.log('Perfil agregado correctamente!')
          // Navigate to the appropriate screen
          navigation.navigate('Object')
        })
        .catch((err) => {
          // Handle error
          console.warn('Error al actualizar perfil!:', err)
        })
    }
  }
  useEffect(()=>{
    setValue('nombre',perfil.nombre)
    setValue('apellido',perfil.apellido)
    setValue('direccion',perfil.direccion)
    setValue('telefono',perfil.telefono)
    setValue('facebook',perfil.facebook)
    setValue('instagram',perfil.instagram)
  },[])
  return (
    <View>
      {/* Apellido*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su Apellido"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            // defaultValue={perfil.apellido}
          />
        )}
        name="apellido"
        rules={{ required: 'El apellido requerido' }}
      />
      {errors.apellido && (
        <Text style={styles.errorText}>{errors.apellido.message}</Text>
      )}

      {/*Nombre*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su Nombre"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            // defaultValue={perfil.nombre}
          />
        )}
        name="nombre"
        rules={{ required: 'Su nombre es requerido' }}
      />
      {errors.nombre && (
        <Text style={styles.errorText}>{errors.nombre.message}</Text>
      )}

      {/* telefono*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su numero telefonico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            // defaultValue={perfil.telefono}
          />
        )}
        name="telefono"
        rules={{ required: 'El telefono es requerido' }}
      />
      {errors.telefono && (
        <Text style={styles.errorText}>{errors.telefono.message}</Text>
      )}

      {/* facebook*/}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su perfil de facebook"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            // defaultValue={perfil.facebook}
          />
        )}
        name="facebook"
        rules={{ required: 'Las vacunas son requeridas' }}
      />
      {errors.facebook && (
        <Text style={styles.errorText}>{errors.facebook.message}</Text>
      )}

      {/* instagram */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su perfil de instagram"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            // defaultValue={perfil.instagram}
          />
        )}
        name="instagram"
        rules={{ required: 'Su perfil de instagram es requerido ' }}
      />
      {errors.instagram && (
        <Text style={styles.errorText}>{errors.instagram.message}</Text>
      )}

      {/* telegram */}
      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su perfil de telegram"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="telegram"
        rules={{ required: 'Su perfil de telegram es requerido ' }}
      />
      {errors.telegram && (
        <Text style={styles.errorText}>{errors.telegram.message}</Text>
      )} */}

      {/* dirección */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese dirección"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            // defaultValue={perfil.direccion}
          />
        )}
        name="direccion"
        rules={{ required: 'La dirección es requerida ' }}
      />
      {errors.direccion && (
        <Text style={styles.errorText}>{errors.direccion.message}</Text>
      )}

      {/* numero */}
      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su numero de calle"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="numero"
        rules={{ required: 'Su num de calle es requerido ' }}
      />
      {errors.numero && (
        <Text style={styles.errorText}>{errors.numero.message}</Text>
      )} */}

      {/* IdLocalidad */}
      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ingrese su localidad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="idLocalidad"
        rules={{ required: 'Su Localidad es requerido ' }}
      />
      {errors.idLocalidad && (
        <Text style={styles.errorText}>{errors.idLocalidad.message}</Text>
      )} */}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleModProfile)}
      >
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}
