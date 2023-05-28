import { CallToAction } from "@/components";
import { Blog, Hero, OurValues, OurWork, Partners, Team } from "./(components)";
import { Services } from "./(components)/Services";
import { getHomePage } from "@/sanity/lib/sanity.client";

export default async function Home() {
  const homePageData = await getHomePage();

  if (!homePageData) return null;

  const { home, team, post, projects, services } = homePageData;
  return (
    <>
      <Hero
        data={{
          heroHighlight: home.heroHighlight,
          heroDescription: home.heroDescription,
        }}
      />
      <Partners />
      <Services services={services} />
      <OurWork projects={projects} />
      <OurValues values={home.ourValues} />
      <Team team={team} />
      <CallToAction />
      <Blog />
    </>
  );
}
