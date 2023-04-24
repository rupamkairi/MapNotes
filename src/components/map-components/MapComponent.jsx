import { StyleSheet, Text, View } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRegion,
  setLocationError,
  setLocationValue,
} from "../../store/locationSlice";
import {
  getCurrentPositionAsync,
  requestBackgroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export default function MapComponent() {
  const dispatch = useDispatch();

  const region = useSelector(selectRegion);

  useEffect(() => {
    (async () => {
      let { status } = await requestBackgroundPermissionsAsync();

      if (status !== "granted") {
        dispatch(setLocationError("Permission to access location was denied"));
        return;
      }

      let location = await getCurrentPositionAsync({});
      dispatch(setLocationValue(location));
    })();
  }, []);

  return (
    <Fragment>
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      </MapView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
