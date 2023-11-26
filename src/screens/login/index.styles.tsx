import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";

const IMAGE_SIZE = widthPercentageToDP(10);

export const styles = StyleSheet.create({
  image: { width: IMAGE_SIZE, height: IMAGE_SIZE },
});
