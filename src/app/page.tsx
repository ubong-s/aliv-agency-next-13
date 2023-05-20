import { CallToAction } from "@/components";
import { Blog, Hero, OurWork, Partners, Team } from "./(components)";
import { Services } from "./(components)/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <OurWork />
      <Team />
      <CallToAction />
      <Blog />
    </>
  );
}
