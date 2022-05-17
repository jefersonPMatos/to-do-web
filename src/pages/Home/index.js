import { Container, Div, StyledLink } from "./styles";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Div>
      <Title>Home</Title>
        <Button>
          <StyledLink to="/login" >
            Login
          </StyledLink>
        </Button>
        <Button>
          <StyledLink to="/Cadastrar" >
            Cadastrar
          </StyledLink>
        </Button>
      </Div>
    </Container>
  );
}
