import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  font-size: ${(props) => props.fs || "2.9rem"};
  color: #fff;
  text-transform: uppercase;
`;

export { H1 };
