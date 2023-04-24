import {
  getCurrentPositionAsync,
  requestBackgroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export async function getCurrentPosition() {
  // let { status } = await requestBackgroundPermissionsAsync();
  let { status } = await requestForegroundPermissionsAsync();

  if (status !== "granted") {
    return;
  }

  const location = await getCurrentPositionAsync({});
  return location;
}
