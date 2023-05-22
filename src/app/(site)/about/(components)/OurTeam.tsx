import { SectionHeading, TeamCTA, TeamMember } from "@/components";
import { MemberProps } from "@/types";

export const OurTeam = ({ team }: { team: MemberProps[] }) => {
  return (
    <section className="main__container pt-10 pb-20 ">
      <SectionHeading title="Team" subtitle="Our Team of Experts" />
      <ul className="about__team grid grid-cols-2 gap-y-20 gap-x-8 mb-28 lg:grid-cols-3 xl:grid-cols-4">
        <TeamCTA />
        {team.map((member) => (
          <TeamMember key={member._id} member={member} />
        ))}
      </ul>
    </section>
  );
};
