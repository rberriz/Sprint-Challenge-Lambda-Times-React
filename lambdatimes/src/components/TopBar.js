import React from 'react';
import styled from 'styled-components';


const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const ContainerL = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerCent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const ContainerR = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const SpanL = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;`

  const SpanCent = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    margin-right: 0;
  }
`

const SpanR = styled.span`cursor: pointer;`

const TopBar = () => {
  return (
    <TopBarContainer>
    <Container>
      <ContainerL>
        <SpanL>TOPICS</SpanL><SpanL>SEARCH</SpanL>
      </ContainerL>
      <ContainerCent>
        <SpanCent>GENERAL</SpanCent><SpanCent>BROWNBAG</SpanCent><SpanCent>RANDOM</SpanCent><SpanCent>MUSIC</SpanCent><SpanCent>ANNOUNCEMENTS</SpanCent>
      </ContainerCent>
      <ContainerR>
        <SpanR>LOG IN</SpanR>
      </ContainerR>
    </Container>
  </TopBarContainer>
  )
}

export default TopBar;