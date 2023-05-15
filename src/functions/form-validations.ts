export const required = (value: any, setErrors: (errors: string[]) => void): boolean => {
  if (!value) {
    setErrors(['This field is required']);
    return false;
  }

  setErrors([]);
  return true;
};

export const validateEmail = (email: string, setErrors: (errors: string[]) => void): boolean => {
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

export const validatePassword = (password: string, setErrors: (errors: string[]) => void): boolean => {
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

export const validatePhone = (phone: string, setErrors: (errors: string[]) => void): boolean => {
  if (!phone) {
    setErrors(['The phone is required']);
    return false;
  }

  if (phone.length < 8) {
    setErrors(['Phone number should have at least 8 digits']);
    return false;
  }

  setErrors([]);
  return true;
};

export const validateBirthDate = (date: string, setErrors: (errors: string[]) => void): boolean => {
  if (!date) {
    setErrors(['The birth date is required']);
    return false;
  }

  const birthDate = new Date(date);
  const currentDate = new Date();

  if (birthDate.getTime() > currentDate.getTime()) {
    setErrors(['Birth date cannot be in the future']);
    return false;
  }

  if (birthDate.getFullYear() < currentDate.getFullYear() - 100) {
    setErrors(['Year of birth date should be no more than 100 years ago']);
    return false;
  }

  setErrors([]);
  return true;
};
