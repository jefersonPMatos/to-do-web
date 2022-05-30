import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from "sweetalert2-react-content";

import Api from "../../services/Api";

import { Container, Form, P, Input, LabelStyle } from "./styles";
import { Button } from "../../components/Button";
import { FileInput } from "../../components/FileInput";
import { Avatar } from "../../components/Avatar";
import { Title } from "../../components/Title";
import { Box } from "../../components/Box";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Por favor, informe um email válido!")
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

  const MySwal = withReactContent(Swal);

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
  };

  const handleDataUpload = (data) => {
    const formData = new FormData();

    formData.append("avatar", avatar.data);
    formData.append("email", data.email);
    formData.append("password", data.password);

    Api.post("usuario/cadastrar", formData)
      .then((res) => {
        MySwal.fire({
          icon: "success",
          title: "Cadastro efetuado com sucesso!",
        });
      })
      .catch((error) =>
        MySwal.fire({
          icon: "error",
          title: error.response.data.message,
        })
      );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleDataUpload)}>
        <Title>Cadastre-se</Title>
        {avatar.preview ? <Avatar src={avatar.preview} /> : <Avatar />}
        <Box h="0.5rem" />
        <FileInput type="file" onChange={handleFileChange}>
          Escolha uma foto
        </FileInput>
        <Box h="40px" />
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
        <Box h="20px" />
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
        <LabelStyle>
          Confirme sua senha
          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            {...register("confirmPassword")}
          />
        </LabelStyle>
        <Box h="15px" />
        <P>{errors.confirmPassword?.message}</P>
        <Box h="20px" />
        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
}
