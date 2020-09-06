import React from "react";
import { Dimensions, PanResponder, Animated } from "react-native";
import { apiImage } from "../../api";
import styled from "styled-components/native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;
const Card = styled.View`
  top: 50px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export default ({ results }) => {
  return (
    <Container>
      {results.reverse().map((result) => {
        <Card key={result.id}>
          <Poster source={{uri : apiImage(result.poster_path)}} />
        </Card>;
        console.log(apiImage(result.poster_path))
      })}
    </Container>
  );
};
