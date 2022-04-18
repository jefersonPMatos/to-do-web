import React from "react";
import RegisterUser from "../components/Register-user";
import "./usuario.css"

function Usuario() {
  return (
    <div>
      <div className="register-form">
        <h1 className="register-title">Cadastre-se</h1>
      </div>
      <div>
        <RegisterUser />
      </div>
    </div>
  );
}

export default Usuario;
