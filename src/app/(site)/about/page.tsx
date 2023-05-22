import { CallToAction } from "@/components";
import {
  AboutHero,
  AboutStats,
  AboutValues,
  OurAwards,
  OurTeam,
} from "./(components)";
import { getAboutPage } from "@/sanity/lib/sanity.client";

export default async function AboutPage() {
  const aboutPageData = await getAboutPage();

  if (!aboutPageData) return null;

  const { about, team } = aboutPageData;
  return (
    <>
      <AboutHero
        data={{
          aboutImage: about.aboutImage,
          heroHighlight: about.heroHighlight,
          heroDescription: about.heroDescription,
        }}
      />
      <AboutStats stats={about.stats} />
      <AboutValues values={about.ourValues} />
      <OurAwards awards={about.awards} />
      <OurTeam team={team} />
      <CallToAction />
    </>
  );
}
