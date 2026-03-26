import CompanyInfo from "./components/CompanyInfo";
import Stats from "./components/Stats";
import Hero from "./components/Hero";
// import Services from "./components/Services";
import Industries from "./components/Industries";
import SuccessStories from "./components/SuccessStories"; // ✅ ADD THIS
import CTA from "./components/CTA";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />
      <CompanyInfo />
      <Stats />
      <Industries />
      <SuccessStories />   ✅ Now works
      {/* <Services /> */}
      <Partners />
      <CTA />

    </main>
  );
}