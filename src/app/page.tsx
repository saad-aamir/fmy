import { Hero } from "@/components/home/hero";
import { LogosStrip } from "@/components/home/logos-strip";
import { ServicesGrid } from "@/components/home/services-grid";
import { VFOFeature } from "@/components/home/vfo-feature";
import { CoreValues } from "@/components/home/core-values";
import { Process } from "@/components/home/process";
import { Stats } from "@/components/home/stats";
import { WhyUs } from "@/components/home/why-us";
import { Switching } from "@/components/home/switching";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/faq";
import { CTABand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <ServicesGrid />
      <VFOFeature />
      <CoreValues />
      <Process />
      <Stats />
      <WhyUs />
      <Switching />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
