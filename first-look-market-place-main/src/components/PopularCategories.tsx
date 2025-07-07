import { Card } from "@/components/ui/card";

const categories = [
  { 
    id: "vegetables", 
    name: "Vegetables", 
    icon: "🥬", 
    color: "bg-category-vegetables",
    bgColor: "bg-green-50"
  },
  { 
    id: "fashion", 
    name: "Fashion", 
    icon: "👗", 
    color: "bg-category-fashion",
    bgColor: "bg-pink-50"
  },
  { 
    id: "mobiles", 
    name: "Mobiles", 
    icon: "📱", 
    color: "bg-category-mobiles",
    bgColor: "bg-blue-50"
  },
  { 
    id: "office", 
    name: "Office", 
    icon: "💼", 
    color: "bg-category-office",
    bgColor: "bg-yellow-50"
  },
  { 
    id: "computers", 
    name: "Computers", 
    icon: "💻", 
    color: "bg-category-computers",
    bgColor: "bg-purple-50"
  },
];

export function PopularCategories() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Popular Categories</h2>
        <button className="text-primary text-sm hover:underline">View All</button>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="p-4 text-center hover:shadow-hover transition-all duration-200 cursor-pointer group"
          >
            <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="font-medium text-sm">{category.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}