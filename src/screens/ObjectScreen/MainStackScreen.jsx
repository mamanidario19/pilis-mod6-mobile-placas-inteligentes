import React from "react";
import { StyleSheet } from "react-native";
import { ObjectScreen } from "./ObjectScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../../utils/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { ProfileScreen } from '../ProfileScreen/ProfileScreen'
import { ScannerScreen } from '../ScannerScreen/ScannerScreen'
import { AddPetScreen } from "../../components/AddPetScreen/AddPetScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'home',
  Profile: 'user-alt',
  Object: 'dog',
  Scanner: 'qrcode'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <FontAwesome5 name={iconName} size={size} color={color}></FontAwesome5>
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.TabBar
  }
}
const styles = StyleSheet.create({
  TabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  },
});

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>

      <Tab.Screen name="Home" options={{ title: "Inicio" }} component={HomeScreen} />
      <Tab.Screen name="Object" options={{ title: "Mascotas" }} component={ObjectScreen} />
      <Tab.Screen name="Profile" options={{ title: "Mi Perfil" }} component={ProfileScreen} />
      <Tab.Screen name="Scanner" options={{ title: "Scanner" }} component={ScannerScreen} />
      <Tab.Screen name="AddPet" options={{ title: "Agregar Mascota" }} component={AddPetScreen} />

    </Tab.Navigator>
  )

}
