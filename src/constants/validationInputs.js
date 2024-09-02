export const validateName = (value) => {
      if (!value) return "Name is required";
      if (value.length < 3) return "at least 5 characters ";
      return "";
};

export const validateEmail = (value) => {
      if (!value) return "Email is required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
            return "Invalid email address";
      return "";
};

export const validateTelephone = (value) => {
      if (!value) return "Telephone is required";
      if (!/^09\d{9}$/.test(value)) return "Invalid telephone number ";
      return "";
};

export const validateInput = (name, value) => {
      switch (name) {
            case "name":
                  return validateName(value);
            case "lastName":
                  return validateName(value);
            case "email":
                  return validateEmail(value);
            case "telephone":
                  return validateTelephone(value);
            default:
                  return "";
      }
};