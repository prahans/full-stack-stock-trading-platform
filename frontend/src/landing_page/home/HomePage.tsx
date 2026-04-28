import OpenAccout from "../OpenAccount";
import Award from "./Award";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccout />
    </>
  );
}

export default HomePage;
