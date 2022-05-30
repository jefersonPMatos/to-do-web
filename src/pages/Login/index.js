import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import { AuthContext } from "../../Contexts/AuthContext";
import Api from "../../services/Api";

import { Container, Form, ActionButton, Input, LabelStyle, P } from "./styles";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Box } from "../../components/Box";

const cookies = new Cookies();

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
  const { Login, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");

    if (token) {
      Api.defaults.headers["authorization"] = token;

      const fetchData = async () => {
        const result = await Api.get("usuario/recovery");
        setUser(result.data.user);
        navigate("/usuario");
      };
      fetchData().catch(console.error);
    } else {
      navigate("/login");
    }
  }, [setUser, navigate]);

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
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Box h="100px" />
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
        <Box h="20px" />
        <ActionButton>
          <Button type="submit">Entrar</Button>
        </ActionButton>
      </Form>
    </Container>
  );
}
