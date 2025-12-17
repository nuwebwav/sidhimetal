import { Target, Eye, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About ASTSIDDHI METAL
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner for quality metal products since establishment
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ASTSIDDHI METAL is a trusted Stockist, Manufacturer, and Supplier of high-quality 
              Ferrous and Non-Ferrous products. Based in Mumbai, we specialize in offering 
              Stainless Steel, Carbon Steel Tubes, Pipes, Pipe Fittings, Sheets, Plates, 
              Circles, Rings, Rods, and more.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of expertise in the industry, we have built a reputation for 
              delivering products that meet international standards while catering to 
              diverse client specifications. Our commitment to quality, competitive pricing, 
              and timely delivery makes us a preferred choice for businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Quality */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading supplier of premium ferrous and non-ferrous metals in the 
                region, recognized for quality and reliability.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver the best metal products with reliable service, catering to a 
                wide variety of industries and applications with excellence.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Quality Policy</h3>
              <p className="text-muted-foreground">
                We maintain rigorous quality control at every stage, ensuring all products 
                meet international standards and customer specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honest and transparent business practices" },
              { title: "Quality", desc: "Uncompromising commitment to excellence" },
              { title: "Customer Focus", desc: "Your success is our priority" },
              { title: "Innovation", desc: "Continuous improvement in all we do" },
            ].map((value) => (
              <div key={value.title} className="border border-border p-6 rounded-lg hover:border-accent transition-colors">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
