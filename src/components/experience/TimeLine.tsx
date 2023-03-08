import { VerticalTimeline } from "react-vertical-timeline-component";
import { EXPERIENCE } from "../../constants";
import { ExperienceCard } from "./ExperienceCard";

export const TimeLine = () => {
  return (
    <div className="mt-20 flex flex-col">
      <VerticalTimeline animate>
        {EXPERIENCE.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
