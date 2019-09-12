import React from "react";
import styled from "styled-components";
import { Button as ReactstrapButton } from "reactstrap";
import { typography } from "../../styles";

const Tag = styled(ReactstrapButton)`
  font-family: ${typography.sansSerif};
  text-transform: uppercase;
`;

const Button = ({ color = "info", outline, children, ...restProps }) => (
  <Tag color={color} outline={outline} {...restProps}>
    {children}
  </Tag>
);

export default Button;
