import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function RedirectByAuth() {
  const isLogged = localStorage.getItem("isLogged") === "true";

  return <Navigate to={isLogged ? "/" : "/login"} replace />;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<RedirectByAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
