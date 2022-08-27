import axios from "axios";
import { ISignUpInterface, ILoginFormInputs } from "../lib/interface";

const TechinOverClient = axios.create({
  baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1",
  timeout: 10000,
  headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
});

export async function SignUserUp(signUpdata: ISignUpInterface) {
  let response = await TechinOverClient.post(`/user/create`, signUpdata);

  return response;
}
export async function LogUserIn(loginData: ILoginFormInputs) {
  let response = await TechinOverClient.post(`/user/login`, loginData);

  return response;
}
