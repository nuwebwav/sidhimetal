import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/angles.jpg";

const Angles = () => {
  return (
    <ProductPageTemplate
      title="Angles"
      description="Structural steel angles in various sizes and grades for construction, fabrication, and industrial applications."
      heroImage={heroImage}
      specifications={[
        { label: "Size Range", value: "20x20mm to 200x200mm" },
        { label: "Thickness", value: "3mm to 25mm" },
        { label: "Length", value: "6m, 12m (Custom lengths available)" },
        { label: "Type", value: "Equal Leg, Unequal Leg" },
        { label: "Standards", value: "IS 2062, ASTM A36, EN 10025" },
      ]}
      variants={[
        { name: "Equal Angles", description: "L-shaped with equal leg lengths" },
        { name: "Unequal Angles", description: "L-shaped with different leg lengths" },
        { name: "Stainless Steel Angles", description: "Corrosion resistant for harsh environments" },
        { name: "Mild Steel Angles", description: "Economical option for general construction" },
        { name: "Galvanized Angles", description: "Zinc coated for outdoor applications" },
        { name: "Slotted Angles", description: "Pre-punched for easy assembly" },
      ]}
      applications={[
        "Structural Frameworks",
        "Building Construction",
        "Transmission Towers",
        "Industrial Racks & Shelving",
        "Bridge Construction",
        "Material Handling Equipment",
        "Machine Frames",
        "Agricultural Equipment",
      ]}
      grades={[
        "SS 304", "SS 316", "SS 316L", "SS 310",
        "IS 2062 E250", "IS 2062 E350", "ASTM A36", "EN S275JR", "EN S355JR"
      ]}
    />
  );
};

export default Angles;
