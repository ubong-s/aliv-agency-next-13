"use client";

import { faqData } from "@/constants/faqData";
import { useState } from "react";
import { Plus } from "../icons";

export const FAQ = () => {
  const [current, setCurrent] = useState<number | null>(null);

  return (
    <section className="secondary__container py-20 lg:py-36">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <h2 className="mb-4">FAQ</h2>
          <h3 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug">
            Common Questions
          </h3>
        </div>
        <ul className="">
          {faqData.map(({ _id, question, answer }, index) => (
            <li
              key={_id}
              className="py-5 lg:py-10 border-b border-b-concrete last-of-type:border-b-0 cursor-pointer"
            >
              <div
                className="flex items-start justify-between gap-8"
                onClick={() => {
                  setCurrent((prev) => {
                    return prev === index ? null : index;
                  });
                }}
              >
                <h4 className="lg:text-xl">{question}</h4>
                <div
                  className={`flex items-center justify-center transition-all  origin-center w-[32px] h-[32px] ${
                    index === current ? "rotate-45 opacity-100" : "opacity-30"
                  } `}
                >
                  <Plus />
                </div>
              </div>

              <p
                className={`transition-all text-base text-ablack relative ${
                  index === current
                    ? "pt-5 h-auto leading-[16px] translate-y-0 opacity-80 z-0"
                    : "h-0 leading-[0] -translate-y-full opacity-0 -z-10"
                }`}
              >
                {answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
