import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenNames from "./constants/screenNames";
import RootScreen from "./screens/RootScreen";
import NotesScreeen from "./screens/NotesScreeen";

const RootStack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={screenNames.root} component={RootScreen} />
      <RootStack.Screen name={screenNames.notes} component={NotesScreeen} />
    </RootStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
