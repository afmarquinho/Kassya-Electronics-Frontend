import styled from "@emotion/styled";

const Alerta = ({ mensaje }) => {
  return (
    <AlertContainer>
      <p
        className={`${
          mensaje.warning ? "warning" : mensaje.success ? "success" : "error"
        }`}
      >
        {mensaje.msg}
      </p>
    </AlertContainer>
  );
};

export default Alerta;

const AlertContainer = styled.div`
  p {
    margin: 0;
    font-size: 1.3rem;
    text-align: center;
    color: white;
  }
  .warning {
    background-color: orange;   
  }
  .error {
    background-color: rgba(255, 0, 0, 0.2);
    border: 1px solid #ff0000;
    color: red;
  

  }
  .success {
    background-color: rgb(4, 0, 255);
  }
`;
