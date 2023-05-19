import { CustomLink, Logo } from "@/components";
import { social_list } from "@/constants/socialList";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../public/assets/icons/facebook.svg";
import twitter from "../../../public/assets/icons/twitter.svg";
import instagram from "../../../public/assets/icons/instagram.svg";
import { fillerList, infoList, menuList } from "@/constants/menuList";
import { FooterColumn } from "./FooterColumn";
import { FooterCopyright } from "./FooterCopyright";

const SocialImages = {
  facebook,
  twitter,
  instagram,
};

export const Footer = () => {
  return (
    <footer>
      <div className="main__container">
        <div className="py-16 grid gap-12 items-start lg:grid-cols-4">
          <div className="grid">
            <Link href="/" className="flex gap-1 mb-12">
              <Logo />
              aliv
            </Link>
            <ul className="flex gap-4 items-center">
              {social_list.map(({ id, link, text }) => {
                return (
                  <li key={id}>
                    <Link href={link}>
                      <Image
                        //@ts-ignore
                        src={SocialImages[text]}
                        alt={text}
                        width={36}
                        height={36}
                        className="transition-opacity hover:opacity-40"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:col-span-3">
            <FooterColumn title="Pages" list={menuList} />
            <FooterColumn title="QuickLinks" list={fillerList} />
            <FooterColumn title="Info" list={infoList} />
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
