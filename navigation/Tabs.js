import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { Platform } from "react-native"; //android 랑 ios 구분해서쓸때

const Tabs = createBottomTabNavigator(); //bottom 메뉴 호출

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route); //바텀 메뉴바 헤더 네임 가져오기
    navigation.setOptions({
      title: name,
    });
  }, [route]);
  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName = Platform.OS === "ios" ? "ios-" : "md-";
            if (route.name === "Movies") {
              iconName += "film";
            } else if (route.name === "TV") {
              iconName += "tv";
            } else if (route.name === "Search") {
              iconName += "search";
            } else if (route.name === "Discovery") {
              iconName += "heart";
            }
            return (
              <Ionicons
                name={iconName}
                color={focused ? "white" : "gray"}
                size={26}
              />
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "black",
            borderTopColor: "black",
          },
        }}
      >
        <Tabs.Screen name="TV" component={Tv} />
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Discovery" component={Favs} />
      </Tabs.Navigator>
    </>
  );
};
