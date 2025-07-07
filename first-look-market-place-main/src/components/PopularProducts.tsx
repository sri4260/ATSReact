import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Cabbage",
    price: "$15.10",
    image: "🥬",
    discount: "20%",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Kale vegetables",
    price: "$8.34",
    image: "🥬",
    discount: "15%",
    rating: 4.8,
    inStock: true
  },
  {
    id: 3,
    name: "Broccoly",
    price: "$5.50",
    image: "🥦",
    discount: "10%",
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: "Celery",
    price: "$4.80",
    image: "🌿",
    discount: null,
    rating: 4.1,
    inStock: true
  },
];

export function PopularProducts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Popular Product</h2>
        <button className="text-primary text-sm hover:underline">See All</button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Card 
            key={product.id}
            className="p-4 hover:shadow-hover transition-all duration-200 cursor-pointer group relative"
          >
            {product.discount && (
              <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                {product.discount}
              </Badge>
            )}
            
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{product.image}</span>
              </div>
              
              <h3 className="font-medium text-sm mb-1">{product.name}</h3>
              
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({product.rating})
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-primary">{product.price}</span>
                <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full w-8 h-8 p-0">
                  <span className="text-white text-lg">+</span>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}