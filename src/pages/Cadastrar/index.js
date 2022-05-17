import { RegisterUser } from "../../components/FormRegister";
import { Container } from "./styles"
import { Title } from "../../components/Title";

export function Cadastrar() {
  return (
    <div>
      <div>
      <Title>Cadastre-se</Title>
      </div>
      <div>
        <RegisterUser />
      </div>
    </div>
  );
}

