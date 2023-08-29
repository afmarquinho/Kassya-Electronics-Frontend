import styled from "@emotion/styled";
import AuthLayout from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import Alerta from "../../alerta/Alerta";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [nameEmail, setNameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState({});
  const [perfil, setPerfil] = useState({});

  //* FUNCIONES
  const validarCorreo = (email) => {
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionRegular.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if ([nameEmail, password].includes("")) {
      return setMensaje({ error: true, msg: "No puede haber campos vacíos" });
    }

    setMensaje({});
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/login",
        { nameEmail, password }
      );
      setPerfil(data);
      localStorage.setItem("token", data.token);
      console.log('sesion iniciada con exito')
      //TODO: NAVIGATE TO HOMEPAGE
    } catch (error) {
      setMensaje({ error: true, msg: error.response.data.msg });
    }
  };
  return (
    <AuthLayout>
      <Form onSubmit={onSubmit}>
        <h2 className="text-center">Inicia Sesión</h2>
        {mensaje.msg && <Alerta mensaje={mensaje} />}
        <Div className="input-group d-flex-column">
          <label htmlFor="nameEmail">Usuario o correo</label>
          <Input
            type="text"
            name="nameEmail"
            value={nameEmail}
            onChange={(e) => setNameEmail(e.target.value)}
          />
        </Div>
        <Div className="input-group d-flex-column">
          <label htmlFor="password">Contraseña</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Div>
        <Button type="submit" value="Iniciar Sesión" className="w-100" />
        <p>
          ¿No tienes cuenta aún?{" "}
          <Link to="/auth/register" className="register-link">
            Regístrate
          </Link>
        </p>
        <p>
          ¿Olvidaste la contraseña?{" "}
          <Link to="/auth/forgot-password" className="restablecer-link">
            Restablece contraseña
          </Link>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;

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
    .register-link,
    .restablecer-link {
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
