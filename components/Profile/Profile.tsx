import React from 'react'
import styled from '@emotion/styled'
import { Avatar } from '@mui/material'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
  width: 100%;
  > div {
    margin: 0;
  }
  h2, h3 {
    margin: 0;
    font-weight: 500;
  }
  h2 {
    margin-top: 5%;
  }
  h3 {
    font-size: 1em;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar alt="Isabella Sanchis" src="https://avatars.githubusercontent.com/u/43426180?v=4" sx={{ width: 70, height: 70}} />
        <h2>Isabella Sanchis</h2>
        <h3>Software Engineer</h3>
      </AvatarContainer>
    </ProfileContainer>
  )
}
