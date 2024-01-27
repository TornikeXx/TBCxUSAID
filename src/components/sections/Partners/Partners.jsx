import React from "react";
import styled from "styled-components";
import Slider from "components/Slider/Slider";
import Img1 from "assets/images/Ufc.png";
import Img2 from "assets/images/USAID.png";
import Img3 from "assets/images/Lising.png";
import Img4 from "assets/images/Space.png";
import Img5 from "assets/images/Spectre.png";
import Img6 from "assets/images/Tegeta.png";
import Img7 from "assets/images/Tnet.png";
import { under } from "utils/breakPoints";

const Partners = () => {
  return (
    <Container>
      <Header>
        <Title>პროექტის პარტნიორები</Title>
      </Header>
      <Content>
        <Slider>
          {/* <SliderItem> */}
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
          {/* </SliderItem>
          <SliderItem> */}
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
          {/* </SliderItem>
          <SliderItem> */}
            <img src={Img1} alt="" />
          {/* </SliderItem> */}
        </Slider>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 363px;
  padding: 34px 50px;
  box-sizing: border-box;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.div`
  margin: 0px 100px;
  background-color: #2b2b2b;
  ${under.med`
    margin:0px
  `}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  color: rgb(244, 244, 244);
  margin-bottom: 35px;
`;
const SliderItem = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
  ${under.med`
    flex-direction:column;
    gap:10px;
    align-items:center;
  `}
`;

export default Partners;
