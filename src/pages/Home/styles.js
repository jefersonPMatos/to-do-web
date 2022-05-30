import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  height: 30px;
  padding: 2rem;
  gap: 1rem;
`;

const TextoDestaque = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: colum;
  color: #fefefe;
  gap: 0.3rem;
`;

const Card = styled.div`
  display: flex;
  color: #fefefe;
  margin-left: 200px;
  margin-right: 200px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export { Container, Header, TextoDestaque, Card, StyledLink };
