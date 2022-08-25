import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wrapper from "../components/Wrapper";
import AuthLayout from "../components/AuthLayout/AuthLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TechinOver</title>
        <meta name="description" content="Built by Yakub M. Hassan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthLayout>hello</AuthLayout>
    </>
  );
};

export default Home;
