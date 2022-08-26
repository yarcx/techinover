import React from "react";
import { useForm, useFormContext } from "react-hook-form";

import { CloseEyeIcon } from "../Icon";
import { IInputField } from "../lib/interface";
import { InputFieldWrapper } from "./InputFieldStyle";

function InputField({
  name,
  type,
  placeholder,
  label,
  icon,
  ic = <CloseEyeIcon />,
  border,
  errors,
  register,
}: IInputField) {
  return (
    <InputFieldWrapper icon={icon} border={border} errors={errors[name]}>
      <label htmlFor={name}>{label}</label>
      <div className="inputField">
        <input
          {...register(name, { required: true })}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        {icon ? ic || <CloseEyeIcon /> : null}
      </div>
      {errors[name] && <span className="error">{errors[name]?.message}</span>}
    </InputFieldWrapper>
  );
}

export default InputField;
