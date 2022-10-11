import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maria</title>
        <meta name="description" content="Boutique Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Maria" message="Welcome to my page" />
      <Slider slides={SliderData} />
      <Products />
      <contact />
      {/*<Link href="/login">Admin</Link>*/}
    </div>
  );
}
