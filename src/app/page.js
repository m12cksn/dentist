import Expertise from "@/components/Expertise";
import Fields from "@/components/Fields";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Expertise />
      <Fields />
    </div>
  );
}
