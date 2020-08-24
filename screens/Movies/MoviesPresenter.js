import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native"; // Dimensions치수를 가져와줌, ActivityIndicator 로딩화면을 가져와준다

import Slide from "../../components/Moives/Silde";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import SlideContainer from "../../components/SlideContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ refreshFn, nowPlaying, popular, upcoming, loading }) => (
  <ScrollContainer loading={loading} refreshFn={refreshFn}>
    <>
      <SlideContainer>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
      </SlideContainer>
      <Container>
        {/* <Title title={"Popular Movies"} />
        <ScrollView
          style={{ marginVertical: 20, marginBottom: 40 }}
          contentContainerStyle={{ paddingLeft: 30 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </ScrollView> */}
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </HorizontalSlider>
        <List title="Coming Soon">
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
