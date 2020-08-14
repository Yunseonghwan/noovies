import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types'

import Title from "./Title";

const Container = styled.View``;
const TitleContainer = styled.View`
  margin-bottom: 20px;
`;

const SlideContainer = ({ title, children }) => (
  <>
    <TitleContainer>
      <Title title={title} />
    </TitleContainer>

    <Container>{children}</Container>
  </>
);

SlideContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default SlideContainer;
