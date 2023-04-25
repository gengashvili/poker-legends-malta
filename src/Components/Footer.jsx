import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const accordionData = [
  {
    title: "როდის იწყება და რა ფორმატით გაიმართება აქცია",
    content: "Content for Item 1",
  },
  {
    title: "როგორ მივიღო აქციაში მონაწილეობა?",
    content: "Content for Item 2",
  },
  {
    title: "სხვადასვა",
    content: "Content for Item 3",
  },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleSection = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <StyledFooter>
      <Wrapper>
        <Heading>წესები და პირობები</Heading>
        <Accordion>
          {accordionData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <AccordionItem key={item.title}>
                <div onClick={() => toggleSection(index)}>
                  <p>{item.title}</p>
                  <p>
                    {isActive ? (
                      <IoIosArrowUp size={22} />
                    ) : (
                      <IoIosArrowDown size={22} />
                    )}
                  </p>
                </div>
                {isActive && <p className="active-content">{item.content}</p>}
              </AccordionItem>
            );
          })}
        </Accordion>
        <Heading>მსგავსი აქციები</Heading>
      </Wrapper>
      <Slider>
        <SlidItem bg="#0D649B">
          <img src="/assets/aqcia.png" alt="aqciis surati" />
          <div>
            <h6>Get 300% Cashback</h6>
            <p>retrieve 300% bet amount as real money only here</p>
          </div>
        </SlidItem>
        <SlidItem bg="#EF541C">
          <img src="/assets/aqcia2.png" alt="aqciis surati" />
          <div>
            <h6>Get 300% Cashback</h6>
            <p>retrieve 300% bet amount as real money only here</p>
          </div>
        </SlidItem>
        <SlidItem bg="#1A176C">
          <img src="/assets/aqcia3.png" alt="aqciis surati" />
          <div>
            <h6>Win a Jackpot</h6>
            <p>retrieve 300% bet amount as real money only here</p>
          </div>
        </SlidItem>

        <SlidItem bg="#0D649B">
          <img src="/assets/aqcia.png" alt="aqciis surati" />
          <div>
            <h6>Get 300% Cashback</h6>
            <p>retrieve 300% bet amount as real money only here</p>
          </div>
        </SlidItem>
        <SlidItem bg="#EF541C">
          <img src="/assets/aqcia2.png" alt="aqciis surati" />
          <div>
            <h6>Get 300% Cashback</h6>
            <p>retrieve 300% bet amount as real money only here</p>
          </div>
        </SlidItem>
        <SlidItem bg="#1A176C">
          <img src="/assets/aqcia3.png" alt="aqciis surati" />
          <div>
            <h6>Win a Jackpot</h6>
            <p>retrieve 300% bet amount as real money only here</p>
          </div>
        </SlidItem>
      </Slider>
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
  padding: 55px  0;
  color: #ffffff;
`;

const Wrapper = styled.div`
  padding: 0 16px;
`;

const Heading = styled.h4`
  font-size: 16px;
  /* margin-bottom: 22px; */
`;
const Accordion = styled.div`
  font-size: 14px;
  margin: 21px 0 40px 0;
`;
const AccordionItem = styled.div`
  width: 100%;
  margin-top: 10px;
  div {
    min-height: 50px;
    padding: 0 16px;
    background-color: #25292b;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #bbbbbb;
      :first-child {
        width: 70%;
      }
      :last-child {
        cursor: pointer;
      }
      svg {
        fill: #bbbbbb;
      }
    }
  }
  .active-content {
    color: #bbbbbb;
    margin: 10px;
  }
`;

const Slider = styled.div`
  margin: 24px 0 0 16px;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SlidItem = styled.div`
  margin-right: 16px;
  width: 155px;
  display: inline-block;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  white-space: normal;
  @media(min-width: 1024px){
    width: 233px;
  }
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  div {
    padding: 0 14px 16px;
    h6 {
      font-size: 14px;
      margin-bottom: 6px;
    }
    p {
      font-size: 14px;
    }
  }
`;
