import { InfoBox } from "./InfoBox";

export const ProjectOtherInfo = ({
  info,
}: {
  info: {
    challenge: string;
    solution: string;
    result: string;
  };
}) => {
  const { challenge, solution, result } = info;

  return (
    <section>
      <div className="secondary__container grid gap-8 lg:grid-cols-3">
        <InfoBox title="Challenge" text={challenge} />
        <InfoBox title="Solution" text={solution} />
        <InfoBox title="Result" text={result} />
      </div>
    </section>
  );
};
