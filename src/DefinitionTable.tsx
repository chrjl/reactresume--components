import React from 'react';
import styled from 'styled-components';

import { ResumeEntry } from '@reactresume/types';

const Container = styled.dl`
  display: grid;
  grid-template-columns: 12em auto;
  align-items: center;
  column-gap: 2em;
  row-gap: 0.5em;
`;

const Title = styled.dt`
  text-transform: uppercase;
  font-weight: bold;
`;

const Description = styled.dd`
`;

interface DefinitionTableProps {
  data: ResumeEntry[];
}

export const DefinitionTable = ({ data }: DefinitionTableProps) => (
  <Container>
    {data.map(({ title, description }, index) => (
      <React.Fragment key={index}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </React.Fragment>
    ))}
  </Container>
);
