import React from "react";
import styled from "styled-components";
import Img1 from "assets/images/Tbc.png";
import Img2 from "assets/images/Facebook.png";
import Img3 from "assets/images/Youtube.png";
import { under, over } from "utils/breakPoints";

const Footer = () => {
  return (
    <Container>
      <CompanyConatiner>
        <img src={Img1} alt="" />
        <ResponsiveContainer>
          <ResponsiveButton>მოგვწერეთ</ResponsiveButton>
        </ResponsiveContainer>
        <P>© 2023 ყველა უფლება დაცულია</P>
        <Link>წესები და პირობები</Link>
      </CompanyConatiner>
      <MediaContainer>
        <MediaLinks>
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
        </MediaLinks>
        <Button>მოგვწერეთ</Button>
      </MediaContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2b2b2b;
  padding: 50px 150px;
  display: flex;
  justify-content: space-between;
  ${under.med`
    padding:50px 15px;
  `}
`;
const CompanyConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;
const P = styled.p`
  font-size: 15px;
  color: #f4f4f4;
  margin: 0px;
`;
const Link = styled.p`
  font-size: 15px;
  color: #f4f4f4;
  margin: 0px;
  cursor: pointer;
  &:hover {
    color: #d9d9d9;
    transition: 0.3s;
  }
`;
const ResponsiveContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${over.med`
    display:none;
  `}
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  ${under.med`
    display:;
  `}
`;
const MediaLinks = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  ${under.med`
    margin-top:55px
  `}
`;
const Button = styled.button`
  background-color: #00aef3;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 17px;
  padding: 10px 25px;
  cursor: pointer;
  &:hover {
    background-color: #e3e1e1;
    color: #454545;
    transition: 0.3s;
  }
  ${under.med`
    display:none;
  `}
`;
const ResponsiveButton = styled.button`
  background-color: #00aef3;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 17px;
  padding: 10px 25px;
  cursor: pointer;
  &:hover {
    background-color: #e3e1e1;
    color: #454545;
    transition: 0.3s;
  }
  ${over.med`
  display:none;
`}
`;

export default Footer;
