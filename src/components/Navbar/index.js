import { Nav, StyledLink } from "./styles";

import { Box } from "../Box";
import { Button } from "../Button";

export default function Navbar() {
  return (
    <Nav>
      <StyledLink to="/Login">
        <Button>Login</Button>
      </StyledLink>

      <Box w="15px" />

      <StyledLink to="/Cadastrar">
        <Button>Cadastrar</Button>
      </StyledLink>
    </Nav>
  );
}
