import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, ShoppingBag } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                🎉 New Marketplace Launch
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="block text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text">
                  Products
                </span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Join thousands of buyers and sellers in our premium marketplace.
                Find unique items, great deals, and build your business with us.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Become a Seller
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-purple-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25K+</div>
                <div className="text-purple-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-purple-200 text-sm flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Product Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge className="bg-emerald-500 text-white">Featured Deal</Badge>
                  <div className="flex items-center gap-1 text-white">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">4.8 (234 reviews)</span>
                  </div>
                </div>

                <div className="bg-white/20 rounded-2xl h-48 overflow-hidden">
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/gqRrsDk9mgZDHBxrwQwN43-1200-80.png"
                    alt="Featured Product"
                    className="w-full h-full object-contain"
                  />
                </div>


                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Latest Smartphone Pro</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">$899</span>
                    <span className="text-lg text-purple-200 line-through">$1,299</span>
                    <Badge className="bg-red-500 text-white">-31%</Badge>
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}