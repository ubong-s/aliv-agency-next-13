import Link from "next/link";

interface Props {
  variant: "outline" | "primary";
  link: string;
  linkText: string;
  onClick?: () => void;
  bgColor?: string;
  icon?: JSX.Element;
}

// flex gap-2 items-center flex-grow-0

export const LinkButton = ({
  variant,
  link,
  linkText,
  onClick,
  icon,
}: Props) => {
  return (
    <Link
      href={link}
      className={`inline-block px-5 py-3 border border-ablack rounded-full  transition-all lg:py-5 lg:px-6 ${
        variant === "primary"
          ? "bg-black text-white hover:opacity-80"
          : "bg-transparent hover:bg-ablack hover:text-white"
      }`}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        {linkText}
        {icon}
      </div>
    </Link>
  );
};
