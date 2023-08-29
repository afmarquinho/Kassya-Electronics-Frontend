import styled from "@emotion/styled";
import AuthLayout from "../layout/AuthLayout";
import { useContext, useState } from "react";
import Alerta from "../../alerta/Alerta";
import { Link } from "react-router-dom";
import { countries } from "../../kassya/helpers/countries";
import useForm from "../../helpers/useForm";
import AuthContext from "../authContext/AuthProvider";
import axios from "axios";
const initialValues = {
  name: "",
  country: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const { sendFormToBackend } = useContext(AuthContext);
  const [mensaje, setMensaje] = useState({});

  const {
    formValues,
    onInputChange,
    resetForm,
    emptyFieldsValidation,
    isValidEmail,
    isStrongPassword,
  } = useForm(initialValues);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!emptyFieldsValidation(formValues)) {
      return setMensaje({ error: true, msg: "No puede haber campos vacíos" });
    }
    if (!isValidEmail(formValues.email)) {
      return setMensaje({ error: true, msg: "Ingrese un correo válido" });
    }
    //TODO: HABILITAR EXPRESION REGULAR DE LA CONTRASEÑA
    //TODO: EXPRESION REGULAR DE LA CONTRASEÑA
    //TODO: RESETAR FORMULARIO
    // if (!isStrongPassword(formValues.password)) {
    //   return setMensaje({
    //     error: true,
    //     msg: "La contraseña debe contener al menos: una mayúscula, una minúscula, un número, un carácter especial y longitud de al menos 8 carateres.",
    //   });
    // }
    if (formValues.password !== formValues.confirmPassword) {
      return setMensaje({ error: true, msg: "Las contraseñas no coinciden" });
    }

    setMensaje({});

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/register",
        {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
          address: {
            country: formValues.country,
          },
          phoneNumber: formValues.phoneNumber,
        }
      );
      setMensaje({ success: true, msg: data.msg });
      resetForm(initialValues);
    } catch (error) {
      setMensaje({ msg: error.response.data.msg, error: true });
    }
  };

  return (
    <AuthLayout>
      <Form onSubmit={onSubmit}>
        <h2 className="text-center">Regístrate</h2>
        {mensaje.msg && <Alerta mensaje={mensaje} />}

        <Div className="input-group d-flex-column">
          <label htmlFor="name">Nombre</label>
          <Input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onInputChange}
          />
        </Div>

        <Div className="input-group d-flex-column">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onInputChange}
          />
        </Div>

        <Div className="input-group d-flex-column">
          <label htmlFor="country">País</label>
          <Select
            name="country"
            id="country"
            value={formValues.country}
            onChange={onInputChange}
          >
            <option value="">--Seleccione--</option>
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.toLowerCase().replace(/ /g, "-")}
              >
                {country}
              </option>
            ))}
          </Select>
        </Div>

        <Div className="input-group d-flex-column">
          <label htmlFor="password">Contraseña</label>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onInputChange}
          />
        </Div>

        <Div className="input-group d-flex-column">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <Input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={onInputChange}
          />
        </Div>

        <Div className="input-group d-flex-column">
          <label htmlFor="phoneNumber">Celular</label>
          <Input
            type="number"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={onInputChange}
          />
        </Div>

        <Button type="submit" value="Registrarse" className="w-100" />
        <p>
          ¿Ya tienes cuenta?{" "}
          <Link to="/auth/login" className="inicia-sesion-link">
            Inicia Sesión
          </Link>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;

const Form = styled.form`
  width: 25rem;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    width: 30rem;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 2.5rem;
    @media (min-width: 992px) {
      font-size: 3rem;
    }
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    .inicia-sesion-link {
      color: white;
    }
  }
`;
const Div = styled.div`
  margin-bottom: 1.5rem;
`;
const Input = styled.input`
  height: 2.8rem;
  outline: none;
  border: none;
  border-radius: 0.5rem !important;
  @media (min-width: 768px) {
    height: 3.5rem;
  }
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
const Select = styled.select`
  height: 2.8rem;
  outline: none;
  border: none;
  border-radius: 0.5rem !important;
  @media (min-width: 768px) {
    height: 3.5rem;
  }
`;
