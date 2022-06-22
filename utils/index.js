import Toast from "react-native-toast-message";
import * as Location from "expo-location";

export const addToast = (message, isError) => {
  Toast.show({
    type: isError ? "error" : "success",
    position: "top",
    text1: isError ? "Error" : "Success 🎉",
    text2: message,
    visibilityTime: 5000,
  });
};

export const _getLocationAsync = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    /* If user hasn't granted permission to geolocate himself herself */
    Alert.alert(
      "User location not detected",
      "You haven't granted permission to detect your location. Please Provide location access",
      [{ text: "Open Settings", onPress: () => Linking.openSettings() }]
    );
    return;
  } else {
    /* If user has granted permission to geolocate himself herself */
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    return {
      status: true,
      location: location,
    };
  }
};
