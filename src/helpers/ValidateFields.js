

// Reg expressions
const regExpNombreDueño = /^[A-Za-z\s?]+$/;
const regExpNombreMascota = /^[A-Za-z\s?]+$/;
const regExpHorario =  /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regExpRaza = /^[A-Za-z\-\s?]+$/;
const regExpEmail = /^[A-Za-z\s?]+$/;
const regExpContraseña = /^[A-Za-z\s?]+$/;
const regExpUsuario = /^[A-Za-z\s?]+$/;
const regExpNombreApellido = /^[A-Za-z\s?]+$/;
const regExpFechaNacimiento = /^[A-Za-z\s?]+$/;
const regExpCelular = /^[A-Za-z\s?]+$/;



// Functions to validate
export const validateNombreDueño = (field) => {
  if (
    regExpNombreDueño.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};

export const validateNombreMascota = (field) => {
  if (
    regExpNombreMascota.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };

  export const validateHorario = (field) => {
  if
   (regExpHorario.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};


export const validateRaza = (field) => {
  if (
    regExpRaza.test(field) &&
    field.trim() !== "" &&
    (field === "perro" ||
      field === "gato" ||
      field === "ave" ||
      field === "reptil" ||
      field === "otro")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (field) => {
  console.log(field);
  if (regExpEmail.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateContraseña= (field) => {
  console.log(field);
  if (regExpContraseña.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateUsuario = (field) => {
  if (
    regExpUsuario.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};

export const validateNombreApellido = (field) => {
  if (
    regExpNombreApellido.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};



export const validateFechaNacimiento = (field) => {
  if (
    regExpFechaNacimiento.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};



export const validateCelular = (field) => {
  if (
    regExpCelular.test(field)  && field.trim() !== "" ) {
    
    return true;
 
  } else {

    return false;
    
  }
};


