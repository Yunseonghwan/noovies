import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity } from "react-native";

import { trimText, formatDate } from "../utils";
import Poster from "./Poster";

const Container = styled.View`
  padding: 0px 30px;
  padding-right: 100px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 70%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const Horizontal = ({
  isTv = false,
  id,
  title,
  poster,
  overview,
  releaseDate,
}) => {
  const navigation = useNavigation();
  const goToDetail = () =>{
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      poster,
      overview,
      releaseDate
    })
  }
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 40)}</Title>
          {releaseDate ? (
            <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
          ) : null}
          <Overview>{trimText(overview, 140)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
