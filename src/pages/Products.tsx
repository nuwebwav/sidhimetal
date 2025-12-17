import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import roundBarsImg from "@/assets/products/round-bars.jpg";
import wireRodsImg from "@/assets/products/wire-rods.jpg";
import pipesTubesImg from "@/assets/products/pipes-tubes.jpg";
import sheetsPlatesImg from "@/assets/products/sheets-plates.jpg";
import anglesImg from "@/assets/products/angles.jpg";
import channelsImg from "@/assets/products/channels.jpg";
import valvesImg from "@/assets/products/valves.jpg";
import flatBarsImg from "@/assets/products/flat-bars.jpg";

const productCategories = [
  {
    name: "Round Bars",
    desc: "Stainless steel, carbon steel, and alloy round bars",
    image: roundBarsImg,
    link: "/products/round-bars",
  },
  {
    name: "Wire Rods & Filler Wires",
    desc: "Welding wires and wire rods for industrial use",
    image: wireRodsImg,
    link: "/products/wire-rods",
  },
  {
    name: "Pipes & Tubes",
    desc: "Seamless and welded pipes and tubes",
    image: pipesTubesImg,
    link: "/products/pipes-tubes",
  },
  {
    name: "Sheet, Plates & Coils",
    desc: "Sheets, plates, coils, and circles",
    image: sheetsPlatesImg,
    link: "/products/sheets-plates",
  },
  {
    name: "Angles",
    desc: "Equal and unequal structural angles",
    image: anglesImg,
    link: "/products/angles",
  },
  {
    name: "Channels",
    desc: "C-channels and U-channels for construction",
    image: channelsImg,
    link: "/products/channels",
  },
  {
    name: "Valves",
    desc: "Ball, gate, globe, and check valves",
    image: valvesImg,
    link: "/products/valves",
  },
  {
    name: "Flat Bars",
    desc: "Flat bars for fabrication and manufacturing",
    image: flatBarsImg,
    link: "/products/flat-bars",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Complete range of high-quality ferrous and non-ferrous metal products
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Product Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((product) => (
              <Link
                key={product.name}
                to={product.link}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-card hover:border-accent transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
                  <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-lg p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Custom Solutions
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Need products with specific dimensions, grades, or finishes? We offer 
              customized metal solutions tailored to your exact requirements.
            </p>
            <Button asChild className="bg-accent hover:bg-red-accent-dark text-accent-foreground">
              <Link to="/contact">
                Request Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
