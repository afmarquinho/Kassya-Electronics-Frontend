import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import AppRouter from "./router/AppRouter";
import { Global, css } from "@emotion/react";
import { variablesEstilos } from "./variablesEstilos";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;

const globalStyles = css`
  :root {
    --primary-color: ${variablesEstilos.primary};
    --secondary-color: ${variablesEstilos.secondary};
    --background-color: ${variablesEstilos.background};
    --primary-font: ${variablesEstilos.fuentePrincipal};
    --logo-font: ${variablesEstilos.fuenteLogo};
  }

  body {
    font-family: var(--primary-font);
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    font-family: var(--primary-font);
    font-size: 1.5rem;
    line-height: 1.8;
    color: var(--primary-color);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  h1,
  h2,
  h3 {
    font-weight: 900;
    margin: 0;
  }
  h1 {
    font-size: 4rem;
    font-family: var(--logo-font);
    color: var(--secondary-color);
    font-weight: bold;
  }

  h2 {
    font-size: 4.6rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4{
    font-size: 2.5rem;
  }

  img {
    max-width: 100%;
    display: block;
  }
  div {
    margin: 0;
    padding: 0;
  }
`;
