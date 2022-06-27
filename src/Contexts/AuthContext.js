import React, { createContext, useState } from "react";
import Cookies from "universal-cookie";
import dayjs from "dayjs";
import Api from "../services/Api";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const AuthContext = createContext({});

const cookies = new Cookies();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const MySwal = withReactContent(Swal);

  const Login = async (data) => {
    await Api.post("usuario/login", data)
      .then((res) => {
        const token = res.data.token;

        if (token) {
          cookies.set("token", token, { maxAge: dayjs().add(60, "minutes") });
          Api.defaults.headers["authorization"] = token;
          setUser(res.data.user);
          setAuthenticated(true);
        } else {
          MySwal.fire({
            icon: "error",
            title: "Algo deu errado 😥",
          });
        }
      })
      .catch((error) =>
        MySwal.fire({
          icon: "error",
          title: error.response.data.message,
        })
      );
  };

  return (
    <AuthContext.Provider
      value={{ Login, authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
