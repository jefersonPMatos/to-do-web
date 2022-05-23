import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const P = styled.p`
  display: flex;
  color: #393e46;
  font-size: 1.7rem;
`;

const Mark = styled.mark`
  display: flex;
  color: #eeeeee;
  background: #95cd41;
  padding: 0.5rem;
  border-radius: 4px;
`;

export { Container, Div, StyledLink, Card, P, Mark };
