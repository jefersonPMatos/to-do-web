import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Contexts/AuthContext";

import { Container, Form, Div, Input, LabelStyle, P } from "./styles";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Box } from "../../components/Box";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Informe um email válido!")
      .required("É preciso informar um email!"),
    password: yup.string().required("Este campo é obrigatório!"),
  })
  .required();

export function Login() {
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(data) {
    await Login(data);
    navigate("/usuario");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container>
      <Div>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Box h="30px" />
          <LabelStyle>
            Email
            <Input
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </LabelStyle>
          <Box h="15px" />
          <P>{errors.email?.message}</P>
          <Box h="30px" />
          <LabelStyle>
            Senha
            <Input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </LabelStyle>
          <Box h="15px" />
          <P>{errors.password?.message}</P>
          <Button type="submit">Entrar</Button>
        </Form>
      </Div>
    </Container>
  );
}
