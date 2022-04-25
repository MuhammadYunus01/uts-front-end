import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Indonesia from "../components/Indonesia/Indonesia";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import data from "../utils/constants/provinces";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Indonesia />
      <Table provinces={provinces} setProvinces={setProvinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
