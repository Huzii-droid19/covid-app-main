import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";

const { width, height } = Dimensions.get("window");

const StyledChart = ({ data, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <LineChart
        isAnimated
        curved
        areaChart={true}
        data={data?.deaths}
        data2={data?.recovered}
        rotateLabel={false}
        width={width * 0.7}
        height={height * 0.25}
        hideDataPoints={false}
        dataPointsColor="#3b5998"
        spacing={20}
        color1="#F32424"
        color2="orange"
        thickness={2.5}
        startFillColor="rgba(20,205,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.6}
        endOpacity={0.1}
        initialSpacing={0}
        noOfSections={7}
        maxValue={1000}
        yAxisColor="gray"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{ color: "black" }}
        xAxisLabelTextStyle={{ color: "red", fontSize: 20 }}
      />
    </View>
  );
};

export default StyledChart;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    backgroundColor: "rgba(59, 30, 152, 0.05)",
    borderRadius: 10,
    width: width * 0.95,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    alignSelf: "center",
  },
});
