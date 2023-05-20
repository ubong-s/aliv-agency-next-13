import Link from "next/link";
import { LinkButton } from "./LinkButton";
import { LinkIcon } from "../icons";

interface Props {
  title?: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}

export const CallToAction = ({
  title = `Let's start building your brand's unique story together.`,
  subtitle = "Want to see what a difference a strong brand can make? Request a consultation today.",
  link = "/contact",
  linkText = "Get in touch",
}: Props) => {
  return (
    <section>
      <div className="main__container bg-aqua-haze p-10 lg:grid lg:grid-cols-4 lg:p-20">
        <div className="uppercase mb-4 text-sm">Contact</div>
        <div className="lg:col-span-3">
          <h2 className="text-48px mb-6 lg:text-64px">{title}</h2>
          <p className="text-xl  mb-10 lg:w-2/3 lg:mb-12">{subtitle}</p>
          <LinkButton
            link={link}
            linkText={linkText}
            variant="primary"
            icon={<LinkIcon />}
          />
        </div>
      </div>
    </section>
  );
};
