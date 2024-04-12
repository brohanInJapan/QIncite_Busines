import Button from "./Button";

import Serv01 from "../assets/vectors/Serv01";
import Serv02 from "../assets/vectors/Serv02";
import Serv04 from "../assets/vectors/Serv04";
import Serv03 from "../assets/vectors/Serv03";
import Serv06 from "../assets/vectors/Serv06";
import Serv05 from "../assets/vectors/Serv05";

/* eslint-disable react/prop-types */
const servicesList = [
  {
    id: "01.",
    title: "Employee\n Onboarding",
    icon: <Serv01 />,
    url: "",
  },
  {
    id: "02.",
    title: "HR\n Consulting",
    icon: <Serv02 />,
    url: "",
  },
  {
    id: "03.",
    title: "Employee\n Relations",
    icon: <Serv03 />,
    url: "",
  },
  {
    id: "04.",
    title: "Training and\n Development",
    icon: <Serv04 />,
    url: "",
  },
  {
    id: "05.",
    title: "Performance\n Management",
    icon: <Serv05 />,
    url: "",
  },
  {
    id: "06.",
    title: "Compliance and\n Legal Support",
    icon: <Serv06 />,
    url: "",
  },
];

function Services() {
  const services = servicesList;

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <ul>
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Service({ service }) {
  return (
    <li className="card-service">
      <div className="icon-background">{service.icon}</div>
      <div>
        <p>{service.id}</p>
        <h3>{service.title}</h3>
        <Button>Read More</Button>
      </div>
    </li>
  );
}

export default Services;
