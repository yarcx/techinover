import React from "react";

import { ISelectField, IUserType } from "../lib/interface";
import { InputFieldWrapper } from "./InputFieldStyle";

function SelectField({
  name = "userType",
  placeholder,
  label,
  icon,
  border,
  options,
  errors,
  register,
}: ISelectField) {
  return (
    <InputFieldWrapper icon={icon} border={border} errors={errors[name]}>
      <label htmlFor={name}>{label}</label>
      <div className="inputField">
        <select {...register(name)} name={name} placeholder={placeholder}>
          <option defaultValue="" value="">
            Select role
          </option>
          {options.map(({ text, value }: IUserType) => (
            <option key={text} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
      {errors[name] && <span className="error">{errors[name]?.message}</span>}
    </InputFieldWrapper>
  );
}

export default SelectField;
