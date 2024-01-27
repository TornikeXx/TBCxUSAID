import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { under, over } from "../../utils/breakPoints";
import Img1 from "../../assets/images/TbcLogo.png";

const Navbar = () => {
  return (
    <>
      <Navigation>
        <Img src={Img1} alt="" />
        <Links>
          <P>მთავარი</P>
          <P>TBC IT</P>
          <P>TBC x USAID</P>
          <P>რისკები</P>
        </Links>
      </Navigation>
      <Burger />
    </>
  );
};

const Links = styled.nav`
  display: flex;
  gap: 50px;
  ${under.med`
    display:none;
    overflow:hidden;
  `}
`;
const Img = styled.img`
  width: 200px;
  margin-left: 10px;
  cursor: pointer;
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  height: 65px;
  background-color: #1a1e1f;
  opacity: 0.9;
  ${over.med`
    position:sticky;
    top:0;
    padding: 10px 150px;
  `}
`;
const P = styled.p`
  color: #f4f4f4;
  padding: 0px 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #00a3e0;
    transition: 0.3s;
  }
`;

export default Navbar;
