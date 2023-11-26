import { StyleSheet } from "react-native";
import AppNavigation from "./src/navigation";

export default function App() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
