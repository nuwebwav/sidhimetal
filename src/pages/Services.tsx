import { Factory, Truck, Wrench, Headphones } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "State-of-the-art manufacturing capabilities to produce metal products that meet the highest quality standards and precise specifications.",
  },
  {
    icon: Truck,
    title: "Supply Chain Solutions",
    description:
      "Efficient supply chain management ensuring timely delivery of products across India. We maintain optimal inventory levels for quick dispatch.",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description:
      "Tailored fabrication services to meet your unique requirements. From custom cuts to specialized finishes, we deliver exactly what you need.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Comprehensive after-sales services including product returns, replacements, and technical support. Your satisfaction is our priority.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive metal solutions from manufacturing to delivery
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border p-8 rounded-lg hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Construction",
              "Automotive",
              "Petrochemical",
              "Pharmaceutical",
              "Food Processing",
              "Power Generation",
              "Marine",
              "General Engineering",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-card p-6 rounded-lg text-center hover:shadow-card transition-shadow"
              >
                <p className="font-semibold text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
