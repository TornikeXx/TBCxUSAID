import React from "react";
import styled from "styled-components";
import { under } from "../../utils/breakPoints";

const RightNav = ({ open }) => {
  return (
    <Links open={open}>
      <P>მთავარი</P>
      <P>TBC IT</P>
      <P>TBC x USAID</P>
      <P>რისკები</P>
    </Links>
  );
};

const Links = styled.div`
  display: none;
  ${under.med`
   display: flex;
   gap:15px;
   align-items:flex-end;
    flex-flow: column nowrap;
    background-color: #2b2b2b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    overflow:hidden;
`}
`;
const P = styled.p`
  color: #f4f4f4;
  padding: 0px 10px;
  font-size: 16px;
  cursor: pointer;
  padding-right: 25px;
  &:hover {
    color: #00a3e0;
    transition: 0.3s;
  }
`;

export default RightNav;
