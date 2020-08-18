import React from "react";

import Input from "../../components/Search/Input";
import SearchResult from "../../components/Search/SearchResult";
import ResultContainer from "../../components/Search/ResultContainer";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{ paddingTop: 10 }}
  >
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <ResultContainer title={"Moive Results"}>
        {movies.map((movie) => (
          <SearchResult
            key={movie.id}
            id={movie.id}
            title={movie.title}
            votes={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </ResultContainer>
    )}
    {shows.length !== 0 && (
      <ResultContainer title={"TV Results"}>
        {shows.map((show) => (
          <SearchResult
            key={show.id}
            id={show.id}
            title={show.name}
            votes={show.vote_average}
            poster={show.poster_path}
          />
        ))}
      </ResultContainer>
    )}
  </ScrollContainer>
);
