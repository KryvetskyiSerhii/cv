import { ComputerCanvas } from "../canvas/ComputerCanvas";
import { Description } from "./Description";
import { ScrollDown } from "./ScrollDown";

export const Desktop = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Description />
      <ComputerCanvas />
      <ScrollDown />
    </section>
  );
};
