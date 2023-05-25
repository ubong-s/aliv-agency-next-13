import React from "react";

export const DetailColumn = ({
  title,
  text,
}: {
  title: string;
  text: string;
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
