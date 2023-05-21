import { LinkButton } from "@/components";

export const Hero = () => {
  return (
    <section className="py-16 lg:py-28">
      <div className="main__container xl:px-24">
        <h1 className="text-52px mb-8 lg:text-96px ">
          Building Brands, One Success Story at a Time.
        </h1>
        <p className="max-w-2xl mb-8 text-lg lg:text-2xl lg:mb-12">
          Create a Brand That Resonates: We Can Help You Define and Communicate
          Your Unique Message.
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
