import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ $cushion?: string }>`
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  line-height: normal;

  & ul {
    display: flex;
    flex-wrap: wrap;
    margin: ${({ $cushion = '1.5em' }) => `0 -${$cushion}`};
  }

  & li::before,
  & li::after {
    content: '|';
    display: inline-block;
    text-align: center;
    vertical-align: text-bottom;
    font-weight: 600;
    box-sizing: border-box;
    width: ${({ $cushion = '1.5em' }) => $cushion};
  }
`;

const ContainerLeft = styled(Container)`
  & ul {
    margin-right: 0;
    justify-content: left;
  }

  & li::after {
    display: none;
  }
`;

const ContainerRight = styled(Container)`
  & ul {
    margin-left: 0;
    justify-content: right;
  }

  & li::before {
    display: none;
  }
`;

interface Props {
  items: React.ReactNode[];
  align?: 'left' | 'right';
  cushion?: string; // CSS units
  separator?: string;
}

export const HorizontalUList = ({
  items,
  align = 'left',
  cushion,
  separator,
}: Props) => {
  if (!items) {
    console.error('HorizontalUList did not receive any items.');
    return;
  }

  const list = (
    <ul>{items.map((item, index) => item && <li key={index}>{item}</li>)}</ul>
  );

  switch (align) {
    case 'left': {
      return <ContainerLeft $cushion={cushion}>{list}</ContainerLeft>;
    }
    case 'right': {
      return <ContainerRight $cushion={cushion}>{list}</ContainerRight>;
    }
    default: {
      console.error('HorizontalUList: align must be either "left" or "right"');
    }
  }
};
