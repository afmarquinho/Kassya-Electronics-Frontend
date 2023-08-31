import styled from "@emotion/styled";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <DivContainer>
      <Div className="d-flex justify-center">
        <div>
          <h1>
            Kassya
            <svg
              fill="#00bcd4"
              width="40"
              height="40"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" />
            </svg>{" "}
            Hometree
          </h1>
          <Subcontenedor className="d-flex justify-center">
            <Audi>MANSIONES</Audi>
            <Smart>CASITAS</Smart>
            <Oulet>OUTLET</Oulet>
          </Subcontenedor>
        </div>
        <Botones>
          <Link>Inicia sesión</Link>
          <Link>Favoritos</Link>
          <Link>Carrito</Link>
        </Botones>
      </Div>
    </DivContainer>
  );
};

export default Navbar;
// ALTURA DEL NAVBAR : 12 REM

const DivContainer = styled.div`
position: fixed;
width: 100%;
z-index: 1000;
`;

const Div = styled.div`
  height: 10rem;
  padding: 1rem;
  background-color: #ffffff;
  position: relative;
  border-bottom: 2px solid #e0e0e0;
`;
const Audi = styled(Link)`
  border-right: 1px solid #888585;
  padding: 0 1rem;
`;
const Smart = styled(Link)`
  border-right: 1px solid #888585;
  padding: 0 1rem;
`;
const Oulet = styled(Link)`
  padding: 0 1rem;
  color: red;
`;
const Botones = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;
const Subcontenedor = styled.div`
  border-top: 1px solid #888585;
`;
