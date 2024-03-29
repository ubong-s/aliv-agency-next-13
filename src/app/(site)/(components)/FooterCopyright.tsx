import { CustomLink } from "@/components";
import Link from "next/link";

export const FooterCopyright = () => {
  return (
    <div className="flex flex-col-reverse gap-4  py-8 border-t border-concrete lg:flex-row lg:justify-between ">
      <p>
        © {new Date().getFullYear()} Designed by{" "}
        <Link
          href="http://www.gola.io"
          target="_blank"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Pawel Gola.
        </Link>{" "}
        Developed by{" "}
        <Link
          href="https://devubong.com/"
          target="_blank"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Ubong Sylvester
        </Link>{" "}
        with{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Nextjs
        </Link>
      </p>
      <div className="flex gap-8">
        <CustomLink link="#" text="Privacy" />
        <CustomLink link="#" text="Imprint" />
      </div>
    </div>
  );
};
