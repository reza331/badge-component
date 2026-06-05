import DashboardScenario from "@/components/home-template/dashboard-scenario";
import Hero from "@/components/home-template/hero-section";
import ProductScenario from "@/components/home-template/product-scenario";
import ProfileScenario from "@/components/home-template/profile-scenario";
import VariantShowcaseSection from "@/components/home-template/variants-showcase";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <VariantShowcaseSection />
      <ProfileScenario />
      <ProductScenario />
      <DashboardScenario />
    </div>
  )
}
