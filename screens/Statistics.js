import { View, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { useGetCovidGraphWorldWideQuery } from "../store/api/dataApi";
import Loader from "../components/Loader";
import StyledChart from "../components/Linechart";
const screenWidth = Dimensions.get("window").width;

const Statistics = () => {
  const { data: worldData, isLoading: worldLoader } =
    useGetCovidGraphWorldWideQuery();
  return (
    <View style={styles.container}>
      <Loader visible={worldLoader} />
      <StyledChart label="Pakistan's Covid Statistics" data={worldData} />
      <StyledChart label="Worldwide Covid Statistics" data={worldData} />
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 20,
  },
});
