import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    category: "Electronics",
    badge: "Best Seller",
    badgeColor: "bg-emerald-500"
  },
  {
    id: 2,
    name: "Designer Backpack",
    price: 89,
    originalPrice: 129,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "Fashion",
    badge: "Limited",
    badgeColor: "bg-red-500"
  },
  {
    id: 3,
    name: "Smart Watch Series 7",
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
    category: "Electronics",
    badge: "New",
    badgeColor: "bg-blue-500"
  },
  {
    id: 4,
    name: "Organic Coffee Beans",
    price: 24,
    originalPrice: 32,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
    category: "Food",
    badge: "Organic",
    badgeColor: "bg-green-500"
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 159,
    originalPrice: 199,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    category: "Electronics",
    badge: "Gaming",
    badgeColor: "bg-purple-500"
  },
  {
    id: 6,
    name: "Vintage Sunglasses",
    price: 79,
    originalPrice: 119,
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    category: "Fashion",
    badge: "Vintage",
    badgeColor: "bg-amber-500"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with exceptional quality and value
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-hover transition-all duration-300">
              <div className="relative">
                {/* Product Image */}
                <div className="bg-muted/30 h-64 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{product.category}</div>
                    <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-amber-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                    <Badge variant="secondary" className="text-emerald-600 bg-emerald-50">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}