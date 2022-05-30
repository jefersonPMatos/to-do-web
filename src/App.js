import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cadastrar } from "./pages/Cadastrar";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { User } from "./pages/User";
import { Theme } from "./styles/theme";
import { Reset } from "./styles/reset";

import { AuthProvider } from "./Contexts/AuthContext";
import { ProtectedRoutes } from "./middleware/ProtectedRoutes";

export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/usuario" element={<User />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      <Reset />
      <Theme />
    </AuthProvider>
  );
}
