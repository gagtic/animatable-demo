import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils/responsive";

interface IInputField {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  secured?: boolean;
}

const InputField: FC<IInputField> = ({
  value,
  placeholder,
  setValue,
  secured = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secured}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    height: heightPercentageToDP(7),
    borderRadius: heightPercentageToDP(100),
    justifyContent: "center",
    paddingHorizontal: widthPercentageToDP(4),
  },
  input: { flex: 1, fontSize: widthPercentageToDP(4) },
});

export default InputField;
