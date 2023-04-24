import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapComponent from "../components/map-components/MapComponent";
import InitialBottomSheet from "../components/InitialBottomSheet";

export default function RootScreen() {
  return (
    <View>
      <MapComponent />
      <InitialBottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
