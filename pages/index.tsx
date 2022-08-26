import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wrapper from "../components/Wrapper";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { AuthButton } from "../components/AuthLayout/AuthStyle";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>TechinOver</title>
        <meta name="description" content="Built by Yakub M. Hassan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthLayout>
        <section>
          <h1>Hey there, Login to enter your dashboard or signup to create an account</h1>
          <AuthButton onClick={() => push("/login")}>Login</AuthButton>
          <AuthButton onClick={() => push("/signup")}>Sign Up</AuthButton>
        </section>
      </AuthLayout>
    </>
  );
};

export default Home;
