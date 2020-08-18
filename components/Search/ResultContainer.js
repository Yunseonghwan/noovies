import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import Title from '../Title';

const Container = styled.View`
  flex-direction: row;
  flex-wrap:wrap;
`;

const ResultContainer = ({title, children, results}) => (
  <>
    <Title title={title} />
    <Container
      style={{ marginVertical: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingLeft: 30 }}
      //   horizontal
      // showsHorizontalScrollIndicator={true}
    >
      {children}
    </Container>
  </>
);

ResultContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default ResultContainer;