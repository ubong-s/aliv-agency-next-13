import { CallToAction } from "@/components";
import { Hero, Partners } from "./(components)";
import { Services } from "./(components)/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <CallToAction />
    </>
  );
}
