import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Api from "../../services/Api";

import { Container, Div, Form, P } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { FileInput } from "../FileInput";
import { Avatar } from "../Avatar";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Informe um email válido")
      .required("Por favor, informe um email válido!"),
    password: yup
      .string()
      .min(6, "A senha precisa ter no mínimo 6 dígitos!")
      .required("Por favor, crie uma senha!"),
    confirmPassword: yup
      .string()
      .required("Você precisa confirmar a senha!")
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais!"),
  })
  .required();

export function RegisterUser() {
  const [avatar, setAvatar] = useState([""]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setAvatar(img);
    console.log(img)
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
        {avatar.preview ? (
          <Avatar src={avatar.preview} />
        ) : (
          <Avatar />
        )}
          <FileInput
            type="file"
            placeholder="Avatar"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
          >Escolha uma foto</FileInput>

          <Input
            type="text"
            placeholder="Digite seu email"
            name="email"
            {...register("email")}
          >Email</Input>
          <P>{errors.email?.message}</P>

          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            {...register("password")}
          >Senha</Input>
          <P>{errors.Password?.message}</P>

          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="passwordConfirm"
            {...register("confirmPassword")}
          >Confirme sua senha</Input>
          <P>{errors.confirmPassword?.message}</P>

          <Button>Cadastrar</Button>
        </Form>
      </Div>
    </Container>
  );
}
