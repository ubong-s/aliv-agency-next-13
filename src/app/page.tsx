import { CallToAction } from "@/components";
import { Blog, Hero, OurValues, OurWork, Partners, Team } from "./(components)";
import { Services } from "./(components)/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <OurWork />
      <OurValues />
      <Team />
      <CallToAction />
      <Blog />
    </>
  );
}
