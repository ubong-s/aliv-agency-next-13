import React from "react";

export const Badge = ({ text }: { text: string }) => {
  return (
    <span className="inline-block whitespace-nowrap text-xs py-1 px-2 border border-ablack rounded-full md:py-1.5 md:px-3">
      {text}
    </span>
  );
};
