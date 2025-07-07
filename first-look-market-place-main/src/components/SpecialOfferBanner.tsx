import { Button } from "@/components/ui/button";

export function SpecialOfferBanner() {
  return (
    <div className="bg-gradient-offer rounded-xl p-6 text-white relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Get special discounts</h2>
          <h3 className="text-2xl font-bold mb-1">up to 45%</h3>
          <p className="text-white/90 text-sm">Enjoy our vegetables at a discount price</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🥬</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            className="bg-white text-success hover:bg-white/90 font-medium"
          >
            Use Now
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-2 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
    </div>
  );
}