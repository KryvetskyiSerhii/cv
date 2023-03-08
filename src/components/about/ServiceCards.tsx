import { SERVICES } from "../../constants";
import { ServiceCard } from "./ServiceCard";

export const ServiceCards = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-10">
      {SERVICES.map((service, index) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          index={index}
        />
      ))}
    </div>
  );
};
