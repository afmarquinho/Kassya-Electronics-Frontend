import { Link, useParams } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";

const ConfirmAccountPage = () => {
  const [mensaje, setMensaje] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const { token } = useParams();
  const accountConfirmation = async () => {
    try {
      const url = `http://localhost:4000/api/user/account-confirmation/${token}`;
      const { data } = await axios.get(url);
      setMensaje({ msg: data.msg, success: true });
      setConfirmed(true);
    } catch (error) {
      setConfirmed(false);
      setMensaje({ msg: error.response.data.msg, error: true });
    }
  };
  useEffect(() => {
    accountConfirmation();
  }, []);

  return (
    <AuthLayout>
      <>
        <H2 className="text-center">Confirmación de cuenta</H2>
        {mensaje.success ? (
          <>
            <H4 className="text-center">{mensaje.msg}</H4>
            <p>
              Ya puedes{" "}
              <StyledLink to="/auth/login" className="inicia-sesion-link">
                Iniciar Sesión
              </StyledLink>
            </p>
          </>
        ) : (
          <TokenNoValido>{mensaje.msg}</TokenNoValido>
        )}
      </>
    </AuthLayout>
  );
};

export default ConfirmAccountPage;
const H2 = styled.h2`
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 4.6rem;
  }
`;
const H4 = styled.h4`
  span {
    font-weight: bold;
    color: #9dc5f7;
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;
const TokenNoValido = styled.p`
color: red;
`