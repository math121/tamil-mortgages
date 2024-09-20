import { useState } from "react";
import { ServiceBox } from "../components/ServiceBox";
import data from "../utils/servicesContent.json";

export const ServicesPage = () => {
  const [active, setActive] = useState(0);

  const handleExpandCollapse = (id: number) => {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="sm:mx-3 pb-8">
      <h1>Our Services</h1>
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {data.length !== 0 &&
          data.map((value, index) => (
            <ServiceBox
              key={index}
              info={value}
              active={active}
              handleExpandCollapse={handleExpandCollapse}
            />
          ))}
      </div>
    </div>
  );
};
