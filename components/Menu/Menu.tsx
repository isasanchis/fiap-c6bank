import styled from '@emotion/styled'
import React from 'react'

const MenuContainer = styled.nav`
  height: fit-content;
  li {
    list-style: none;
    padding: 3%;
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
