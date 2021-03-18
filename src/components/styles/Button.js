import styled from "styled-components"
import { Link } from "gatsby"
import { styleVariables } from "./variables"

const { buttonColor } = styleVariables

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? buttonColor : "#7C8183")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? ".4rem" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#fbd1c2" : "#7C8183")};
    transform: translateY(-2px);
    color: #000;
  }
`
