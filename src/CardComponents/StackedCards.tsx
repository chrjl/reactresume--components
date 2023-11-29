import React from 'react';
import styled from 'styled-components';

import { ResumeEntry } from '@reactresume/types';
import { Card } from './Card';

interface StackedContainerProps {
  $rowGap?: string;
}

const StackedContainer = styled.div<StackedContainerProps>`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${({ $rowGap }) => $rowGap || '2em'};

  & .heading {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    & .title {
      font-weight: bold;
      font-size: 110%;
    }

    & .subtitle {
      margin-left: 2em;
    }
  }

  & .body {
    margin-top: 0.5em;

    & .highlights {
      margin-top: 0.25em;

      & ul {
        list-style: outside;
        padding-left: 2.5em;
      }
    }
  }
`;

interface StackedCardsProps {
  data: ResumeEntry[];
  rowGap?: string; // CSS units
}

export const StackedCards = ({ data, rowGap }: StackedCardsProps) => (
  <StackedContainer $rowGap={rowGap}>
    {data.map((entry, index) => (
      <Card key={index} entry={entry} />
    ))}
  </StackedContainer>
);
