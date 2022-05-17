import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Div = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px rgba(200, 200, 200, 0.4);
  max-width: 20rem;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 10rem ;
`;

const StyledLink = styled(Link)`
color: #fff;
text-decoration: none ;
`

export { Container, Div, StyledLink }