import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductVariant {
  name: string;
  description: string;
}

interface ProductPageProps {
  title: string;
  description: string;
  heroImage: string;
  specifications: ProductSpec[];
  variants: ProductVariant[];
  applications: string[];
  grades: string[];
}

const ProductPageTemplate = ({
  title,
  description,
  heroImage,
  specifications,
  variants,
  applications,
  grades,
}: ProductPageProps) => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {title}
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Specifications & Grades */}
            <div className="lg:col-span-2 space-y-12">
              {/* Specifications */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Specifications
                </h2>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr
                          key={spec.label}
                          className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}
                        >
                          <td className="px-6 py-4 font-medium text-foreground">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Available Grades */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Available Grades
                </h2>
                <div className="flex flex-wrap gap-3">
                  {grades.map((grade) => (
                    <span
                      key={grade}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Variants */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Product Range
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="bg-card border border-border p-5 rounded-lg hover:border-accent hover:shadow-card transition-all"
                    >
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {variant.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {variant.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Applications & CTA */}
            <div className="space-y-8">
              {/* Applications */}
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  Applications
                </h2>
                <ul className="space-y-3">
                  {applications.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-primary to-navy-light p-6 rounded-lg text-primary-foreground">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Need a Quote?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Contact us for competitive pricing and customized solutions.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-accent hover:bg-red-accent-dark text-accent-foreground">
                    <Link to="/contact">
                      Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <a
                    href="tel:+919820521850"
                    className="flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9820521850
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-12 bg-muted">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Explore More Products
          </h2>
          <p className="text-muted-foreground mb-6">
            Browse our complete range of ferrous and non-ferrous metal products
          </p>
          <Button asChild variant="outline">
            <Link to="/products">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPageTemplate;
