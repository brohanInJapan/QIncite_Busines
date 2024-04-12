import Button from "./Button";

/* eslint-disable react/prop-types */
const servicesList = [
  {
    id: "01",
    title: "Employee\n Onboarding",
    icon: "public/Asset 10.png",
    url: "",
  },
  {
    id: "02",
    title: "HR\n Consulting",
    icon: "public/Asset 12.png",
    url: "",
  },
  {
    id: "03",
    title: "Employee\n Relations",
    icon: "public/Asset 14.png",
    url: "",
  },
  {
    id: "04",
    title: "Training and\n Development",
    icon: "public/Asset 11.png",
    url: "",
  },
  {
    id: "05",
    title: "Performance\n Management",
    icon: "public/Asset 13.png",
    url: "",
  },
  {
    id: "06",
    title: "Compliance and\n Legal Support",
    icon: "public/Asset 15.png",
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
      <img src={service.icon} alt={service.name} />
      <div>
        <p>{service.id}</p>
        <h3>{service.title}</h3>
        <Button>Read More</Button>
      </div>
    </li>
  );
}

export default Services;
