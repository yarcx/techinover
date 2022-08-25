import React from "react";
import { CloseEyeIcon } from "../Icon";
import { InputFieldWrapper } from "./InputFieldStyle";

function SelectField({
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
        <select name={name} placeholder={placeholder}>
          <option value="teacher" disabled>
            Choose your role let me see
          </option>
          <option value="teacher">Teacher</option>
          <option value="Students">Students</option>
        </select>
        {icon ? ic || <CloseEyeIcon /> : null}
      </div>
    </InputFieldWrapper>
  );
}

export default SelectField;
