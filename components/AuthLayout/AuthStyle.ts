import styled from "styled-components";
import { devices } from "../../lib/screenSizes";
import { AuthLayoutProps } from "./AuthLayout";

interface AuthWrapperProps {
  authPageHeight?: string;
}

const AuthWrapper = styled.main<AuthLayoutProps>`
  height: 100vh;
  width: 100vw;
  color: black;
  overflow: hidden;
  background: #ffffff;

  .authForm {
    width: 100vw;
    height: 100vh;
    padding: 1rem;
  }

  @media ${devices.laptop} {
    display: grid;
    align-items: center;
    place-items: center;
    .authForm {
      height: ${(props) => (props.authPageHeight ? props.authPageHeight : "90vh")};
      width: 70vh;
      max-width: 600px;
      padding: 0.5rem 1rem;
    }
  }
`;

const AuthTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 53px;
  letter-spacing: -0.05em;
  text-align: center;
  /* Gray / 900 */
  /* color: inherit; */
  color: #101828;
  margin-top: 0;
  @media ${devices.laptop} {
    font-size: 2.5rem;
    text-align: left;
  }
`;

const AuthButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  /* purple */
  background: #7d5fff;
  border-radius: 6px;
  width: 100%;
  outline: none;
  border: 0;
  cursor: pointer;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #ffffff;
  transition: opacity 0.3s ease-in-out;
  max-width: 500px;
  margin-inline: auto;

  &:hover {
    opacity: 0.8;
  }

  @media ${devices.laptop} {
  }
`;

export { AuthWrapper, AuthTitle, AuthButton };
