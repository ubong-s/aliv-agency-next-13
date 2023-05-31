import { StatProps } from "@/types";

export const AboutStats = ({ stats }: { stats: StatProps[] }) => {
  return (
    <section id="stats">
      <div className="main__container grid gap-6 md:grid-cols-2 lg:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
        {stats.map(({ _key, count, title, text }) => (
          <div
            key={_key}
            className="stat__box flex flex-col items-start justify-between h-[200px] p-6 md:h-[300px] lg:h-[350px] xl:p-10 bg-concrete"
          >
            <h3 className="flex flex-col justify-start">
              <span className="text-3xl lg:text-6xl mb-2">{count}</span>
              <span className="text-xs uppercase">{title}</span>
            </h3>

            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
