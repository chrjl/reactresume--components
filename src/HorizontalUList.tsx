import React from 'react';
import styled from 'styled-components';

const ContainerLeft = styled.div`
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  line-height: normal;

  & ul {
    margin-left: -1.5em;
    display: flex;
    flex-wrap: wrap;
  }

  & li::before {
    content: '|';
    display: inline-block;
    text-align: center;
    vertical-align: text-bottom;
    font-weight: 600;
    box-sizing: border-box;
    width: 1.5em;
  }
`;

const ContainerRight = styled.div`
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  line-height: normal;

  & ul {
    margin-right: -1.5em;
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
  }

  & li::after {
    content: '|';
    display: inline-block;
    text-align: center;
    vertical-align: text-bottom;
    font-weight: 600;
    box-sizing: border-box;
    width: 1.5em;
  }
`;

interface Props {
  items: React.ReactNode[];
  align?: 'left' | 'right';
  cushion?: string;
  separator?: string;
}

export const HorizontalUList = ({
  items,
  align = 'left',
  cushion,
  separator,
}: Props) => {
  if (!items) {
    console.error('HorizontalUList did not receive any items.')
    return
  }

  const list = (
    <ul>{items.map((item, index) => item && <li key={index}>{item}</li>)}</ul>
  );

  switch (align) {
    case 'left': {
      return <ContainerLeft>{list}</ContainerLeft>;
    }
    case 'right': {
      return <ContainerRight>{list}</ContainerRight>;
    }
    default: {
      console.error('HorizontalUList: align must be either "left" or "right"');
    }
  }
};
