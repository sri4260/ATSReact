import { TopNavigation } from "@/components/TopNavigation";
import { HeroSection } from "@/components/HeroSection";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TrustBadges } from "@/components/TrustBadges";
import { Footer } from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <TopNavigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Category Showcase */}
      <CategoryShowcase />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}