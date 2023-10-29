import React from 'react';
import { ResumeEntry } from '@reactresume/types';

interface DefinitionTableProps {
  data: ResumeEntry[];
}

export const DefinitionTable = ({ data }: DefinitionTableProps) => (
  <dl>
    {data.map(({ title, description }, index) => (
      <React.Fragment key={index}>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </React.Fragment>
    ))}
  </dl>
);
