import { LinkButton } from "./LinkButton";

export const TeamCTA = () => {
  return (
    <li className="grid items-start justify-items-start p-6 bg-aqua-haze lg:p-10">
      <div className="">
        <p className="text-xs uppercase">Join the team</p>
        <h3 className="my-3 text-lg md:text-4xl xl:text-3xl">
          Want to shape the future of branding?
        </h3>
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem.
        </p>
      </div>
      <div className="self-end">
        <LinkButton variant="primary" link="/jobs" linkText="Apply Now" />
      </div>
    </li>
  );
};
