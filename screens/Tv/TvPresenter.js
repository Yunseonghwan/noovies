import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";

import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import SlideContainer from "../../components/SlideContainer";
import Slide from "../../components/Moives/Silde";
import Rated from '../../components/Tv/Rated';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View`
  margin-top: 20px;
`;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek, popularity }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title="Popular">
        {popular.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated.map((show) => (
          <Rated
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            popularity={show.popularity}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <SlideContainer title="This Week">
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {thisWeek.map((show) => (
              <Slide
                key={show.id}
                id={show.id}
                title={show.name}
                overview={show.overview}
                votes={show.vote_average}
                backgroundImage={show.backdrop_path}
                poster={show.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
      </SlideContainer>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
