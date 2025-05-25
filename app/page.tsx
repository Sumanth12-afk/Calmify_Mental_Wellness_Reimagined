import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { MarketOpportunity } from "@/components/sections/market-opportunity";
import { ProductOverview } from "@/components/sections/product-overview";
import { CompetitiveAnalysis } from "@/components/sections/competitive-analysis";
import { BusinessModel } from "@/components/sections/business-model";
import { GoToMarket } from "@/components/sections/go-to-market";
import { FinancialProjections } from "@/components/sections/financial-projections";
import { Team } from "@/components/sections/team";
import { CallToAction } from "@/components/sections/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F7FAFC]">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <MarketOpportunity />
      <ProductOverview />
      <CompetitiveAnalysis />
      <BusinessModel />
      <GoToMarket />
      <FinancialProjections />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}
