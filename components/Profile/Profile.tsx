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
  height: 20%;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  h2, h3 {
    margin: 2px;
  }
  h2 {
    font-size: 1em;
  }
  h3 {
    font-size: 0.8em;
    color: #767676;
  }
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar alt="Isabella Sanchis" src="https://avatars.githubusercontent.com/u/43426180?v=4" sx={{ width: 50, height: 50}} />
        <h2>Isabella Sanchis</h2>
        <h3>Software Engineer</h3>
      </AvatarContainer>
    </ProfileContainer>
  )
}
