import React, { useState, useFocueEffect, useCallback } from "react";
import { Image, StatusBar, BackHandler, Alert } from "react-native";
import { AppLoading } from "expo"; //api 앱 로딩화면
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

// 4.5부터 시청

//StartAsyne 는 promise를 리턴하는 함수

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image); //ex) image url
    } else {
      return Asset.fromModule(image).downloadAsync(); //image module
    }
  }); //이미지들의 어레이
const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    //promise 를 리턴해야하는 함수
    const images = cacheImages([
      "https://images.unsplash.com/photo-1562407680-948253e074d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png"), //모듈로 이미지 가져오기
    ]);
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => {
    setIsReady(true);
  };

  //백핸들러 버튼

  const ScreenWithCustomBackBehavior = () => {
    useFocusEffect(
      useCallback(() => {
        const onBackPress = () => {
          if (isSelectionModeEnabled()) {
            disableSelectionMode();
            return true;
          } else {
            return false;
          }
        };

        BackHandler.addEventListener("hardwareBackPress", onBackPress);

        return () =>
          BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      }, [isSelectionModeEnabled, disableSelectionMode])
    );
  };

  return isReady ? (
    <>
      <NavigationContainer onBackPress={ScreenWithCustomBackBehavior}>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  ); //onError={(e) => console.log(e)}
}
