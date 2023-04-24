import { Button, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import screenNames from "../constants/screenNames";
import { scheduleNotification } from "../notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocationError,
  selectLocationValue,
  setLocationValue,
} from "../store/locationSlice";
import { getCurrentPosition } from "../location";
import { ScrollView } from "react-native-gesture-handler";

export default function InitialBottomSheet() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { location } = useSelector(selectLocationValue);
  const locationError = useSelector(selectLocationError);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {}, []);

  useEffect(() => {
    handlePresentModalPress();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <ScrollView style={styles.contentContainer}>
            <Button
              title="Go To Notes"
              onPress={() => {
                navigate(screenNames.notes);
              }}
            />
            <Button
              title="Create Notification"
              onPress={() => {
                scheduleNotification();
              }}
            />
            <Button
              title="Location Update"
              onPress={async () => {
                const location = await getCurrentPosition();
                dispatch(setLocationValue(location));
                scheduleNotification();
              }}
            />
            <Text>{JSON.stringify(location, null, 2)}</Text>
            <Text>{locationError?.error}</Text>
          </ScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
