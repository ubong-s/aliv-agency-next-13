import { LinkButton } from "@/components";

interface HeroProps {
  heroHighlight: { start: string; end: string };
  heroDescription: string;
}

export const Hero = ({
  data: { heroHighlight, heroDescription },
}: {
  data: HeroProps;
}) => {
  return (
    <section className="py-16 lg:py-28">
      <div className="secondary__container">
        <h1 className="text-[52px] !leading-[60px] mb-8 lg:text-7xl lg:!leading-[85px] 2xl:text-8xl 2xl:!leading-[105px]">
          {heroHighlight.start}
          <br />
          {heroHighlight.end}
        </h1>
        <p className="max-w-2xl mb-8 text-lg lg:text-2xl lg:!leading-relaxed lg:mb-12">
          {heroDescription}
        </p>
        <LinkButton
          link="#services"
          linkText="Our Services"
          variant="primary"
        />
      </div>
    </section>
  );
};
