import React from 'react';
import styled from '@emotion/styled';
import Item, { ItemProps } from './Item';
import Profile from '../Profile';

import avatar from '../../icons/success.png';
import { Typography } from '@mui/material';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const dummyData: ItemProps[] = [
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
  { title: 'test', abstract: 'test' },
];

const List: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <Container>
      <TitleContainer>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          PROFILE
        </Typography>
      </TitleContainer>
      <Profile name="이찬호" job="Software Engineer" avatar={avatar} />
      <TitleContainer>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          POSTS
        </Typography>
      </TitleContainer>
      {dummyData.map((el, idx) => (
        <Item title={el.title + `${idx}`} abstract={el.abstract + `${idx}`} />
      ))}
      {dummyData.map((el, idx) => (
        <Item title={el.title + `${idx}`} abstract={el.abstract + `${idx}`} />
      ))}
      {dummyData.map((el, idx) => (
        <Item title={el.title + `${idx}`} abstract={el.abstract + `${idx}`} />
      ))}
      {children}
    </Container>
  );
};

export default List;
