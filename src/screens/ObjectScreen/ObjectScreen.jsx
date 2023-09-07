import React from "react";
import { Text, View, SafeAreaView, FlatList, Pressable, Image } from "react-native";
import { styles } from "./ObjectScreen.styles.js"

import { data } from "../../api/data.js"



export const ObjectScreen = ({ navigation }) => {

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
      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />

    </SafeAreaView >
  )
}