import { AppSidebar } from "@/components/AppSidebar";
import { SpecialOfferBanner } from "@/components/SpecialOfferBanner";
import { PopularCategories } from "@/components/PopularCategories";
import { CategoriesStock } from "@/components/CategoriesStock";
import { PopularProducts } from "@/components/PopularProducts";
import { IncomeDashboard } from "@/components/IncomeDashboard";
import { NotificationPanel } from "@/components/NotificationPanel";
import { LatestOrders } from "@/components/LatestOrders";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Center Content Area */}
        <div className="flex-1 p-6 space-y-6">
          {/* Special Offer Banner */}
          <SpecialOfferBanner />
          
          {/* Popular Categories */}
          <PopularCategories />
          
          {/* Categories and Stock */}
          <CategoriesStock />
          
          {/* Popular Products */}
          <PopularProducts />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-6 border-l border-border">
          {/* Income Dashboard */}
          <IncomeDashboard />
          
          {/* Notification Panel */}
          <NotificationPanel />
          
          {/* Latest Orders */}
          <LatestOrders />
        </div>
      </div>
    </div>
  );
}