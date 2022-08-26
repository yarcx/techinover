import styled from "styled-components";
import { IAuthButton } from "../lib/interface";
import { devices } from "../lib/screenSizes";
import { AuthLayoutProps } from "./AuthLayout";

interface AuthWrapperProps {
  authPageHeight?: string;
}

const AuthWrapper = styled.main<AuthLayoutProps>`
  background: #ffffff;
  color: black;
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  .authForm {
    height: 100vh;
    padding: ${(props) => (props.authPageHeight?.length ? "8rem 1rem 3rem 1rem" : "4rem 1rem")};
    width: 100vw;
  }

  @media ${devices.laptop} {
    display: grid;
    align-items: center;
    place-items: center;
    .authForm {
      height: ${(props) => (props.authPageHeight ? props.authPageHeight : "fit-content")};
      width: 80vh;
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

const AuthButton = styled.button<IAuthButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  /* purple */
  background: ${(props) => (props.loading ? "rebeccapurple" : "#7d5fff")};
  /* background: purple; */
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
  margin-top: 2rem;
  opacity: ${(props) => (props.loading ? "0.8" : "1")};

  &:hover {
    opacity: 0.8;
  }
`;

const AuthLoader = styled.span`
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { AuthWrapper, AuthTitle, AuthButton, AuthLoader };
