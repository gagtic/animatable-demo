import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "../intro/index.styles";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/responsive";
import { marginViewVertical } from "../../utils/margins";
import InputField from "./components/inputField";
import Button from "../../components/button";
import ButtonGraphics from "./components/buttonGraphics";
import BottomView from "./components/bottomView";

const Login = () => {
  const navigation = useNavigation();
  const imageRef = useRef<any>(null);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Animatable.View
      animation={"fadeIn"}
      duration={1000}
      style={[styles.container, { backgroundColor: "rgb(229,234,92)" }]}
    >
      <Animatable.View
        animation={"fadeInDownBig"}
        style={[
          styles.upperContainer,
          { flex: 1, backgroundColor: "rgb(229,234,92)" },
        ]}
      >
        {marginViewVertical(3)}
        <Animatable.Image
          duration={300}
          ref={imageRef}
          source={require("../../../assets/images/logo-horizontal.png")}
          style={stylesSelf.image}
          resizeMode="center"
        />
      </Animatable.View>
      <Animatable.View
        animation={"slideInUp"}
        style={[
          styles.lowerContainer,
          {
            flex: 3.5,
            backgroundColor: "white",
            paddingVertical: heightPercentageToDP(3),
            paddingHorizontal: widthPercentageToDP(5),
          },
        ]}
      >
        <BottomView
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </Animatable.View>
    </Animatable.View>
  );
};

const stylesSelf = StyleSheet.create({
  image: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(13),
  },
  rowImage: {
    width: widthPercentageToDP(7.5),
    height: heightPercentageToDP(4),
  },
  forgotLabel: {
    fontSize: widthPercentageToDP(3),
    textAlign: "right",
    fontWeight: "bold",
  },
  signInText: { color: "white" },
});

export default Login;
