import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("The Email Field is required"),
    password: yup
      .string()
      .required("The Password Field is required")
      .min(5, "Your Password is too short - minimum length should be 5 characters"),
  })
  .required();

export const signUpSchema = yup
  .object({
    email: yup.string().email().required("The Email Field is required"),
    password: yup
      .string()
      .required("The Password Field is required")
      .min(5, "Your Password is too short - minimum length should be 5 characters"),
    fullName: yup.string().required("Full Name Field is required"),
    userType: yup.string().required("User Type Field is required"),
  })
  .required();
