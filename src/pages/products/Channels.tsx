import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/channels.jpg";

const Channels = () => {
  return (
    <ProductPageTemplate
      title="Channels"
      description="C-channels and U-channels in stainless steel and mild steel for structural and industrial applications."
      heroImage={heroImage}
      specifications={[
        { label: "Size Range", value: "ISMC 75 to ISMC 400" },
        { label: "Web Thickness", value: "4mm to 15mm" },
        { label: "Flange Width", value: "40mm to 100mm" },
        { label: "Length", value: "6m, 12m (Custom lengths available)" },
        { label: "Standards", value: "IS 2062, ASTM A36, EN 10025" },
      ]}
      variants={[
        { name: "ISMC Channels", description: "Indian Standard Medium Weight Channels" },
        { name: "ISLC Channels", description: "Indian Standard Light Weight Channels" },
        { name: "UPN Channels", description: "European standard U-channels" },
        { name: "Stainless Steel Channels", description: "Corrosion resistant structural channels" },
        { name: "Parallel Flange Channels", description: "Modern channels with parallel flanges" },
        { name: "Lip Channels", description: "C-channels with lip for purlins" },
      ]}
      applications={[
        "Building Frames & Structures",
        "Industrial Sheds",
        "Crane Rails & Supports",
        "Vehicle Chassis",
        "Conveyor Systems",
        "Platform Construction",
        "Mezzanine Floors",
        "Solar Panel Mounting",
      ]}
      grades={[
        "SS 304", "SS 316", "SS 316L",
        "IS 2062 E250", "IS 2062 E350", "ASTM A36", "EN S275JR", "EN S355JR"
      ]}
    />
  );
};

export default Channels;
