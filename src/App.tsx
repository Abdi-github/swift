import { FC } from "react";
import Header from "./components/Header";
import FixedNav from "./components/FixedNav";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-20 tablet:pt-30 laptop:pt-36 pb-8 tablet:max-w-2xl laptop:max-w-5xl mb-28 space-y-16">
        <Header />
        <Intro />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
      <FixedNav />
    </>
  );
};

export default App;
