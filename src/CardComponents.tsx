import React from 'react';
import styled from 'styled-components';

import { ResumeEntry } from '@reactresume/types';

interface CardProps {
  entry: ResumeEntry;
}

export const Card = ({ entry }: CardProps) => {
  const { title, subtitle, note, description, highlights } = entry;

  return (
    <div>
      <div className="heading">
        <span className="title">{title}</span>
        {subtitle && <span className="subtitle">{subtitle}</span>}
      </div>

      <div className="body">
        {note && <div className="note">{note}</div>}
        {description && <div className="description">{description}</div>}
        {highlights && <div className="highlights">{highlights}</div>}
      </div>
    </div>
  );
};

interface GridCardsProps {
  data: ResumeEntry[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;

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

export const GridCards = ({ data }: GridCardsProps) => (
  <GridContainer>
    {data.map((entry, index) => (
      <Card key={index} entry={entry} />
    ))}
  </GridContainer>
);
