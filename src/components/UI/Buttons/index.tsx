import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./Style";

interface Button {
  btnHandler?: () => void;
  children?: any;
  mode?: "flat" | "normal";
  style?: object;
}

export const PrimaryButton = ({
  btnHandler,
  children,
  mode = "normal",
  style,
}: Button) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={btnHandler}
      >
        <View style={[styles.primary, mode == "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode == "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
