import axios from "axios";

const THDB_KEY = "43d1cb232767ef5c553e1bce9ae70ba2"; //apI 사용하기위한 key

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {   //path 로 전달
    params: {
      ...params,
      api_key: THDB_KEY
    }
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {   //영화 관련API
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: query => getAnything("/search/movie", { query }),
  movie: id => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getAnything("/discover/movie")
};

export const tvApi = {  //TV관련 API
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: query => getAnything("/search/tv", { query }),
  show: id => getAnything(`/tv/${id}`, { append_to_response: "videos" })
};

export const apiImage = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : "https://images.unsplash.com/photo-1562407680-948253e074d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"   //image 받아오는API