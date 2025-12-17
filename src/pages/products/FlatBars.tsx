import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/flat-bars.jpg";

const FlatBars = () => {
  return (
    <ProductPageTemplate
      title="Flat Bars"
      description="Premium quality flat bars in stainless steel, carbon steel, and alloy steel for industrial and construction applications."
      heroImage={heroImage}
      specifications={[
        { label: "Width Range", value: "10mm to 300mm" },
        { label: "Thickness Range", value: "3mm to 80mm" },
        { label: "Length", value: "3m to 6m (Custom lengths available)" },
        { label: "Surface Finish", value: "Hot Rolled, Cold Drawn, Bright" },
        { label: "Standards", value: "ASTM A276, A484, IS 1732" },
      ]}
      variants={[
        { name: "Hot Rolled Flat Bars", description: "Standard flat bars with mill finish" },
        { name: "Cold Drawn Flat Bars", description: "Precision finished flat bars" },
        { name: "Bright Flat Bars", description: "Polished surface for aesthetic applications" },
        { name: "Spring Steel Flat Bars", description: "High tensile for spring manufacturing" },
        { name: "Tool Steel Flat Bars", description: "Hardened for tooling applications" },
        { name: "Stainless Flat Bars", description: "Corrosion resistant flat bars" },
      ]}
      applications={[
        "Machine Tool Industry",
        "Fabrication & Manufacturing",
        "Construction Support",
        "Spring Manufacturing",
        "Agricultural Equipment",
        "Gate & Grill Fabrication",
        "Furniture Manufacturing",
        "Die & Mold Making",
      ]}
      grades={[
        "SS 304", "SS 316", "SS 316L", "SS 410", "SS 420",
        "EN8", "EN9", "EN19", "EN24", "C45", "1045", "4140"
      ]}
    />
  );
};

export default FlatBars;
