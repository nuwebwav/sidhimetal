import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/sheets-plates.jpg";

const SheetsPlates = () => {
  return (
    <ProductPageTemplate
      title="Sheet, Plates & Coils"
      description="High-quality stainless steel and carbon steel sheets, plates, and coils for industrial and commercial applications."
      heroImage={heroImage}
      specifications={[
        { label: "Thickness", value: "0.3mm to 150mm" },
        { label: "Width", value: "1000mm to 2500mm" },
        { label: "Length", value: "2000mm to 12000mm" },
        { label: "Surface Finish", value: "2B, BA, No.4, Mirror, Hairline" },
        { label: "Standards", value: "ASTM A240, A480, EN 10088" },
      ]}
      variants={[
        { name: "Cold Rolled Sheets", description: "Smooth finish sheets for precision applications" },
        { name: "Hot Rolled Plates", description: "Structural plates for heavy fabrication" },
        { name: "Coils", description: "Continuous sheets in coil form for processing" },
        { name: "Circles", description: "Precision cut circles for utensil manufacturing" },
        { name: "Perforated Sheets", description: "Sheets with punched patterns for filtration" },
        { name: "Chequered Plates", description: "Anti-slip pattern plates for flooring" },
      ]}
      applications={[
        "Kitchen Equipment",
        "Food Processing Machinery",
        "Architectural Cladding",
        "Automotive Body Panels",
        "Storage Tanks",
        "Heat Exchangers",
        "Pressure Vessels",
        "Shipbuilding",
      ]}
      grades={[
        "SS 304", "SS 304L", "SS 316", "SS 316L", "SS 310S", "SS 321", "SS 409", "SS 430",
        "MS", "SAILMA 350", "IS 2062 E250", "HARDOX 400", "HARDOX 500"
      ]}
    />
  );
};

export default SheetsPlates;
