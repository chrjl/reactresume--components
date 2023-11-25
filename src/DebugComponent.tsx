import styled from 'styled-components';
import { ResumeEntry } from '@reactresume/types';

const Container = styled.ul`
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 1em;
`;

const DescriptionList = styled.dl`
  & dt {
    font-weight: bold;
    text-transform: uppercase;
  }

  & dd {
    padding-left: 1em;
  }
`;

interface DebugComponentProps {
  data: ResumeEntry[];
}

export const DebugComponent = ({ data }: DebugComponentProps) => (
  <Container>
    {data.map(({ title, subtitle, note, description, highlights }, index) => (
      <li key={index}>
        <DescriptionList>
          <dt>title</dt>
          <dd>{title}</dd>

          {subtitle && (
            <>
              <dt>subtitle</dt>
              <dd>{subtitle}</dd>
            </>
          )}

          {note && (
            <>
              <dt>note</dt>
              <dd>{note}</dd>
            </>
          )}

          {description && (
            <>
              <dt>description</dt>
              <dd>{description}</dd>
            </>
          )}

          {highlights && (
            <>
              <dt>highlights</dt>
              <dd>{highlights}</dd>
            </>
          )}
        </DescriptionList>
      </li>
    ))}
  </Container>
);
