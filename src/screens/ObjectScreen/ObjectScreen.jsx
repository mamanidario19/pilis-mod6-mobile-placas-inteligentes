import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList, Pressable, Image } from "react-native";
import { styles } from "./ObjectScreen.styles.js"
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { object } from "prop-types";
import { getPets } from "../../api/pet.service.js";


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
      })
      .catch(err => console.log(err))
  }, [])

  /* Cards */
  const renderData = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Detail", { item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
        <View style={styles.column}>
          <Text style={styles.itemTitle}>{item.nombre}</Text>
          <Text style={styles.itemPrice}>{item.sexo}</Text>
          <Text style={styles.itemPrice}>Edad: {item.edad}</Text>
        </View>
      </View>
    </Pressable>
  )
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.itemTitle}>Object Screen </Text>

      <SearchBar handlerSearch={handlerSearch} searchQuery={searchQuery} />

      <FlatList
        data={filteredObjects}
        renderItem={renderData}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />

    </SafeAreaView >
  )
}