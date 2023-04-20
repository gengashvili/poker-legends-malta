import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleSection = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

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
  return (
    <footer>
      <Accordion>
        {accordionData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <AccordionItem>
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
    </footer>
  );
}

const Accordion = styled.div`
  padding: 0 16px;
  font-size: 14px;
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
    margin: 10px;
  }
`;
