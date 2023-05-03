const validateField = (name, value, formData) => {
  // field name + field value + object
    switch (name) {
      case "name":
        if (value.length === 0) {
          return "Name is required";
        }
        if (value.length < 3) {
          return "Name Should be Atleast 3 characters Long";
        }
        return "";
      case "email":
        if (!value) {
          return "Email is required";
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        return "";
      case "password":
        if (!value) {
          return "Password is required";
        }
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return "";
      case "confirmPassword":
        if (!value) {
          return "Confirm Password is required";
        }
        if (value !== formData.password) {
          return "Passwords do not match";
        }
        return "";
        
      case "gender":
        if (!value) {
          return "Gender is required";
        }
        return "";
      default:
        return "";
    }
  };
export default validateField;
