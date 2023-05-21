import { CustomLink } from "@/components";
import { LinkProps } from "@/types";

interface Props {
  list: LinkProps[];
  title: string;
}

export const FooterColumn = ({ title, list }: Props) => {
  return (
    <div>
      <span className="block uppercase pb-4 border-b border-concrete mb-8">
        {title}
      </span>
      <ul className="flex flex-col gap-6">
        {list.map((link) => (
          <li key={link.id}>
            <CustomLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
