import styled from "@emotion/styled";
import React from "react";
import SideBar from "../components/SideBar";
import ExtractContent from "../components/ExtractContent";

const ExtractContainer = styled.div`
  position: absolute;
  top: 0;
  left: 360px;
`

export default function ExtractPage() {
  return(
    <ExtractContainer>
      <SideBar />
      <ExtractContent />
    </ExtractContainer>
  )
}