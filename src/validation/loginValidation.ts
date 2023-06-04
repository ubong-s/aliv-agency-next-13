import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid email address."),
  password: Yup.string().required("Please enter a password"),
});
