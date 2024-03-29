import Link from "next/link";

interface LinkProps {
  variant: "outline" | "primary";
  link: string;
  linkText: string;
  onClick?: () => void;
  bgColor?: string;
  icon?: JSX.Element;
  small?: boolean;
}

// flex gap-2 items-center flex-grow-0

export const LinkButton = ({
  variant,
  link,
  linkText,
  onClick,
  icon,
  small,
}: LinkProps) => {
  return (
    <Link
      href={link}
      className={`inline-block border border-ablack rounded-full  transition-all ${
        !small ? "px-4 py-3 lg:px-6 lg:py-4" : "py-2 px-3"
      } ${
        variant === "primary"
          ? "bg-black text-white hover:opacity-80"
          : "bg-transparent hover:bg-ablack hover:text-white"
      }`}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center justify-center">
        {linkText}
        {icon}
      </div>
    </Link>
  );
};
