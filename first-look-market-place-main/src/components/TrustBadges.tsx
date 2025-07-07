import { Card } from "@/components/ui/card";
import { Shield, Truck, RefreshCw, Headphones } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "256-bit SSL encryption protects your data",
    color: "text-green-600"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50",
    color: "text-blue-600"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
    color: "text-orange-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert customer service team",
    color: "text-purple-600"
  }
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300">
              <div className="space-y-4">
                <div className={`mx-auto w-12 h-12 ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}