import React from "react";
import { ObjectDetailScreen } from "../ObjectDetailScreen/ObjectDetailScreen";
import { ObjectScreen } from "./ObjectScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ObjectStack = createNativeStackNavigator()

export const ObjectStackScreen = () => {
  return (
    <ObjectStack.Navigator screenOptions={{ headerShown: false }}>
      <ObjectStack.Screen name="ObjectSearch" component={ObjectScreen} />
      <ObjectStack.Screen name="Detail" component={ObjectDetailScreen} />
    </ObjectStack.Navigator>
  )

}
