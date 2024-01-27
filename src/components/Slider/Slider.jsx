import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "assets/svgIcons/ArrowIcon";
import useBreakpoint from 'hooks/useBreakPoint'

export default function Slider({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const screenSize = useBreakpoint(1024);
  const itemRatio = screenSize === 'small' ? 1 : screenSize === 'medium' ? 2 : 3;

  const handleIncrement = () => {
    if (activeSlide >= children.length / itemRatio - 1) {
      setActiveSlide(0);
      return;
    }

    setActiveSlide(activeSlide + 1);
  };

  const handleDecrement = () => {
    if (activeSlide <= 0) {
      setActiveSlide(children.length / itemRatio - 1);
      return;
    }

    setActiveSlide(activeSlide - 1);
  };

  const renderChildren = (children) => {
    let renderData = []
    
    let count = 0
    for(let i = 0; i < children.length; i += itemRatio){
        let items = children.slice(i, i + itemRatio)
        renderData.push((activeSlide) => {
          return <SliderItem key={`slider-${i}`} isActive={i / itemRatio === activeSlide}>{items}</SliderItem>
        })
      } 
      
      return renderData
  }


  const SliderChildren = renderChildren(children)

  return (
    <Container>
      <LeftArrowWrapper onClick={handleDecrement}>
        <ArrowIcon />
      </LeftArrowWrapper>
      <Content>
        {SliderChildren?.map(item => item(activeSlide))}
      </Content>
      <RightArrowWrapper onClick={handleIncrement}>
        <ArrowIcon />
      </RightArrowWrapper>
      <DotsContainer>
        {SliderChildren.map((item, index) => {
          return <Dot onClick={() => setActiveSlide(index)} isActive={activeSlide === index} />;
        })}
      </DotsContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SliderItem = styled.div`
  position: absolute;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: 1.5s;
  display: flex;
  gap: 30px;
`;

const LeftArrowWrapper = styled.div`
  cursor: pointer;
`;

const RightArrowWrapper = styled.div`
  cursor: pointer;
  transform: rotate(180deg);
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 5px;
  bottom: 0px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: #fff;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  border-radius: 100%;
  transition: 0.5s;
  cursor: pointer;
`;
