import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { ObjectDetailScreen } from './src/screens/ObjectDetailScreen/ObjectDetailScreen';
import { AddPetScreen } from './src/screens/AddPetScreen/AddPetScreen';
import { AddObjectScreen } from './src/screens/AddObjectScreen/AddObjectScreen';
import { AddUserScreen } from './src/screens/AddUserScreen/AddUserScreen';
import { MainStackScreen } from './src/screens/ObjectScreen/MainStackScreen';
import { UserProvider } from './src/Contexts/UserContext';
const ObjectStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <ObjectStack.Navigator screenOptions={{ headerShown: false }}>

            <ObjectStack.Screen name="Principal" component={MainStackScreen} />

            <ObjectStack.Screen name="Detail" component={ObjectDetailScreen} />
            <ObjectStack.Screen name="AddPet" component={AddPetScreen} />
            <ObjectStack.Screen name="AddObject" component={AddObjectScreen} />
            <ObjectStack.Screen name="AddUser" component={AddUserScreen} />


          </ObjectStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  );
}


