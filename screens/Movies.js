import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [movies, setMovies] = useState({
      nowPlaying: [],
      popular: [],
      upcoming: [],
      nowPlayingError: null,
      popularError: null,
      upcomingError: null
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying()
    const [popular, popularError] = await movieApi.nowPlaying()
    const [upcoming, upcomingError] = await movieApi.upcoming()
    setMovies({
        nowPlaying,
        popular,
        upcoming,
        nowPlayingError,
        upcomingError,
        popularError
    })
  };
  
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{color:"white"}}>{movies.nowPlaying?.length}</Text>
    </View>
  );
};
