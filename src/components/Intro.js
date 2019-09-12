import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import ScrollDownIcon from "./styled/ScrollDownIcon";
import { colors, typography, getRems } from "../styles";
import introImage from "../images/intro.jpg";

const Background = styled.div`
  background-attachment: scroll;
  background-image: url('${({ url }) => url}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%:
`;

const Name = styled.h1`
  color: ${colors.white};
  font-family: ${typography.serif};
  font-size: ${getRems(66)};
  line-height: 0.95;
  text-shadow: -1px 0px 1px ${colors.lightGray};
`;

const Dates = styled.span`
  color: ${colors.white};
  font-family: ${typography.sansSerif};
  font-size: ${getRems(33)};
  text-shadow: -1px 0px 1px ${colors.lightGray};
`;

const Intro = () => {
  return (
    <Background url={introImage}>
      <Row className="h-100 no-gutters">
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <header className="text-center">
            <Name>Blair Brooks</Name>
            <Dates>1953 - 2019</Dates>
          </header>
          <ScrollDownIcon
            scrollToArgs={{
              selector: "#memorial"
            }}
          />
        </Col>
      </Row>
    </Background>
  );
};

export default Intro;
