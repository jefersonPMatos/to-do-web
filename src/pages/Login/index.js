import React, { createContext, useContext } from "react";

import { Context } from "../../Contexts/AuthContext";

import { Container, Form, Div } from "./styles";

import { useForm } from "react-hook-form";
import Api from "../../services/Api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function Login() {
  const { register, handleSubmit } = useForm();

  const { authenticated, handleLogin } = useContext(Context);

  return (
    <Container>
      <Div>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input
            type="text"
            placeholder="Digite seu email"
            name="password"
            {...register("email")}
          >
            Email
          </Input>

          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            {...register("password")}
          >
            Senha
          </Input>
        </Form>
        <Button>Entrar</Button>
      </Div>
    </Container>
  );
}
