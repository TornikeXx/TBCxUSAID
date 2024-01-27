import React from "react";
import styled from "styled-components";
import Img from "assets/images/Team.png";
import { under } from "utils/breakPoints";

const About = () => {
  return (
    <>
      <ImageContainer>
        <Heading>TBC x USAID</Heading>
        <Heading>ტექნოლოგიური განათლებისთვის</Heading>
      </ImageContainer>
      <TextContainer>
        <Text>
          „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
          ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
          ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT მიმართულებით.
          წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა
          და მის პარტნიორ კომპანიებში.
        </Text>
        <Button>გაიგე მეტი</Button>
      </TextContainer>
    </>
  );
};

const ImageContainer = styled.div`
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 150px;
  height: 200px;
  ${under.med`
    padding:50px 15px;
  `}
`;
const Heading = styled.h3`
  color: #f4f4f4;
  font-size: 42px;
  margin: 20px 0px;
  ${under.med`
    margin:0;
  `}
`;
const TextContainer = styled.div`
  background-color: #2b2b2b;
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  ${under.med`
    padding:50px 15px;
  `}
`;
const Text = styled.span`
  font-size: 28px;
  color: #f4f4f4;
  font-weight: 500;
`;
const Button = styled.button`
  border: none;
  background-color: #2b2b2b;
  font-size: 20px;
  color: #00aef3;
  font-weight: bolder;
  padding: 0px;
  cursor: pointer;
  &:hover {
    color: #f4f4f4;
    transition: 0.3s;
  }
`;
export default About;
