import React, { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link';

const BalanceContainer = styled.div`
  padding-left: 10%;
  width: 100%;
  color:#f8f8f8;
  background-color: #242424;
  & > div > strong {
    font-size: 1.2rem;
    margin-right: 10%;
  }
`;

export default function Balance() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <BalanceContainer>
      <p>Saldo</p>
      <div>
        {show ?
          <strong>{new Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format(190000)}</strong>
          :
          <strong>R$ ******,**</strong>
        }
        <button onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
      </div>
    </BalanceContainer>
  )
}
