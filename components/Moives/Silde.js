import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";

import Poster from "./Poster";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
    height:100%
    width:100%
    opacity: 0.4;
    position:absolute;
`;

const Content = styled.View`
  height:100%
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 7px;
`;

const Votes = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.7;
  margin-bottom: 7px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.7;
  font-size: 14px;
  font-weight: bold;
`;

const Button = styled.Button`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Button`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG
      style={{ width: "100%", height: "100%" }}
      source={{ uri: apiImage(backgroundImage) }}
    />

    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.slice(0, 30)}</Title>
        <Votes>⭐{votes} / 10</Votes>
        <Overview>{overview.slice(0, 120)}</Overview>
        <TouchableOpacity>
          <Button title="See Details">
            <ButtonText></ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
