import React from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

//children 은 ScrollContainer 안에 내용 인자
const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    // refreshControl={<RefreshControl />}
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
