import styled from "styled-components";
import { devices } from "../../lib/screenSizes";

const AuthWrapper = styled.main`
  height: 100vh;
  background-color: white;
  width: 100vw;
  color: black;
  overflow-x: hidden;
  background: yellow;

  @media ${devices.laptop} {
    background: red;
  }
`;

export { AuthWrapper };
