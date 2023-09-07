import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList, Pressable, Image } from "react-native";
import { styles } from "./ObjectScreen.styles.js"

import { data } from "../../api/data.js"

import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { object } from "prop-types";



export const ObjectScreen = ({ navigation }) => {

  /* Search */
  const [searchQuery, setSearchQuery] = useState("")
  const handlerSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredObjects = data.filter(object => (
    object.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  /* Cards */
  const renderData = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Detail", { item })}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text>Hola</Text>
      </View>
    </Pressable>
    //<Image source={item.images[0]} style={itemContainer} />
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