import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
