import { useState } from "react";
import "./Register-user.css";
import Api from "../services/Api";
import Button from "./Button";

const RegisterUser = () => {
  const [avatar, setAvatar] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setAvatar(img);
  };

  const handleDataUpload = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("avatar", avatar.data);
    formData.append("email", email);
    formData.append("password", password);

    Api.post("usuario/cadastrar", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    console.log(formData);
  };

  return (
    <div>
      {avatar.preview && <img src={avatar.preview} width="100" height="100" />}
      <hr></hr>
      <form className="user-form" onSubmit={handleDataUpload}>
        <input
          type="file"
          placeholder="Avatar"
          name="avatar"
          className="avatar"
          onChange={handleFileChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          className="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button />
      </form>
    </div>
  );
};

export default RegisterUser;
