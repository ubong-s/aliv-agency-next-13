import { LinkButton } from "./LinkButton";

export const TeamCTA = () => {
  return (
    <li className="col-span-2 -mb-12 grid items-start justify-items-start p-6 bg-aqua-haze md:mb-auto md:col-span-1 md:h-full lg:p-10 ">
      <div className="">
        <p className="text-xs uppercase">Join the team</p>
        <h3 className="my-3 text-lg mb-16 md:mb-auto md:text-4xl xl:text-3xl">
          Want to shape the future of branding?
        </h3>
        <p className="hidden mt-4 md:block xl:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem.
        </p>
      </div>
      <div className="self-end">
        <LinkButton variant="primary" link="/jobs" linkText="Apply Now" />
      </div>
    </li>
  );
};
