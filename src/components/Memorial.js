import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Button from "./styled/Button";
import { colors, typography } from "../styles";
import parkingImage from "../images/parking.png";

const Wrapper = styled.main`
  padding: 60px 30px;
  text-align: center;
`;

const Title = styled.h2`
  color: ${colors.teal};
  font-family: ${typography.serif};
`;

const Subtitle = styled.h3`
  color: ${colors.dark};
  font-family: ${typography.serif};
  margin-top: 20px;
`;

const Memorial = () => (
  <Row id="memorial" className="no-gutters">
    <Col sm={12} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
      <Wrapper>
        <Title>Memorial Service</Title>
        <p>
          A celebration of Blair‘s life will take place on{" "}
          <b>Sunday, September 22 at 2 PM</b> at the Hanover Crew Boathouse at
          Fullington Farm. In keeping with Quaker tradition, people are invited
          to share their memories of Blair following the program. The
          celebration will be held in a tent, followed by refreshments inside
          the boathouse.
        </p>
        <Subtitle>Parking</Subtitle>
        <p>
          The{" "}
          <a href="https://goo.gl/maps/3AvmTXyPkWyrCcVN6">
            Hanover Crew Boathouse
          </a>{" "}
          is located on Route 10 North just south of Wilson’s Landing. There is
          limited parking at the boathouse, which will be reserved for people
          who are unable to use the shuttle. Shuttles will run from 1 PM to 6 PM
          from the following locations:
        </p>
        <Row>
          <Col sm={12} md={6}>
            <p className="lead">Kendall Riverfront Park</p>
            <Button
              href="https://goo.gl/maps/HXXy64qKdFgbuPN3A"
              className="mb-3"
            >
              Directions
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <p className="lead">Richmond Middle School</p>
            <Button
              href="https://goo.gl/maps/TLfeynkXfbDC3cDX9"
              className="mb-3"
            >
              Directions
            </Button>
          </Col>
        </Row>
        <p>
          You're welcome to drop people off at the boathouse and then park in
          one of the designated lots. If necessary, there is additional parking
          at the Garapay lot off of the first traffic circle before you get to
          the Richmond Middle School.
        </p>
        <img src={parkingImage} alt="Parking map" className="img-thumbnail" />
      </Wrapper>
    </Col>
  </Row>
);

export default Memorial;
