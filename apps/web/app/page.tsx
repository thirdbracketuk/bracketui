import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import LatestWork from "../components/sections/LatestWork";
import FAQ from "../components/sections/FAQ";
import LatestBlog from "../components/sections/LatestBlog";
import CTA from "../components/sections/CTA";

export default function Page() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <LatestWork />
      <FAQ />
      <LatestBlog />
      <CTA />
    </main>
  );
}
