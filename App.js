import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen/ProfileScreen';
import { ObjectScreen } from './src/screens/ObjectScreen/ObjectScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from './src/utils/theme';
import { ScannerScreen } from './src/screens/ScannerScreen/ScannerScreen';

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
    tabBarInactiveTintColor: COLORS.grey,
    headerShown: false
  }
}


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Object" component={ObjectScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Scanner" component={ScannerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
