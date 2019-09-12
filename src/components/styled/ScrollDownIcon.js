import React from "react";
import styled from "styled-components";
import scrollTo from "../../utils/scrollTo";
import { colors } from "../../styles";

const Tag = styled.i`
  bottom: 0;
  color: ${colors.white};
  cursor: pointer;
  padding 25px 50px;
  position: absolute;
  transition: color 0.15s ease-in-out;

  animation: bounce 2s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const ScrollDownIcon = ({ scrollToArgs }) => (
  <Tag
    role="button"
    title="Click to scroll down"
    className="fas fa-chevron-down"
    onClick={() => scrollTo(scrollToArgs)}
  />
);

export default ScrollDownIcon;
