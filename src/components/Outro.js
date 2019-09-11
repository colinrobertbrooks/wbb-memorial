import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "reactstrap";
import { colors, typography } from "../styles";

const Wrapper = styled.footer`
  background-color: ${colors.dark};
  padding: 120px 30px;
  text-align: center;
`;

const Donations = styled.p`
  color: ${colors.white};
  margin-top: 30px;

  a {
    color: ${colors.teal};
  }
`;

const Outro = () => (
  <Row className="no-gutters">
    <Col sm={12}>
      <Wrapper>
        <Button
          href="https://www.knightfuneralhomes.com/obituary/blair-brooks"
          outline
          color="info"
          size="lg"
          style={{
            fontFamily: typography.sansSerif,
            textTransform: "uppercase"
          }}
        >
          Obituary
        </Button>
        <Donations>
          In lieu of flowers, please send donations to support{" "}
          <a href="http://www.treekangaroo.org">
            healthcare in Papua New Guinea
          </a>{" "}
          in Blair’s honor.
        </Donations>
      </Wrapper>
    </Col>
  </Row>
);

export default Outro;
