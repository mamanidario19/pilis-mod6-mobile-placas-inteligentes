import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList, Pressable, Image, TouchableOpacity } from "react-native";
import { styles } from "./ObjectScreen.styles.js"
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { object } from "prop-types";
import { getPets } from "../../api/pet.service.js";
import { AddPet } from "../../screens/AddPetScreen/AddPetScreen.jsx"
import { AddObject } from "../../screens/AddObjectScreen/AddObjectScreen.jsx"

import { useForm, Controller } from "react-hook-form";

export const ObjectScreen = ({ navigation }) => {

  /* Search */
  const [searchQuery, setSearchQuery] = useState("")
  const [ObjectScreen, setPets] = useState([])
  


  const handlerSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredObjects = ObjectScreen.filter(object => (
    object.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  /* */
  useEffect(() => {
    getPets()
      .then(data => {
        setPets(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  /* Cards */
  const renderData = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Detail", { item })} key={item.idMascota}>
      <View style={styles.itemContainer} >
        <Image
          style={styles.itemImage}
          source={require('../../../assets/images/example-pet.jpg')}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemPrice}>Nombre: {item.nombre}</Text>
          <Text style={styles.itemPrice}>Sexo: {item.sexo}</Text>
          <Text style={styles.itemPrice}>Vacunas: {item.vacunas}</Text>
          <Text style={styles.itemPrice}>Vacunas: {item.idMascota}</Text>
          {/* Agrega más datos aquí si es necesario */}
        </View>
      </View>
    </Pressable>
  );

  const handleAddPet = () => {
    navigation.navigate(AddPet); // Navigate to the "AddPet" screen
  };
  const handleAddObject = () => {
    navigation.navigate(AddObject); // Navigate to the "AddPet" screen
  };

  return (
    <SafeAreaView style={styles.container}>

      <SearchBar handlerSearch={handlerSearch} searchQuery={searchQuery} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddPet")}>
          <Image source={require('./../../../assets/images/pet.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Agregar mascota</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddObject")}>
          <Image source={require('./../../../assets/images/object.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Agregar objeto</Text>
        </TouchableOpacity>
      </View>

      {filteredObjects.length > 0 && (
        <FlatList
          data={filteredObjects}
          renderItem={renderData}
          keyExtractor={item => item.idMascota}
          style={styles.itemList}
        />
      )}

    </SafeAreaView >
  )
}