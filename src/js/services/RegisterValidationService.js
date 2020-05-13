export const validateSymbols = (password) => {
  return validation(password, (password) => {
    return password.length >= 8;
  });
};
export const validateNumber = (password) => {
  return validation(password, (password) => {
    return password.toString().search(/\d/) === -1;
  });
};
export const validateLetter = (password) => {
  return validation(password, (password) => {
    return password.toString().search(/[A-ZА-Я]/) === -1;
  });
};

const validation = (password, predicate) => {
  let value = false;

  if (predicate(password)) {
    value = true;
  } else {
    value = false;
  }
  return value;
};
