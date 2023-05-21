import Image from "next/image";
import { partnerList } from "@/constants/partnerList";
import logo_1 from "../../../../public/assets/partners/logo_1.svg";
import logo_2 from "../../../../public/assets/partners/logo_2.svg";
import logo_3 from "../../../../public/assets/partners/logo_3.svg";
import logo_4 from "../../../../public/assets/partners/logo_4.svg";
import logo_5 from "../../../../public/assets/partners/logo_5.svg";
import logo_6 from "../../../../public/assets/partners/logo_6.svg";
import logo_7 from "../../../../public/assets/partners/logo_7.svg";

const PartnerImages = {
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
};

export const Partners = () => {
  return (
    <section className="py-16 lg:py-28">
      <div className="main__container xl:px-24 overflow-hidden">
        <div className="flex items-center w-400% lg:w-full">
          <ul className="flex gap-12 items-center animate-slide w-200% px-6 md:gap-40 md:px-20 lg:w-full lg:animate-none lg:justify-between lg:gap-0 lg:px-0">
            {partnerList.map(({ id, client, logo }) => (
              <li key={id}>
                <Image
                  //@ts-ignore
                  src={PartnerImages[logo]}
                  alt={client}
                  width={99}
                  height={25}
                  className="w-full h-full"
                />
              </li>
            ))}
          </ul>
          <ul className="flex gap-12 items-center animate-slide w-200% px-6 md:gap-40 md:px-20 lg:w-full lg:animate-none lg:justify-between lg:gap-0 lg:px-0 lg:hidden">
            {partnerList.map(({ id, client, logo }) => (
              <li key={id}>
                <Image
                  //@ts-ignore
                  src={PartnerImages[logo]}
                  alt={client}
                  width={99}
                  height={25}
                  className="w-full h-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
