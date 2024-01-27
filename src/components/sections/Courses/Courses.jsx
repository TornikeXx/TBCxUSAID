import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Img1 from "assets/images/Image1.png";
import Img2 from "assets/images/Image2.png";
import Img3 from "assets/images/Image3.png";
import Img4 from "assets/images/Image4.png";
import Img5 from "assets/images/Image5.png";
import Img6 from "assets/images/Image6.png";
import Img7 from "assets/images/Image7.png";
import Img8 from "assets/images/Image8.png";
import { under } from "utils/breakPoints";

const Courses = () => {
  return (
    <PageWrapper>
      <Heading>სასწავლო კურსები</Heading>
      <CourseCards>
        <Card>
          <Img src={Img1} alt="" />
          <Description>
            <CourseName>iOS Development</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
        <Card>
          <Img src={Img2} alt="" />
          <Description>
            <CourseName>React</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
        <Card>
          <Img src={Img8} alt="" />
          <Description>
            <CourseName>Intro to Python</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
      </CourseCards>
      <CourseCards>
        <Card>
          <Img src={Img8} alt="" />
          <Description>
            <CourseName>Advanced Python</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
        <Card>
          <Img src={Img3} alt="" />
          <Description>
            <CourseName>Advanced Cybersecurity Course</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
        <Card>
          <Img src={Img4} alt="" />
          <Description>
            <CourseName>ToT - Training of Trainers</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
      </CourseCards>
      <CourseCards>
        <Card>
          <Img src={Img5} alt="" />
          <Description>
            <CourseName>Blockchain</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
        <Card>
          <Img src={Img6} alt="" />
          <Description>
            <CourseName>DevOps</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
        <Card>
          <Img src={Img7} alt="" />
          <Description>
            <CourseName>Information Security</CourseName>
            <Status>რეგისტრაცია დასრულებულია</Status>
            <Button>
              <FontAwesomeIcon icon={faArrowRight} />
              <ButtonText>კურსის დეტალები</ButtonText>
            </Button>
          </Description>
        </Card>
      </CourseCards>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #1a1e1f;
  padding: 50px 150px;
  ${under.med`
  padding:50px 15px;
`}
`;
const Heading = styled.h6`
  font-size: 25px;
  color: #dbdbdb;
  margin: 0px 0px 55px 0px;
`;
const CourseCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  ${under.med`
    flex-direction:column;
    align-items:center;
    gap:30px;
    width:100%;
  `}
`;
const Img = styled.img`
  border-radius: 10px 10px 0px 0px;
  ${under.med`
    width:100%;
  `}
`;
const Card = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  ${under.med`
    flex-grow:1;
    width:100%;
  `}
`;
const CourseName = styled.h6`
  font-size: 18px;
  color: #f4f4f4;
  margin: 0px;
`;
const Status = styled.p`
  font-size: 16px;
  color: #f4f4f4;
  font-weight: 500;
`;
const Description = styled.div`
  padding: 15px;
`;
const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 7px;
  color: #00aeef;
  border: none;
  background-color: #1a1e1f;
  margin-top: 80px;
  padding: 0px;
  ${under.med`
    margin:0px;
  `}

  cursor: pointer;
  &:hover {
    color: #008fef;
    transition: 0.3s;
  }
`;
const ButtonText = styled.p`
  font-size: 17px;
  margin: 0px;
`;

export default Courses;
