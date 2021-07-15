export function inputError(errors, touched, value) {
  return errors[value] && touched[value];
}

export function errorMessage(errors, touched, value) {
  return errors[value] && touched[value] && errors[value];
}
