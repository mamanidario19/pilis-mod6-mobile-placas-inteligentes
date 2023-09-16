import React from "react";
import { TextInput, View, Image } from "react-native";
import { styles } from "./SearchBar.styles";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../utils/theme";


export const SearchBar = ({ handlerSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Image source={require('./../../../assets/images/search2.png')} style={styles.image}></Image>
      {/* <FontAwesome name="search" size={20} color={COLORS.primary} /> */}
      <TextInput placeholder=" A quien buscas? "
        style={styles.searchInput}
        onChangeText={handlerSearch}
        value={searchQuery} />
    </View>

  )

}