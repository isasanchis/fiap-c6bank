import React from 'react'
import Balance from '../Balance'
import Menu from '../Menu'
import Profile from '../Profile'
import styled from '@emotion/styled'

const SideBarContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  display: flex;
  flex-direction: column;
  background-color: #242424;
  color: white;
  width: 25%;
  justify-content: space-around;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`

export default function SideBar() {
  return (
    <>
      <SideBarContainer>
        <Profile></Profile>
        <Balance></Balance>
        <Menu></Menu>
      </SideBarContainer>
    </>
  )
}
