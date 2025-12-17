import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/round-bars.jpg";

const RoundBars = () => {
  return (
    <ProductPageTemplate
      title="Round Bars"
      description="Premium quality stainless steel and carbon steel round bars available in various grades and sizes for industrial applications."
      heroImage={heroImage}
      specifications={[
        { label: "Diameter Range", value: "3mm to 500mm" },
        { label: "Length", value: "3m to 6m (Custom lengths available)" },
        { label: "Surface Finish", value: "Bright, Black, Polished, Peeled" },
        { label: "Forms", value: "Hot Rolled, Cold Drawn, Forged" },
        { label: "Standards", value: "ASTM, EN, IS, JIS, DIN" },
      ]}
      variants={[
        { name: "Bright Round Bars", description: "Cold drawn with smooth, bright finish for precision applications" },
        { name: "Black Round Bars", description: "Hot rolled bars with mill scale, economical option" },
        { name: "Polished Round Bars", description: "Mirror finish for decorative and hygienic applications" },
        { name: "Hex Bars", description: "Hexagonal cross-section for fasteners and fittings" },
        { name: "Square Bars", description: "Square cross-section for structural applications" },
        { name: "Forged Bars", description: "High strength forged bars for heavy-duty applications" },
      ]}
      applications={[
        "Construction & Infrastructure",
        "Automotive Components",
        "Machine Parts & Shafts",
        "Fasteners & Bolts",
        "Oil & Gas Industry",
        "Chemical Processing",
        "Food Processing Equipment",
        "Pharmaceutical Industry",
      ]}
      grades={[
        "SS 304", "SS 316", "SS 316L", "SS 310", "SS 321", "SS 410", "SS 420",
        "EN8", "EN9", "EN19", "EN24", "EN31", "EN36", "C45", "42CrMo4"
      ]}
    />
  );
};

export default RoundBars;
