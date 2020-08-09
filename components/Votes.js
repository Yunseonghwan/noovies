import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.7;
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: bold;
`;

const Votes = ({ votes }) => <Container>⭐ {votes} / 10</Container>;

export default Votes;
