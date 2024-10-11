import BestSeller from "./components/Home compnents/BestSeller";
import Categories from "./components/Home compnents/Categories";
import HeroSection from "./components/Home compnents/HeroSection";





export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <BestSeller />
    </div>
  );
}
