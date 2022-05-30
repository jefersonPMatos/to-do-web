import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  font-size: ${(props) => props.fs || "60px"};
  font-weight: ${(props) => props.bo || "bold"};
  color: #fefefe;
`;

export { H1 };
