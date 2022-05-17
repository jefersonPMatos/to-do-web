import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

import Api from "../../services/Api";

import { Container, Div, Form, P } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FileInput } from "../../components/FileInput";
import { Avatar } from "../../components/Avatar";
import { Title } from "../../components/Title";

const schema = yup
  .object({
    email: yup
      .string()
      .email()
      .required("Por favor, informe um email válido!"),
    password: yup
      .string()
      .min(6, "A senha precisa ter pelo menos 6 dígitos!")
      .required("Este campo é obrigatório!"),
    confirmPassword: yup
      .string()
      .required("Este campo é obrigatório!")
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais!"),
  })
  .required();

export function Cadastrar() {
  const [avatar, setAvatar] = useState([""]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setAvatar(img);
  };

  const handleDataUpload = (data) => {
    const formData = new FormData();

    formData.append("avatar", avatar.data);
    formData.append("email", data.email);
    formData.append("password", data.password);

    Api.post("usuario/cadastrar", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Div>
        <Form onSubmit={handleSubmit(handleDataUpload)}>
          <Title>Cadastre-se</Title>
          {avatar.preview ? <Avatar src={avatar.preview} /> : <Avatar />}
          <FileInput
            type="file"
            onChange={handleFileChange}
          >
            Escolha uma foto
          </FileInput>

          <Input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          >
            Email
          </Input>
          <P>{errors.email?.message}</P>

          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          >
            Senha
          </Input>
          <P>{errors.Password?.message}</P>

          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            {...register("confirmPassword")}
          >
            Confirme sua senha
          </Input>
          <P>{errors.confirmPassword?.message}</P>

          <Button>Cadastrar</Button>
        </Form>
      </Div>
    </Container>
  );
}
