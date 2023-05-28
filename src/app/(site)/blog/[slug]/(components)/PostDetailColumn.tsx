export const PostDetailColumn = ({
  text,
  title,
}: {
  text: string;
  title: string;
}) => {
  return (
    <div>
      <h3 className="block uppercase pb-2 border-b border-concrete mb-4">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};
