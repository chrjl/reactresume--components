import React from 'react';
import styled from 'styled-components';

import { ResumeEntry } from '@reactresume/types';

interface ContainerProps {
  $firstColumnWidth?: string;
  $columnGap?: string;
  $rowGap?: string;
}

const Container = styled.dl<ContainerProps>`
  display: grid;
  grid-template-columns: ${({ $firstColumnWidth }) =>
    `${$firstColumnWidth || 'max-content'} auto`};
  align-items: center;
  column-gap: ${({ $columnGap }) => $columnGap || '2em'};
  row-gap: ${({ $rowGap }) => $rowGap || '0.5em'};
`;

const Title = styled.dt`
  text-transform: uppercase;
  font-weight: bold;
`;

const Description = styled.dd``;

interface Props {
  data: ResumeEntry[];
  firstColumnWidth?: string; // CSS units
  rowGap?: string; // CSS units
  columnGap?: string; // CSS units
}

export const DefinitionTable = ({
  data,
  firstColumnWidth,
  rowGap,
  columnGap,
}: Props) => (
  <Container
    $firstColumnWidth={firstColumnWidth}
    $columnGap={columnGap}
    $rowGap={rowGap}
  >
    {data.map(({ title, description }, index) => (
      <React.Fragment key={index}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </React.Fragment>
    ))}
  </Container>
);
