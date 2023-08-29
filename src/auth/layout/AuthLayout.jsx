import styled from "@emotion/styled";

const AuthLayout = ({ children }) => {
  return (
    <FondoAuth className="container-fluid d-flex-column justify-content-center align-center">
      <Logo> Kassya Electronics</Logo>
      {children}
    </FondoAuth>
  );
};

export default AuthLayout;

const FondoAuth = styled.div`
  background-color: #04050f;
  width: 100vw;
  height: 100vh;

`;
const Logo = styled.h1`
position: absolute;
top: 2rem;
left: 2rem;
font-size: 2rem;
@media (min-width: 768px) {
  font-size: 3rem;
}


`
