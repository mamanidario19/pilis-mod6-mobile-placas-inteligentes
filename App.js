import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { ObjectDetailScreen } from './src/screens/ObjectDetailScreen/ObjectDetailScreen';
import { MainStackScreen } from './src/screens/ObjectScreen/MainStackScreen';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
const ObjectStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ObjectStack.Navigator screenOptions={{ headerShown: false }}>

          <ObjectStack.Screen name="Home" component={HomeScreen} />

          <ObjectStack.Screen name="Principal" component={MainStackScreen} />

          <ObjectStack.Screen name="Detail" component={ObjectDetailScreen} />

        </ObjectStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}


