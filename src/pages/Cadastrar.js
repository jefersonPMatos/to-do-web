import React from "react";
import FormRegisterUser from "../components/Form-register-user";
import "./cadastrar.css"
import Title from "../components/Title"

function Cadastrar() {
  return (
    <div>
      <div className="register-form">
      <Title text="Cadastre-se" className="register-title"/>
      </div>
      <div>
        <FormRegisterUser />
      </div>
    </div>
  );
}

export default Cadastrar;
