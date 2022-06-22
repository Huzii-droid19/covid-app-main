import { View, Text } from "react-native";
import React from "react";
import ProgressLoader from "react-native-progress-loader";

const Loader = ({ visible }) => {
  return (
    <View>
      <ProgressLoader
        visible={visible}
        isModal={true}
        isHUD={true}
        hudColor={"#000000"}
        color={"#FFFFFF"}
      />
    </View>
  );
};

export default Loader;
