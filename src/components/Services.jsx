import Button from "./Button";

import serv1 from "../assets/Asset 10.png";
import serv2 from "../assets/Asset 12.png";
import serv3 from "../assets/Asset 14.png";
import serv4 from "../assets/Asset 11.png";
import serv5 from "../assets/Asset 13.png";
import serv6 from "../assets/Asset 15.png";

/* eslint-disable react/prop-types */
const servicesList = [
  {
    id: "serv1",
    title: "Employee\n Onboarding",
    icon: { serv1 },
    url: "",
  },
  {
    id: "serv2",
    title: "HR\n Consulting",
    icon: { serv2 },
    url: "",
  },
  {
    id: "serv3",
    title: "Employee\n Relations",
    icon: { serv3 },
    url: "",
  },
  {
    id: "serv4",
    title: "Training and\n Development",
    icon: { serv4 },
    url: "",
  },
  {
    id: "serv5",
    title: "Performance\n Management",
    icon: { serv5 },
    url: "",
  },
  {
    id: "serv6",
    title: "Compliance and\n Legal Support",
    icon: { serv6 },
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
      <img src={service.icon[service.id]} alt={service.name} />
      <div>
        <p>{service.id}</p>
        <h3>{service.title}</h3>
        <Button>Read More</Button>
      </div>
    </li>
  );
}

export default Services;
