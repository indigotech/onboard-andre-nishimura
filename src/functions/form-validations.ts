export const validateEmail = (email: string, setErrors: (error: string[]) => void): boolean => {
  if (!email) {
    setErrors(['The e-mail field is required']);
    return false;
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com.br$/i;
  const isFormatValid = emailRegex.test(email);

  if (isFormatValid) {
    setErrors([]);
    return true;
  } else {
    setErrors(['The value has an invalid e-mail format']);
    return false;
  }
};

export const validatePassword = (password: string, setErrors: (error: string[]) => void): boolean => {
  if (!password) {
    setErrors(['The password is required']);
    return false;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z]).{0,}$/;
  const isFormatValid = passwordRegex.test(password);

  const errors: string[] = [];
  if (password.length < 7) {
    errors.push('The password must have a minimun of 7 characters');
  }
  if (!isFormatValid) {
    errors.push('The password must have at least one letter and one digit');
  }

  setErrors(errors);
  return errors.length === 0;
};
