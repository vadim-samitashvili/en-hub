import * as yup from "yup";

export const LoginFormSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters, one number, one capital letter and one special characters ['!', '@', '$', '%', '&', '*']"
    )
    .required("Password is required"),
});
