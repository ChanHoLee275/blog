import React from 'react';
import { Card, Avatar, CardContent, Typography } from '@mui/material';

import github from '../../icons/github.png';
import resume from '../../icons/resume.png';
import styled from '@emotion/styled';

export interface ProfileProps {
  name: string;
  job: string;
  avatar: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
`;

const Profile: React.FC<ProfileProps> = ({ name, job, avatar }) => {
  return (
    <Card
      sx={{
        minWidth: 345,
        width: '60%',
        height: '150px',
        backgroundColor: '#f2f2f7',
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Container>
        <Avatar
          src={avatar}
          sx={{
            width: '70px',
            height: '70px',
            margin: '20px',
            border: 'solid',
            borderColor: 'white',
            borderWidth: '5px',
          }}
          alt="profile"
        />
        <ProfileContent>
          <Typography variant="h5" sx={{ paddingBottom: '5px', fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography>{job}</Typography>
        </ProfileContent>
      </Container>
      <CardContent sx={{ display: 'flex' }}>
        <a href={process.env.REACT_APP_PROFILE_URL}>
          <Avatar
            src={resume}
            sx={{ width: '50px', height: '50px', margin: '10px' }}
            alt="resume"
          />
        </a>
        <a href={process.env.REACT_APP_GITHUB_URL}>
          <Avatar
            src={github}
            sx={{ width: '50px', height: '50px', margin: '10px' }}
            alt="github"
          />
        </a>
      </CardContent>
    </Card>
  );
};

export default Profile;
