export const ProjectIntro = ({
  client,
  services,
}: {
  client: string;
  services: string;
}) => {
  return (
    <section className="py-16 lg:py-28">
      <div className="secondary__container">
        <h1 className="text-52px my-8 lg:text-7xl lg:!leading-85px 2xl:text-8xl 2xl:!leading-105px 2xl:max-w-5xl ">
          Creating a Strong {services} for {client}
        </h1>
      </div>
    </section>
  );
};
