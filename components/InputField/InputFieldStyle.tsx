import styled from "styled-components";
import { ISignUpInterface } from "../lib/interface";

interface InputFieldWrapperProps {
  icon?: boolean;
  border?: boolean;
  errors?: ISignUpInterface;
}

const InputFieldWrapper = styled.div<InputFieldWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 0.6rem;
  align-items: start;
  margin: 0.6rem auto 1rem auto;

  & > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #667085;
  }
  .inputField {
    width: 100%;
    height: 52px;
    background: ${(props) => (props.border ? "#ffffff" : "#f3f4f5")};
    border: ${(props) => (props.errors ? "1px solid red" : "1px solid #eaeced")};
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    padding-right: 1rem;
    & > input,
    > select {
      background: transparent;
      padding-inline: 1rem;
      height: 100%;
      border: 0;
      outline: none;
      width: ${(props) => (props.icon ? "95%" : "100%")};
      color: #5a5858;
      font-size: 1rem;

      &::placeholder {
        font-size: 13px;
      }
    }
  }
  .error {
    color: red;
    font-size: 0.8rem;
  }
`;
export { InputFieldWrapper };
