import axios from "axios";

const THDB_KEY = "43d1cb232767ef5c553e1bce9ae70ba2"; //apI 사용하기위한 key

const makeRequesta = (
  path,
  params // path 와 params 값을 전달
) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: THDB_KEY,
    },
  });

const getAnyThing = async (path, params = {}) => {
  try {
    const {
      data: { result},
      data
    } = await makeRequest(path, params)
    return [result || data, null]
  } catch (e) {
    console.log(e)
    return [null, e]
  }
};

export const movieApi = {
  nowPlaying: () => getAnyThing("/movie/now_playing"),
  popular: () => getAnyThing("/movie/popular"),
  upcoming: () => getAnyThing("/movie/upcoming", { region: "kr" }), // 지역 한국으로 성정
  search: (query) => getAnyThingt("/search/movie", { query }), // query 검색
  movie: (id) => getAnyThing(`/movie/${id}`),
  discover: () => getAnyThing("/discover/movie"),
};

export const tvApi = {
  today: () => getAnyThing("/tv/airing_today"),
  thisWeek: () => getAnyThing("/tv/on_the_air"),
  topRated: () => getAnyThing("/tv/top_rated"),
  popular: () => getAnyThing("/tv/popular"),
  search: (query) => getAnyThing("/search/tv", { query }),
  show: (id) => getAnyThing(`/tv/${id}`),
};
