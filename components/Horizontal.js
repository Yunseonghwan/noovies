import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import { apiImage } from "../api";
import Poster from "./Poster";
import Votes from "./Votes";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View``;

const Title = styled.Text`
  color: white;
  font-weight:bold;
`;

const Horizontal = ({ id, title, poster, overview, votes }) => (
  <Container>
    <Poster url={apiImage(poster)} />
    <Data>
      <Title>{title}</Title>
      <Votes votes={votes} />
    </Data>
  </Container>
);

Horizontal.PropTypes = {
  id: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
