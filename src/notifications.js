import {
  setNotificationHandler,
  scheduleNotificationAsync,
} from "expo-notifications";
import store from "./store";

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function scheduleNotification() {
  let { latitude, longitude } = store.getState().location.region;

  let body = "Updating Location...";
  if (latitude && longitude) {
    body = "Lat " + latitude + " Lon " + longitude;
  }

  await scheduleNotificationAsync({
    content: {
      title: "MapNotes Notifies",
      body,
    },
    trigger: null,
  });
}
