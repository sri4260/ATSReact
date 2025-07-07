import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets and tech",
    productCount: "12,000+ items",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    name: "Fashion & Style",
    description: "Trendy clothing & accessories",
    productCount: "8,500+ items",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50"
  },
  {
    id: 3,
    name: "Home & Garden",
    description: "Beautiful home essentials",
    productCount: "6,200+ items",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50"
  },
  {
    id: 4,
    name: "Sports & Fitness",
    description: "Gear for active lifestyle",
    productCount: "4,800+ items",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50"
  },
  {
    id: 5,
    name: "Books & Media",
    description: "Knowledge and entertainment",
    productCount: "15,000+ items",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 6,
    name: "Health & Beauty",
    description: "Wellness and self-care",
    productCount: "3,500+ items",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50"
  }
];

export function CategoryShowcase() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse range of categories and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-hover transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {category.productCount}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium mr-2">Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Category Banner */}
        <div className="mt-16">
          <Card className="overflow-hidden bg-gradient-primary text-white">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Special Electronics Sale</h3>
                    <p className="text-purple-100 text-lg">
                      Get up to 50% off on the latest smartphones, laptops, and smart home devices. 
                      Limited time offer!
                    </p>
                  </div>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Shop Electronics
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="text-center">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" alt="Electronics" className="w-32 h-32 mx-auto rounded-2xl object-cover opacity-50" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}