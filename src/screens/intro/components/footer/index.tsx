import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { marginViewVertical } from "../../../../utils/margins";
import { widthPercentageToDP } from "../../../../utils/responsive";
import Button from "../../../../components/button";

const BUTTON_WIDTH = "48%";

interface Footer {
  onSignUpPressed: () => void;
  onSignInPressed: () => void;
}

const Footer: FC<Footer> = ({ onSignUpPressed, onSignInPressed }) => {
  return (
    <>
      {marginViewVertical(5)}
      <Text style={{ fontSize: widthPercentageToDP(6) }}>Welcome</Text>
      {marginViewVertical(2)}
      <Text style={{ fontSize: widthPercentageToDP(4) }}>
        Welcome to this demo about react native animatable! Press options below
        to continue!
      </Text>
      {marginViewVertical(7.5)}
      <View style={styles.buttonContainer}>
        <Button onPress={onSignUpPressed} width={BUTTON_WIDTH} color="black">
          <Text style={styles.whiteButton}>{"Sign Up"}</Text>
        </Button>
        <Button onPress={onSignInPressed} width={BUTTON_WIDTH} color="white">
          <Text style={styles.blackButton}>{"Sign In"}</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-end",
  },
  whiteButton: { color: "white" },
  blackButton: { color: "black" },
});

export default Footer;
