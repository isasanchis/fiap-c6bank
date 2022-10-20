import React from 'react'
import Balance from '../Balance'
import Menu from '../Menu'
import Profile from '../Profile'
import styled from '@emotion/styled'

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-around;
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
