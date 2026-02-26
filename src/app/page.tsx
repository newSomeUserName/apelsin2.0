import { DiagnosticsSection } from "@/components/diagnostics";
import { FounderSection } from "@/components/founder";
import { Greeter } from "@/components/greeter";
import { Header } from "@/components/header";
import { ProgramsSection } from "@/components/programsection";
import { WhatsAppFixedButton } from "@/components/whatsapp";
import { WhyUsSection } from "@/components/whyus";
import { ProblemSection } from "@/components/znakomo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Greeter></Greeter>
      <ProblemSection></ProblemSection>
      <WhyUsSection></WhyUsSection>
      <ProgramsSection></ProgramsSection>
      <FounderSection></FounderSection>
      <DiagnosticsSection></DiagnosticsSection>
      <WhatsAppFixedButton></WhatsAppFixedButton>
    </>
  );
}
