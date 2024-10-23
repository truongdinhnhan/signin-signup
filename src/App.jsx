import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";
import NewPasswordPage from "./pages/newPassword/NewPasswordPage";

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/new-password" element={<NewPasswordPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App