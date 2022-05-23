import { Container, Div, StyledLink, Card, P, Mark } from "./styles";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";
import { CheckSquare } from "phosphor-react";

import Background from "../../assets/images/image-background.png";

export function Home() {
  return (
    <Container>
      <Card>
        <Title>
          <CheckSquare color="#393E46" size={50} />
          To Do!
        </Title>
        <Box w="985px" />
        <Button>
          <StyledLink to="/login">Fazer login</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/Cadastrar">Cadastre-se</StyledLink>
        </Button>
      </Card>
      <Box h="20px" />
      <Card>
        <Div>
          <Box h="100px" />
          <Title fs="4.5rem">
            Você <br /> no controle
            <br /> da sua
          </Title>
          <Title fs="4.5rem">
            <Mark>produtividade!</Mark>
          </Title>
          <P>GERENCIE CADA MOMENTO DO SEU DIA!</P>
        </Div>

        <Div>
          <img src={Background} alt="background" />
        </Div>
      </Card>
    </Container>
  );
}
