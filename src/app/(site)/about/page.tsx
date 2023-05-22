import { CallToAction } from "@/components";
import {
  AboutHero,
  AboutStats,
  AboutValues,
  OurAwards,
  OurTeam,
} from "./(components)";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <OurAwards />
      <OurTeam />
      <CallToAction />
    </>
  );
}
