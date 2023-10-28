import React from 'react';

export const DefinitionTable = ({ data }) => (
  <dl>
    {data.map(({ title, description }, index) => (
      <React.Fragment key={index}>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </React.Fragment>
    ))}
  </dl>
);
