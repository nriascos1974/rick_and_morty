export default function validate(inputs) {
    //!*Expresion regular para validar formato de Email
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
    //!*Expresion regular para validar formato de Email
    const regexPaswword = /^(?=.*\d).{6,10}$/i;
  
    const errors = {};
  
    if (!regexEmail.test(inputs.username)) {
      errors.username = "Debe ser un correo electrónico";
    }
  
    if (inputs.username.length > 35) {
      errors.username = "Maximo 35 caracteres";
    }
    
    if (!regexPaswword.test(inputs.password)) {
      errors.password =
        "Debe tener al menos un número";
    }
    
    if (inputs.password.length > 10 || inputs.password.length < 6) {
      errors.password =
        "La longitud de estar entre 6 y 10 caracteres";
    }
  
    if (!inputs.username) {
      errors.username = "Este campo es requerido";
    }
  
    if (!inputs.password) {
      errors.password = "Este campo es requerido";
    }
  
    return errors;
  }