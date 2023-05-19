import { CallToAction } from "@/components";
import { Blog, Hero, Partners, Team } from "./(components)";
import { Services } from "./(components)/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <Team />
      <CallToAction />
      <Blog />
    </>
  );
}
