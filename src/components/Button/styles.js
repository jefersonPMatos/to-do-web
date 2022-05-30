import styled from "styled-components";

const Container = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  color: #e1e1e1;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  &:focus::after {
    width: 100%;
    left: 0%;
  }
  &:hover::after {
    width: 100%;
    left: 0%;
  }

  &:after {
    content: "";
    pointer-events: none;
    bottom: -1px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export { Container };
