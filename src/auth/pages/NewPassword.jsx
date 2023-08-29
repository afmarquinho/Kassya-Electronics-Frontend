import styled from "@emotion/styled";
import AuthLayout from "../layout/AuthLayout";
import { useEffect, useState } from "react";
import Alerta from "../../alerta/Alerta";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const NewPassword = () => {
  const [mensaje, setMensaje] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const [tokenValido, setTokenValido] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.get(
          `http://localhost:4000/api/user/forgot-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        setMensaje({ msg: error.response.data.msg, error: true });
      }
    };
    validateToken();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMensaje({
        error: true,
        msg: "Las contraseñas no coinciden",
      });
      return;
    }
    setMensaje({
      success: true,
      msg: "Contraseña cambiada con éxito",
    });
    setPassword("");
    setConfirmPassword("");
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/user/forgot-password/${token}`,
        { password }
      );
      setMensaje({ msg: data.msg, success: true });
    } catch (error) {
      setMensaje({ msg: error.response.data.msg, error: true });
    }
  };
  return (
    <AuthLayout>
      <Form onSubmit={onSubmit}>
        <h2 className="text-center">Nueva Contraseña</h2>
        {mensaje.msg && <Alerta mensaje={mensaje} />}
        {tokenValido && (
          <>
            <Div className="input-group d-flex-column">
              <label htmlFor="password">Nueva Contraseña</label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Div>
            <Div className="input-group d-flex-column">
              <label htmlFor="confirmPassword">Confirma Contraseña</label>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Div>
            <Button
              type="submit"
              value="Cambiar Contraseña"
              className="w-100"
            />
          </>
        )}
        {mensaje.success &&
          <p>
          Ya puedes{" "}
          <StyledLink to="/auth/login" className="inicia-sesion-link">
            Iniciar Sesión
          </StyledLink>
        </p>}
      </Form>
    </AuthLayout>
  );
};

export default NewPassword;
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
const StyledLink = styled(Link)`
  color: white;
`;
