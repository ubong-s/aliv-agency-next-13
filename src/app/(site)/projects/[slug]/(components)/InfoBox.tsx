export const InfoBox = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex flex-col items-start justify-between h-[200px] p-8 lg:h-[376px] xl:p-12 bg-alabaster">
      <h3 className="text-xs uppercase md:w-70 xl:w-80">{title}</h3>
      <p className="text-2xl md:w-85 xl:w-90">{text}</p>
    </div>
  );
};
