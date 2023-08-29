import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Alerta from "../../alerta/Alerta";
import styled from "@emotion/styled";
import { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [mensaje, setMensaje] = useState({});
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/forgot-password",
        { email }
      );
      setMensaje({ success: true, msg: data.msg });
    } catch (error) {
      setMensaje({error: true, msg: error.response.data.msg});
    }
  };
  return (
    <AuthLayout>
      <Form onSubmit={onSubmit}>
        <h2 className="text-center">Restablecer Contraseña</h2>
        {mensaje.msg && <Alerta mensaje={mensaje} />}
        <Div className="input-group d-flex-column">
          <label htmlFor="email">Correo</label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Div>
        <Button type="submit" value="Enviar Correo" className="w-100" />
        <p>
          ¿Ya tienes cuenta?{" "}
          <Link to="/auth/login" className="inicia-sesion-link">
            Inicia Sesión
          </Link>
        </p>
        <p>
          ¿No tienes cuenta aún?{" "}
          <Link to="/auth/register" className="register-link">
            Regístrate
          </Link>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
const Form = styled.form`
  width: 25rem;
  @media (min-width: 768px) {
    width: 30rem;
  }
  h2 {
    font-size: 3rem;
    @media (min-width: 768px) {
      font-size: 4.6rem;
    }
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    .inicia-sesion-link,
    .register-link {
      color: white;
    }
  }
`;
const Div = styled.div`
  margin-bottom: 1.5rem;
`;
const Input = styled.input`
  height: 3.5rem;
  outline: none;
  border: none;
  border-radius: 0.5rem !important;
`;
const Button = styled.input`
  height: 3.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #383869;
  color: #fcf7f7;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: #6666ad;
  }
`;
