import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
        <section className="landingPage">
          <h1>
            Hey there, <br /> Click Login if you already have an account or Signup to create one
          </h1>
          <div className="landingPage__button">
            <AuthButton size="7rem" onClick={() => push("/login")}>
              Login
            </AuthButton>
            <AuthButton size="7rem" onClick={() => push("/signup")}>
              Sign Up
            </AuthButton>
          </div>
        </section>
      </AuthLayout>
    </>
  );
};

export default Home;
