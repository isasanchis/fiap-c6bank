import styled from '@emotion/styled'
import React from 'react'

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 360px;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
      background-color: #242424;
      outline: 1px solid #777;
    }
    &::-webkit-scrollbar {
      width: 6px;
    }
    li {
      list-style: none;
      display: flex;
      line-height: 60px;
      border-left: 4px solid transparent;
      padding-left: 5%;
      &:hover {
        background-color: #616161;
        border-left: 4px solid #ffef0d;
        cursor:pointer;
      }
    }
  }
`

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>Início</li>
        <li>Extrato</li>
        <li>Tranferências</li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  )
}
