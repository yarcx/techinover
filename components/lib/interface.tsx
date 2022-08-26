import { MouseEventHandler } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export interface IAuthButton {
  loading?: boolean;
}

export type IconProps = {
  size?: number;
  color?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  className?: string;
};

export interface IUserType {
  text: string;
  value: "student" | "teacher";
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}

export interface ISignUpInterface extends ILoginFormInputs {
  fullName: string;
  userType: "student" | "teacher";
  errors: FieldErrorsImpl<{
    fullName: string;
    userType: NonNullable<"student" | "teacher">;
    email: string;
    password: number;
  }>;
}

export interface IUserDetailsRes {
  _id: string;
  email: string;
  fullName: string;
  userType: string;
}

export interface IInputField {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  icon?: boolean | undefined;
  ic?: JSX.Element | undefined;
  border?: boolean | undefined;
  errors: any;
  register: any;
}

export interface ISelectField extends Omit<IInputField, "type"> {
  options: IUserType[];
}
