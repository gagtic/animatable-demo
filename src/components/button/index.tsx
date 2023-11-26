import React, { FC, ReactElement } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/responsive";

interface Button {
  onPress: () => void;
  width?: string | number;
  color: "black" | "white";
  children: ReactElement;
}

const Button: FC<Button> = ({
  onPress,
  width = "100%",
  color = "black",
  children,
}) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color, width }]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "baseline",
    paddingVertical: heightPercentageToDP(1.7),
    paddingHorizontal: widthPercentageToDP(3),
    borderRadius: widthPercentageToDP(100),
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});

export default Button;
