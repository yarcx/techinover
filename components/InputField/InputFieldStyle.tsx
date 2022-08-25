import styled from "styled-components";

interface InputFieldWrapperProps {
  icon?: boolean;
  border?: boolean;
}

const InputFieldWrapper = styled.div<InputFieldWrapperProps>`
  /* height: 72px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  align-items: start;
  margin: 1rem auto 2rem auto;

  & > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    /* Gray / 500 */

    color: #667085;
  }
  .inputField {
    width: 100%;
    height: 52px;
    background: ${(props) => (props.border ? "#ffffff" : "#f3f4f5")};
    border: 1px solid #eaeced;
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
`;
export { InputFieldWrapper };
