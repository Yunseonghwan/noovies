import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import { apiImage } from "../../api";

const Image = styled.Image`
  width: 150px;
  height: 160px;
  border-radius: 4px;
  color: white;
  border-radius: 100;
`;

const TvPoster = ({ url }) => <Image source={{ uri: apiImage(url) }} />;

TvPoster.propTypes = {
  url: PropTypes.string
};

export default TvPoster;
