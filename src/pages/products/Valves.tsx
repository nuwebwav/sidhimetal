import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/valves.jpg";

const Valves = () => {
  return (
    <ProductPageTemplate
      title="Valves"
      description="Industrial valves including ball valves, gate valves, globe valves, and check valves for fluid control applications."
      heroImage={heroImage}
      specifications={[
        { label: "Size Range", value: '1/4" to 24"' },
        { label: "Pressure Rating", value: "150# to 2500#" },
        { label: "Connection Type", value: "Threaded, Flanged, Socket Weld, Butt Weld" },
        { label: "Body Material", value: "SS, CS, Alloy Steel, Bronze" },
        { label: "Standards", value: "API 600, API 602, ASME B16.34" },
      ]}
      variants={[
        { name: "Ball Valves", description: "Quarter turn valves for quick shut-off" },
        { name: "Gate Valves", description: "Full bore valves for on/off service" },
        { name: "Globe Valves", description: "Throttling valves for flow regulation" },
        { name: "Check Valves", description: "Non-return valves to prevent backflow" },
        { name: "Butterfly Valves", description: "Compact valves for large diameter lines" },
        { name: "Needle Valves", description: "Precision flow control valves" },
      ]}
      applications={[
        "Oil & Gas Pipelines",
        "Chemical Processing Plants",
        "Water Treatment Facilities",
        "Power Plants",
        "HVAC Systems",
        "Food & Beverage Processing",
        "Pharmaceutical Industry",
        "Marine Applications",
      ]}
      grades={[
        "SS 304", "SS 316", "SS 316L", "SS 321", "SS 347",
        "A105", "A182 F11", "A182 F22", "LF2", "CF8M", "CF8"
      ]}
    />
  );
};

export default Valves;
