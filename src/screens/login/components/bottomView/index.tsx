import { Image, StyleSheet, Text } from "react-native";
import { marginViewVertical } from "../../../../utils/margins";
import InputField from "../inputField";
import Button from "../../../../components/button";
import ButtonGraphics from "../buttonGraphics";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils/responsive";
import { FC } from "react";

interface IBottomView {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const BottomView: FC<IBottomView> = ({
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <>
      <InputField
        value={username}
        placeholder={"Username"}
        setValue={setUsername}
      />
      {marginViewVertical(1.3)}
      <InputField
        value={password}
        placeholder={"Password"}
        setValue={setPassword}
        secured={true}
      />
      {marginViewVertical(1.3)}
      <Text style={stylesSelf.forgotLabel}>Forget Password?</Text>
      {marginViewVertical(1.3)}
      <Button onPress={() => {}} color={"black"}>
        <Text style={stylesSelf.signInText}>{"Sign In"}</Text>
      </Button>
      {marginViewVertical(10)}
      <Button onPress={() => {}} color={"white"}>
        <ButtonGraphics text={"Continue with Google"}>
          <Image
            source={require("../../../../../assets/images/google.png")}
            style={stylesSelf.rowImage}
            resizeMode="contain"
          />
        </ButtonGraphics>
      </Button>
      {marginViewVertical(2)}
      <Button onPress={() => {}} color={"white"}>
        <ButtonGraphics text={"Continue with Facebook"}>
          <Image
            source={require("../../../../../assets/images/facebook.png")}
            style={stylesSelf.rowImage}
            resizeMode="contain"
          />
        </ButtonGraphics>
      </Button>
    </>
  );
};

const stylesSelf = StyleSheet.create({
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

export default BottomView;
