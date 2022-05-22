import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import dayjs from "dayjs";
import Api from "../services/Api";

export const AuthContext = createContext({});

const cookies = new Cookies();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = cookies.get("token");

    if (token) {
      Api.defaults.headers["authorization"] = token;

      const fetchData = async () => {
        const result = await Api.get("usuario/recovery");
        setUser(result.data.user);
        console.log(result.data.user);
      };

      fetchData().catch(console.error);
    }
  }, []);

  const Login = async (data) => {
    await Api.post("usuario/login", data)
      .then((res) => {
        const token = res.data.token;

        if (token) {
          cookies.set("token", token, { maxAge: dayjs().add(7, "day") });
          Api.defaults.headers["authorization"] = token;
          setUser(res.data.user);
          setAuthenticated(true);
        } else {
          alert("Usuário ou senha inválido");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <AuthContext.Provider
      value={{ Login, authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
