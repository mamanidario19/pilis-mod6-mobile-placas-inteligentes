import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { ObjectDetailScreen } from './src/screens/ObjectDetailScreen/ObjectDetailScreen';
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
          </ObjectStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  );
}


