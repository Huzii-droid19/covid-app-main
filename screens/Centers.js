import * as React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { addToast, _getLocationAsync } from "../utils";
import { pathOr } from "ramda";
import Chip from "../components/Chip";
const { width, height } = Dimensions.get("window");

const Centers = () => {
  const [location, setLocation] = React.useState({});
  const initialRegion = {
    latitude: parseFloat(33.6826154),
    longitude: parseFloat(73.0384147),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  React.useEffect(() => {
    _getLocationAsync()
      .then((res) => {
        if (res?.status)
          setLocation({
            latitude: parseFloat(res?.location.coords?.latitude),
            longitude: parseFloat(res?.location?.coords?.longitude),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
      })
      .catch((err) =>
        addToast(pathOr("Error while fetching location", ["message"], err))
      );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        loadingEnabled
        // initialRegion={initialRegion}
      ></MapView>
      <View style={styles.chipWrapper}>
        <Chip label="Testing" onPress={() => {}} />
        <Chip label="Vaccination" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Centers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  chipWrapper: {
    flexDirection: "row",
    marginHorizontal: 60,
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
  },
  map: {
    width: width,
    height: height,
    ...StyleSheet.absoluteFillObject,
  },
});
