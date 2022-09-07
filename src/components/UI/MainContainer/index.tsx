import { View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

const MainContainer = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary700,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
      }}
    >
      {children}
    </View>
  );
};

export default MainContainer;
