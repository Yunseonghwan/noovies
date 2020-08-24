import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import TvPoster from "./TvPoster";
import Votes from "../Votes";
import { trimText } from "../../utils";

const Container = styled.View`
  align-items: center;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Rated = ({ isTv = false, id, poster, title, votes, overview }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      poster,
      votes,
      overview
    })
  }
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <TvPoster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Rated.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rated;
