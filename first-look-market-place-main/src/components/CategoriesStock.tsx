import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const stockData = [
  { 
    category: "Veggies", 
    stock: "1,890 stock", 
    icon: "🥬", 
    color: "bg-green-500",
    bgGradient: "from-green-400 to-green-600"
  },
  { 
    category: "Tubers", 
    stock: "2,040 stock", 
    icon: "🥔", 
    color: "bg-green-300",
    bgGradient: "from-green-200 to-green-400"
  },
  { 
    category: "Fish", 
    stock: "548 stock", 
    icon: "🐟", 
    color: "bg-blue-500",
    bgGradient: "from-blue-400 to-blue-600"
  },
  { 
    category: "Fruits", 
    stock: "300 stock", 
    icon: "🍎", 
    color: "bg-orange-500",
    bgGradient: "from-orange-400 to-orange-600"
  },
  { 
    category: "Meat", 
    stock: "236 stock", 
    icon: "🥩", 
    color: "bg-red-500",
    bgGradient: "from-red-400 to-red-600"
  },
];

export function CategoriesStock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Categories and Stock</h2>
          <p className="text-sm text-muted-foreground">Current inventory levels</p>
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {stockData.map((item, index) => (
          <Card 
            key={index}
            className={`p-4 text-center text-white bg-gradient-to-br ${item.bgGradient} hover:shadow-hover transition-all duration-200 cursor-pointer group border-0`}
          >
            <div className="mb-3">
              <span className="text-3xl block mb-2">{item.icon}</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg">{item.stock}</h3>
              <p className="text-white/90 text-sm font-medium">{item.category}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}