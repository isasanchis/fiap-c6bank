import React from 'react'
import Balance from '../Balance'
import Menu from '../Menu'
import Profile from '../Profile'
import styled from '@emotion/styled'

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  justify-content: space-evenly;
  background-color: #242424;
`

export default function SideBar() {
  return (
    <>
      <SideBarContainer>
        <Profile />
        <Balance />
        <Menu />
      </SideBarContainer>
    </>
  )
}
