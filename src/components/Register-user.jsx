import { useState } from "react";
import "./Register-user.css";
import Api from "../services/Api";
import Button from "./Button";

const RegisterUser = () => {
  const [avatar, setAvatar] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [passwordConfirm, setPasswordConfirm] = useState([""])

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
      <div className="user-avatar-preview">
        {avatar.preview && (
          <img
            className="user-avatar"
            src={avatar.preview}
            width="200"
            height="200"
          />
        )}
      </div>

      <form className="user-form" onSubmit={handleDataUpload}>
        <div className="user-avatar-label">
          <label htmlFor="avatar">Escolha sua melhor foto</label>
          <input
            type="file"
            placeholder="Avatar"
            id="avatar"
            name="avatar"
            className="avatar-input"
            onChange={handleFileChange}
          />
        </div>
        <input
          type="email"
          placeholder="Digite seu email"
          name="email"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          name="password"
          className="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="passwordConfirm"
          placeholder="Confirme sua senha"
          name="passwordConfirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <Button />
      </form>
    </div>
  );
};

export default RegisterUser;
