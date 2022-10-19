import React from 'react'
import ExtractHeader from '../ExtractHeader'
import ExtractData from '../ExtractData'
import ExtractTotal from '../ExtractTotal'
import styled from '@emotion/styled'
import db from '../utils/db'

const ExtractContentContainer = styled.div`
  margin-left:360px;
`

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
      <ExtractHeader />
      <ExtractTotal />
      <ExtractData db={db} />
      <ExtractTotal />
    </ExtractContentContainer>
  )
}
