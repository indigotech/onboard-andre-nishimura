export const validateRequired = (value: any) => {
  if (!value) {
    return ['This field is required'];
  }

  return [];
};

export const validateEmail = (email: string) => {
  if (!email) {
    return ['The e-mail field is required'];
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com.br$/i;
  const isFormatValid = emailRegex.test(email);

  if (isFormatValid) {
    return [];
  } else {
    return ['The value has an invalid e-mail format'];
  }
};

export const validatePassword = (password: string) => {
  if (!password) {
    return ['The password is required'];
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

  return errors;
};

export const validatePhone = (phone: string) => {
  if (!phone) {
    return ['The phone is required'];
  }

  if (phone.length < 8) {
    return ['Phone number should have at least 8 digits'];
  }

  return [];
};

export const validateBirthDate = (date: string) => {
  if (!date) {
    return ['The birth date is required'];
  }

  const birthDate = new Date(date);
  const currentDate = new Date();

  if (birthDate.getTime() > currentDate.getTime()) {
    return ['Birth date cannot be in the future'];
  }

  if (birthDate.getFullYear() < currentDate.getFullYear() - 100) {
    return ['Year of birth date should be no more than 100 years ago'];
  }

  return [];
};
