import { ServiceBox } from "../components/ServiceBox";
import data from "../utils/servicesContent.json";

export const ServicesPage = () => {
  return (
    <div className="md:mx-3 pb-8">
      <h1>Our Services</h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.length !== 0 &&
          data.map((value, index) => (
            <ServiceBox key={index} title={value.title} text={value.text} />
          ))}
      </div>
    </div>
  );
};
