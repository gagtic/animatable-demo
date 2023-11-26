import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";

const IMAGE_SIZE = widthPercentageToDP(70);
const BORDER_RADIUS = widthPercentageToDP(10);

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  upperContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: widthPercentageToDP(80),
    backgroundColor: "#fff",
  },
  image: { width: IMAGE_SIZE, height: IMAGE_SIZE },
  lowerContainer: {
    backgroundColor: "rgb(229,234,92)",
    width: "100%",
    borderTopStartRadius: BORDER_RADIUS,
    borderTopEndRadius: BORDER_RADIUS,
    paddingHorizontal: widthPercentageToDP(10),
  },
});
