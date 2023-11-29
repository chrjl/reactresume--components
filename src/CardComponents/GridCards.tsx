import React from 'react';
import styled from 'styled-components';

import { ResumeEntry } from '@reactresume/types';
import { Card } from './Card';

interface GridContainerProps {
  $rowGap?: string;
  $columnGap?: string;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ $columnGap }) => $columnGap || '2em'};
  grid-row-gap: ${({ $rowGap }) => $rowGap || '2em'};

  & .heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    text-transform: uppercase;
    font-weight: bold;

    & .title {
      white-space: nowrap;
    }

    & .subtitle {
      margin-left: auto;
      color: #666666;
      font-size: 85%;
    }
  }

  & .body {
    & .note {
      font-size: 85%;
      margin-bottom: 1em;
    }

    & .highlights {
      margin-bottom: 2em;

      & ul {
        list-style: outside;
        padding-left: 1.25em;
        margin-top: 0.25em;
      }
    }

    & div:last-child {
      margin-bottom: 0;
    }
  }
`;

interface GridCardsProps {
  data: ResumeEntry[];
  columnGap?: string;
  rowGap?: string;
}

export const GridCards = ({ data, rowGap, columnGap }: GridCardsProps) => (
  <GridContainer $rowGap={rowGap} $columnGap={columnGap}>
    {data.map((entry, index) => (
      <Card key={index} entry={entry} />
    ))}
  </GridContainer>
);
