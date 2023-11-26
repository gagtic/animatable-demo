import React, { FC, ReactElement } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { marginViewHorizontal } from "../../../../utils/margins";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils/responsive";

interface IButtonGraphics {
  text: string;
  children: ReactElement;
}

const ButtonGraphics: FC<IButtonGraphics> = ({ text, children }) => {
  return (
    <View style={styles.container}>
      {children}
      {marginViewHorizontal(3)}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  rowImage: {
    width: widthPercentageToDP(7.5),
    height: heightPercentageToDP(4),
  },
  text: { fontSize: widthPercentageToDP(4) },
});

export default ButtonGraphics;
