import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  font-size: ${(props) => props.fs || "2.9rem"};
  color: #393e46;
  text-transform: uppercase;
`;

export { H1 };
