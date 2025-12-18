import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Package, Truck, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-metal.jpg";

const features = [
  {
    icon: Package,
    title: "Diverse Product Range",
    description: "Complete range of ferrous and non-ferrous metal products",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control meeting international standards",
  },
  {
    icon: Truck,
    title: "Timely Deliveries",
    description: "Reliable logistics ensuring on-time product delivery",
  },
  {
    icon: Shield,
    title: "Industry Expertise",
    description: "Years of experience serving diverse industries",
  },
];

const whyChooseUs = [
  "Premium quality ferrous & non-ferrous metals",
  "Competitive market pricing",
  "Custom fabrication available",
  "Pan-India delivery network",
  "Technical support & consultation",
  "Bulk order discounts",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Metal products warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold mb-4 animate-fade-in">
              Trusted Metal Solutions Since Day One
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
              Trusted Importer, Stockist & Supplier of Industrial Metal Raw Materials
            </h1>
            <p className="text-primary-foreground/90 text-lg mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              ASTSIDDHI METAL is a leading Stockist, Manufacturer, and Supplier of
              high-quality Stainless Steel, Mild Steel, Carbon Steel, Sheets, Plates, Coils, Pipes, Rods & Flanges.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-accent hover:bg-red-accent-dark text-accent-foreground">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Industries Trust Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With years of expertise in the metal industry, we deliver products that
              meet the highest quality standards and client specifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-accent">ASTSIDDHI METAL</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We are committed to delivering excellence in every order. Our extensive
                inventory, competitive pricing, and reliable service make us the preferred
                choice for businesses across industries.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 bg-primary hover:bg-navy-light">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-navy-light rounded-lg p-8 text-primary-foreground">
                <h3 className="font-heading text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Ready to discuss your requirements? Contact us today for a free consultation.
                </p>
                <div className="space-y-3 text-sm">
                  <p>📞 +91 9820521850 / +91 9987233056</p>
                  <p>📧 astsiddhimetal@gmail.com</p>
                  <p>📍 Shop No 106 A, 2nd Kumbharwada, Mumbai 400004</p>
                </div>
                <Button asChild className="mt-6 w-full bg-accent hover:bg-red-accent-dark text-accent-foreground">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Source Quality Metal Products?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you need standard products or custom solutions, we're here to help.
            Get in touch with our team today.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-red-accent-dark text-accent-foreground">
            <Link to="/contact">
              Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
