import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/wire-rods.jpg";

const WireRods = () => {
  return (
    <ProductPageTemplate
      title="Wire Rods & Filler Wires"
      description="High-quality wire rods and filler wires for welding, fastener manufacturing, and industrial applications."
      heroImage={heroImage}
      specifications={[
        { label: "Diameter Range", value: "0.8mm to 16mm" },
        { label: "Coil Weight", value: "500kg to 2000kg" },
        { label: "Surface Finish", value: "Mill, Pickled, Coated" },
        { label: "Packaging", value: "Coils, Spools, Cut Lengths" },
        { label: "Standards", value: "AWS, ASME, IS, EN" },
      ]}
      variants={[
        { name: "Stainless Steel Wire Rods", description: "For welding and fastener manufacturing" },
        { name: "Mild Steel Wire Rods", description: "General purpose wire for various applications" },
        { name: "TIG Filler Wires", description: "Precision welding wires for TIG welding" },
        { name: "MIG Filler Wires", description: "Continuous feed wires for MIG welding" },
        { name: "Submerged Arc Wires", description: "For heavy fabrication welding" },
        { name: "Flux Cored Wires", description: "Self-shielded and gas-shielded options" },
      ]}
      applications={[
        "Welding & Fabrication",
        "Fastener Manufacturing",
        "Spring Manufacturing",
        "Wire Mesh Production",
        "Cable Industry",
        "Automotive Industry",
        "Construction Reinforcement",
        "Nail & Rivet Production",
      ]}
      grades={[
        "ER308", "ER308L", "ER309", "ER309L", "ER316", "ER316L", "ER347",
        "ER70S-6", "ER80S-G", "ER90S-G", "E71T-1", "E308LT1-1"
      ]}
    />
  );
};

export default WireRods;
