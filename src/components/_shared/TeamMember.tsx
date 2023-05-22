import Image from "next/image";
import placeholderImage from "../../../public/assets/team-image.png";
import Link from "next/link";
import { MemberProps } from "@/types";
import { SocialIconsDark } from "@/constants/socialIcons";

export const TeamMember = ({ member }: { member: MemberProps }) => {
  const { name, expertise, image, Socials } = member;
  return (
    <li className="relative member">
      <div className=" group relative overflow-y-hidden">
        <div className="h-full w-full bg-red-200">
          <Image
            src={image || placeholderImage}
            alt={name}
            width={376}
            height={546}
            className="object-cover w-full h-auto"
          />
        </div>
        {Socials && (
          <ul className="social absolute right-4 bottom-4 flex gap-2 lg:right-6 lg:bottom-6 lg:opacity-0  lg:translate-y-52 group-hover:lg:opacity-100 group-hover:lg:translate-y-0 transition-all">
            {Socials.map((social) => (
              <li key={name}>
                <Link
                  href={social.url}
                  className="hover:opacity-50 transition-opacity"
                  target="_blank"
                >
                  <Image
                    //@ts-ignore
                    src={SocialIconsDark[social.name]}
                    alt={`${name}'s ${social.name}`}
                    width={36}
                    height={36}
                    className="bg-white rounded-full w-6 h-6 md:h-9 md:w-9"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className=" absolute -bottom-12 flex justify-between items-center w-full">
        <h4 className="text-xs md:text-sm lg:text-base">{name}</h4>
        <span className="inline-block whitespace-nowrap text-xs py-1 px-2 border border-ablack rounded-full md:py-1.5 md:px-3">
          {expertise}
        </span>
      </div>
    </li>
  );
};
