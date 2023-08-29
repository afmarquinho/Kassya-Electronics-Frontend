import styled from "@emotion/styled";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Div className="d-flex justify-center">
      <div>
        <h1>
          Kassya
          <svg
            fill="#ffffff"
            width="40"
            height="40"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" />
          </svg>{" "}
          Electronics
        </h1>
        <Subcontenedor className="d-flex justify-center">
          <Audi>AUDÍFONOS</Audi>
          <Smart>SMART WATCHES</Smart>
          <Oulet>OUTLET</Oulet>
        </Subcontenedor>
      </div>
      <Botones>
        <Link>Inicia sesión</Link>
        <Link>Favoritos</Link>
        <Link>Carrito</Link>
      </Botones>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  background-color: #04050f;
  padding: 1rem;
  position: relative;
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
transform: translateY(-50%)
`
const Subcontenedor = styled.div`
border-top: 1px solid #888585;
`