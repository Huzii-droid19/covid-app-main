import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#00000",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(1, 146, 103, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [10, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(1, 146, 103, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Pakistan"] // optional
};
const chartConfigW = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#00000",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(84, 140, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const dataW = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [10, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(84, 140, 255, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["World Wide"] // optional
};
const Statistics = () => {
  return (
    <View>
      <View style={{paddingTop: 80}}>
  <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
</View>
<View style={{paddingTop: 80}}>
<LineChart
  data={dataW}
  width={screenWidth}
  height={220}
  chartConfig={chartConfigW}
/>
</View>
  </View>
  )
}

export default Statistics