import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link';

const BalanceContainer = styled.div`
  height: 18%;
  margin: 30px 0 0 20px;
  color: #767676;
  > div {
    gap: 10px;
    display: flex;
    color: #fff;
  }
`;

export default function Balance() {
  return (
    <BalanceContainer>
      <p>Saldo</p>
      <div>
        <span>R$
        <strong>190.000,00</strong>
        </span>
        <Link href="#">
          <a>MOSTRAR</a>
        </Link>
      </div>
    </BalanceContainer>
  )
}
