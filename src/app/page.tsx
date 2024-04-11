import Image from "next/image";
import Header from "../components/HomePageComponents/Header";
import Promotions from "../components/HomePageComponents/Promotions";
import Newsletter from "../components/HomePageComponents/Newsletter";
import About from "../components/HomePageComponents/About";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Promotions />
      <About />
      <Newsletter />
    </main>
  );
}
