import { Container, Header, TextoDestaque, Card, StyledLink } from "./styles";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";

import Background from "../../assets/images/image-background.png";

export function Home() {
  return (
    <Container>
      <Header>
        <Box w="800px" />
        <Button>
          <StyledLink to="/login">login</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/Cadastrar">Cadastre-se</StyledLink>
        </Button>
      </Header>
      <Card>
        <TextoDestaque>
          <Title>Você no controle da sua produtividade!</Title>
        </TextoDestaque>
        <div>
          <img width={500} src={Background} alt="destaque" />
        </div>
      </Card>
    </Container>
  );
}
