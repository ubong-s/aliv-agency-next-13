import Link from "next/link";

interface Props {
  link: string;
  onClick?: () => void;
  darkBg?: boolean;
  uppercase?: boolean;
  text: string;
}

export const CustomLink = ({
  link,
  onClick,
  darkBg,
  uppercase,
  text,
}: Props) => {
  return (
    <Link
      href={link}
      className={`relative ${uppercase ? "uppercase" : "capitalize"} text-sm ${
        darkBg ? "text-white after:bg-white" : "text-ablack after:bg-ablack"
      } lg:capitalize lg:text-ablack lg:text-base after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-0 after:h-1px  after:invisible lg:after:bg-ablack  hover:after:w-full hover:after:visible hover:after:transition-all`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};
