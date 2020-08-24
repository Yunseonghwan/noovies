import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { Dimensions, ActivityIndicator } from "react-native";

import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { formatDate } from "../../utils";

const BG = styled.Image`
  width: 100%;
  height: 100%
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold
    font-size:24px;
    margin-bottom: 10px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.7;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.7;
  font-weight: 500;
`;

export default ({ loading, result }) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{ paddingBottom: 80 }}
  >
    <>
      <Header>
        <BG source={apiImage(result.backgroundImage, "-")} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes && <Votes votes={result.votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview && (
          <>
            <DataName>OverView</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        )}
        {loading && (
          <ActivityIndicator color={"white"} style={{ marginTop: "30" }} />
        )}
        {result.spoken_languages && (
          <>
            <DataName>Languages</DataName>
            <DataValue>
              {result.spoken_languages.map((l) => `${l.name} `)}
            </DataValue>
          </>
        )}
        {result.release_date && (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        )}
        {result.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        )}
        {result.runtime && (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
          </>
        )}
        {result.first_air_date && (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{formatDate(result.first_air_date)}</DataValue>
          </>
        )}
        {result.genres && (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((g, index) =>
                index + 1 === result.genres.lenght ? g.name : `${g.name} `
              )}
            </DataValue>
          </>
        )}
        {result.number_of_episodes && (
          <>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>{result.number_of_seasons} / {result.number_of_episodes}</DataValue>
          </>
        )}
      </Data>
    </>
  </ScrollContainer>
);
