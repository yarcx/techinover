import React from "react";
import { CloseEyeIcon } from "../Icon";
import { InputFieldWrapper } from "./InputFieldStyle";

function InputField({
  name = "email",
  type = "text",
  placeholder = "Enter your email address",
  label = "Email address",
  icon = true,
}) {
  return (
    <InputFieldWrapper icon={icon}>
      <label htmlFor={name}>{label}</label>
      <div className="inputField">
        <input type={type} name={name} placeholder={placeholder} />
        {icon && <CloseEyeIcon />}
      </div>
    </InputFieldWrapper>
  );
}

export default InputField;
