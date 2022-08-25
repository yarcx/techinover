import React from "react";
import { CloseEyeIcon } from "../Icon";
import { InputFieldWrapper } from "./InputFieldStyle";

function InputField({
  name = "email",
  type = "text",
  placeholder = "Enter your email address",
  label = "Email address",
  icon = false,
  ic = <CloseEyeIcon />,
  border = false,
}) {
  return (
    <InputFieldWrapper icon={icon} border={border}>
      <label htmlFor={name}>{label}</label>
      <div className="inputField">
        <input type={type} name={name} placeholder={placeholder} />
        {icon ? ic || <CloseEyeIcon /> : null}
      </div>
    </InputFieldWrapper>
  );
}

export default InputField;
