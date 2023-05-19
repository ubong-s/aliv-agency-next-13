import Image from "next/image";
import placeholderImage from "../../../public/assets/team-image.png";
import Link from "next/link";
import { TeamMemberProps } from "@/types";
import { SocialIconsDark } from "@/constants/socialIcons";

export const TeamMember = ({ member }: { member: TeamMemberProps }) => {
  const { name, position, socials } = member;
  return (
    <li className="relative ">
      <div className="group relative overflow-y-hidden">
        <Image
          src={placeholderImage}
          alt={name}
          width={376}
          height={546}
          className="object-cover w-full"
        />
        {socials && (
          <ul className="social absolute right-6 bottom-6 flex gap-2 lg:opacity-0  lg:translate-y-52 group-hover:lg:opacity-100 group-hover:lg:translate-y-0 transition-all">
            {socials.map(({ network, profileLink }) => (
              <li key={network}>
                <Link href={profileLink}>
                  <Image
                    //@ts-ignore
                    src={SocialIconsDark[network]}
                    alt={`${name}'s ${network}`}
                    width={36}
                    height={36}
                    className="w-6 h-6 md:h-9 md:w-9"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className=" absolute -bottom-12 flex justify-between items-center w-full">
        <h4 className="text-sm lg:text-lg">{name}</h4>
        <span className="inline-block text-xs py-1.5 px-3 border border-ablack rounded-full">
          {position}
        </span>
      </div>
    </li>
  );
};
