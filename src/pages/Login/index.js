import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../Contexts/AuthContext";
import Api from "../../services/Api"

import { Container, Form, Div, Input, LabelStyle, P } from "./styles";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

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

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { user, setUser, authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogin = async (data) => {
    console.log(data)
    await Api.post("usuario/login", data)
    .then((res) => {
      setAuthenticated(true);
      const token = res.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      Api.defaults.headers.Authorization = token
      setUser(res.data.user)
      console.log(user)

      if(authenticated) {
        navigate("/usuario")
      } else {
        return alert("Email ou senha inválido!")
      }

    })
    .catch((error) => console.log(error));
  
};

  return (
    <Container>
      <Div>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <LabelStyle>
            Email
            <Input
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </LabelStyle>
          <P>{errors.email?.message}</P>

          <LabelStyle>
            Senha
            <Input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </LabelStyle>
          <P>{errors.password?.message}</P>

          <Button type="submit">Entrar</Button>
        </Form>
      </Div>
    </Container>
  );
}
