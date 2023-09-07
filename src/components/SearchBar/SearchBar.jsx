import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./SearchBar.styles";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../utils/theme";


export const SearchBar = ({ handlerSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={20} color={COLORS.primary} />
      <TextInput placeholder=" A quien buscas? "
        style={styles.searchInput}
        onChangeText={handlerSearch}
        value={searchQuery} />
    </View>

  )

}