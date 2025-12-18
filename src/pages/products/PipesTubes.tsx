import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/pipes-tubes.jpeg";

const PipesTubes = () => {
  return (
    <ProductPageTemplate
      title="Pipes & Tubes"
      description="Seamless and welded pipes and tubes in stainless steel, carbon steel, and alloy steel for diverse industrial applications."
      heroImage={heroImage}
      specifications={[
        { label: "Outer Diameter", value: "6mm to 600mm" },
        { label: "Wall Thickness", value: "0.5mm to 50mm" },
        { label: "Length", value: "Up to 12m (Custom lengths available)" },
        { label: "Surface Finish", value: "Mill, Polished, Pickled, Annealed" },
        { label: "Standards", value: "ASTM A312, A269, A270, A213, A106" },
      ]}
      variants={[
        { name: "Seamless Pipes", description: "Hot finished and cold drawn seamless pipes" },
        { name: "Welded Pipes", description: "ERW and EFW welded pipes" },
        { name: "Square Tubes", description: "Structural and decorative square tubing" },
        { name: "Rectangular Tubes", description: "For frames and structural applications" },
        { name: "Capillary Tubes", description: "Precision small diameter tubes" },
        { name: "Hydraulic Tubes", description: "High-pressure hydraulic line tubes" },
      ]}
      applications={[
        "Oil & Gas Industry",
        "Chemical Processing",
        "Power Generation",
        "Water Treatment Plants",
        "Food & Beverage Industry",
        "Pharmaceutical Industry",
        "HVAC Systems",
        "Automotive Exhaust Systems",
      ]}
      grades={[
        "SS 304", "SS 304L", "SS 316", "SS 316L", "SS 321", "SS 310", "SS 904L",
        "A106 Gr.B", "A333 Gr.6", "API 5L", "ASTM A53"
      ]}
    />
  );
};

export default PipesTubes;
