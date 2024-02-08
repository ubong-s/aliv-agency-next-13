import { SectionHeading, TeamCTA, TeamMember } from "@/components";
import { testimonialList } from "@/constants/testimonialList";
import { MemberProps } from "@/types";
import Image from "next/image";

export const Team = ({ team }: { team: MemberProps[] }) => {
  return (
    <section className="main__container pt-10 pb-20 lg:py-36">
      <SectionHeading
        title="Team"
        subtitle="Our Team of Experts"
        cta={{ link: "/about", text: "About us" }}
      />
      <ul className="grid grid-cols-2 gap-y-20 gap-x-8 mb-28 xl:gap-8 xl:grid-cols-4">
        <TeamCTA />
        {team.map((member, index) => {
          return <TeamMember key={member._id} member={member} />;
        })}
      </ul>

      <div className="grid gap-12 lg:gap-16">
        {testimonialList.map(({ id, logo, client, highlight, full }) => (
          <div key={id} className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="hidden lg:block"></div>
            <Image src={logo} alt={client} width={140} height={30} />
            <div className="md:col-span-2">
              <p className="text-2xl mb-8 lg:text-3xl ">{`"${highlight}"`}</p>
              <div
                className="flex flex-col gap-8"
                dangerouslySetInnerHTML={{ __html: full }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
