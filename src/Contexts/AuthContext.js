import React, { createContext, useState, useEffect } from "react";

import Api from "../services/Api";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      Api.defaults.headers.Authorization = token;
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = async (data) => {
    await Api.post("usuario/login", data)
      .then((res) => {
        setAuthenticated(true);
        const token = res.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        Api.defaults.headers.Authorization = token
        console.log(res.data.user)

      })
      .catch((error) => console.log(error));
  };

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
