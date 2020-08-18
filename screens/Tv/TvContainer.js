import React, { useState, useEffect } from "react";
import { tvApi } from "../../api";

import TvPresenter from './TvPresenter';

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShows({
        loading: false,
        today,
        thisWeek,
        topRated,
        popular,
        todayError,
        thisWeekError,
        topRatedError,
        popularError

    })
  };

  useEffect(() => {
    getData();
  }, [shows]);
  return (
    <TvPresenter refreshFn={getData} {...shows}/>
  );
};
