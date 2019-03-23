import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  max-width: 1280px;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Heading = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Date = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;

  ${props =>
    props.i === "date"
      ? `margin-left: 50px;
    flex: 1;`
      : null}

  ${props =>
    props.i === "temp"
      ? `text-align: right;
     margin-right: 50px;
     flex: 1;`
      : null}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Date i="date">SMARCH 32, 2018</Date>
      <Heading>Lambda Times</Heading>
      <Date i="temp">98°</Date>
    </HeaderContainer>
  );
};

export default Header;
