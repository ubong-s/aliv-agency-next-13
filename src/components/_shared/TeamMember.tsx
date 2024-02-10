import Image from "next/image";
import placeholderImage from "../../../public/assets/team-image.png";
import Link from "next/link";
import { MemberProps } from "@/types";
import { SocialIconsDark, SocialIconsLight } from "@/constants/socialIcons";
import { Badge } from "./Badge";

export const TeamMember = ({
  member,
  index,
}: {
  member: MemberProps;
  index: number;
}) => {
  const { name, expertise, image, Socials } = member;
  return (
    <li className="relative member">
      <div className="group relative overflow-y-hidden">
        <div className="h-full w-full relative">
          <Image
            src={image || placeholderImage}
            alt={name}
            width={376}
            height={546}
            className="object-cover w-full h-auto"
          />
          <div className="absolute top-[70%] left-0 h-[30%] w-full bg-gradient-to-b from-transparent to-black"></div>
        </div>
        {Socials && (
          <ul className="social absolute right-4 bottom-4 flex gap-3 lg:right-6 lg:bottom-6 lg:opacity-0  lg:translate-y-52 group-hover:lg:opacity-100 group-hover:lg:translate-y-0 transition-all">
            {Socials.map((social) => (
              <li key={`${name} ${social.name}`}>
                <Link
                  href={social.url}
                  className="hover:opacity-50 transition-opacity"
                  target="_blank"
                >
                  <Image
                    //@ts-ignore
                    src={SocialIconsLight[social.name]}
                    alt={`${name}'s ${social.name}`}
                    width={28}
                    height={28}
                    className="rounded-full w-6 h-6 lg:h-8 lg:w-8"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        id={`name-${index}`}
        className=" absolute -bottom-12 flex justify-between items-center w-full"
      >
        <h4 className="text-xs md:text-sm lg:text-base">{name}</h4>
        <Badge text={expertise} />
      </div>
    </li>
  );
};
