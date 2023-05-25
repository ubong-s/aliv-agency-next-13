import Image from "next/image";

export const ProjectGallery = ({
  name,
  gallery,
}: {
  name: string;
  gallery: string[];
}) => {
  return (
    <section className="py-20">
      <div className="secondary__container grid gap-6 md:lg:gap-8">
        {gallery.map((image, index) => {
          return (
            <div key={index + 1}>
              <Image
                src={image}
                alt={`${name}_${index + 1}`}
                width={1400}
                height={891}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
