import React from "react";
import {View} from 'react-native'
import PropTypes from "prop-types";
import styled from "styled-components/native";

import Title from '../Title';

const Container = styled.View`
  flex-direction: row;
  flex-wrap:wrap;
  margin-left: 20px;
`;

const ResultContainer = ({title, children
}) => (
  <View>
    <Title title={title} />
    <Container
      style={{ marginVertical: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingLeft: 30 }}
      //   horizontal
      // showsHorizontalScrollIndicator={true}
    >
      {children}
    </Container>
  </View>
);

ResultContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default ResultContainer;