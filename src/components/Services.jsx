/* eslint-disable react/prop-types */
const servicesList = [
  {
    id: "01",
    title: "Employee\n Onboarding",
    icon: "",
    url: "",
  },
  {
    id: "02",
    title: "HR\n Consulting",
    icon: "",
    url: "",
  },
  {
    id: "03",
    title: "Employee\n Relations",
    icon: "",
    url: "",
  },
  {
    id: "04",
    title: "Training and\n Development",
    icon: "",
    url: "",
  },
  {
    id: "05",
    title: "Performance\n Management",
    icon: "",
    url: "",
  },
  {
    id: "06",
    title: "Compliance and\n Legal Support",
    icon: "",
    url: "",
  },
];

function Services() {
  const services = servicesList;

  return (
    <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <ul>
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Service({ service }) {
  return (
    <li className="card-service">
      <img src={service.img} alt={service.name} />
      <div>
        <p>{service.id}</p>
        <h3>{service.title}</h3>
        <button>Read More</button>
      </div>
    </li>
  );
}

export default Services;
