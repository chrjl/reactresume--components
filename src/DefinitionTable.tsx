import React from 'react';
import styled from 'styled-components';

import { ResumeEntry } from '@reactresume/types';

const Container = styled.dl<{ $dtWidth?: string; $columnGap?: string }>`
  display: grid;
  grid-template-columns: ${(props) => `${props.$dtWidth || 'max-content'} auto`};
  align-items: center;
  column-gap: ${(props) => props.$columnGap || '2em'};
  row-gap: 0.5em;
`;

const Title = styled.dt`
  text-transform: uppercase;
  font-weight: bold;
`;

const Description = styled.dd``;

interface Props {
  data: ResumeEntry[];
  dtWidth?: string; // CSS units
  columnGap?: string; // CSS units
}

export const DefinitionTable = ({ data, dtWidth, columnGap }: Props) => (
  <Container $dtWidth={dtWidth} $columnGap={columnGap}>
    {data.map(({ title, description }, index) => (
      <React.Fragment key={index}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </React.Fragment>
    ))}
  </Container>
);
