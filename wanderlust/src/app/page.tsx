import { Navbar } from "@/components/site/navbar";
import { Banner } from "@/components/site/banner";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Testimonials } from "@/components/site/testimonials";
import { CallToAction } from "@/components/site/cta";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
