import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    // setFormValues({...formValues, [name]: value });
  };
  const resetForm = (initialValue) => {
    setFormValues(initialValue);
  };


//------------------------------------------//
//* VALIDACIONES
//------------------------------------------//
  const emptyFieldsValidation = (formValues) => {
    for (const key in formValues) {
      if (formValues[key] === "") {
        return false;
      }
    }
    return true;
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
    return passwordRegex.test(password);
  };


  return { formValues, onInputChange, resetForm, emptyFieldsValidation, isValidEmail, isStrongPassword };
};

export default useForm;
