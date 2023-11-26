import React, { useRef, useState } from "react";
import { View } from "react-native";
import Footer from "./components/footer";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { styles } from "./index.styles";

const Intro = () => {
  const lottieAnimation = useRef<LottieView>(null);
  const imageRef = useRef<any>(null);
  const contentRef = useRef<any>();
  const [isFirstIteration, setIsFirstIteration] = useState<boolean>(true);
  const navigation: NavigationProp<ParamListBase | any> = useNavigation();

  const onButtonPressed = () => {
    if (lottieAnimation?.current) lottieAnimation.current?.play(0, 220);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (imageRef?.current) imageRef?.current?.bounceIn();
      if (contentRef?.current) contentRef?.current?.slideInUp();
    }, [imageRef, contentRef])
  );

  const handleAnimationEnd = () => {
    setIsFirstIteration(false);
    if (isFirstIteration && imageRef.current) imageRef.current?.bounceOut();
    if (isFirstIteration && contentRef.current)
      contentRef.current?.fadeOutDownBig().then(() => {
        if (isFirstIteration && lottieAnimation?.current)
          lottieAnimation.current?.play(220, 1000000);
      });
    else {
      setIsFirstIteration(true);
      navigation?.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.upperContainer, { flex: 2 }]}>
        <Animatable.Image
          ref={imageRef}
          source={require("../../../assets/images/logo.png")}
          style={styles.image}
        />
        <LottieView
          loop={false}
          autoPlay={false}
          speed={2}
          ref={lottieAnimation}
          style={styles.lottie}
          source={require("../../../assets/lotties/welcome-lottie.json")}
          onAnimationFinish={handleAnimationEnd}
        />
      </View>
      <Animatable.View
        ref={contentRef}
        style={[styles.lowerContainer, { flex: 1 }]}
      >
        <Footer
          onSignUpPressed={onButtonPressed}
          onSignInPressed={onButtonPressed}
        />
      </Animatable.View>
    </View>
  );
};

export default Intro;
