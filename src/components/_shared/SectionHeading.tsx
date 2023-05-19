import React from "react";
import { LinkButton } from "./LinkButton";

interface Props {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export const SectionHeading = ({ title, subtitle, cta }: Props) => {
  return (
    <div>
      <h2 className="uppercase pb-2 border-b border-b-concrete">{title}</h2>

      {subtitle && (
        <div className="flex justify-between items-center my-8 lg:my-12">
          <p className="text-4xl lg:text-48px">{subtitle}</p>
          <span className="hidden lg:inline-block">
            {cta && cta.link && cta.text && (
              <LinkButton
                variant="outline"
                link={cta.link}
                linkText={cta.text}
              />
            )}
          </span>
        </div>
      )}
    </div>
  );
};
