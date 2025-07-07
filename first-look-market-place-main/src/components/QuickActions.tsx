import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickActions = [
  {
    title: "Add New Product",
    description: "List a new item for sale",
    icon: "➕",
    color: "bg-blue-50 hover:bg-blue-100",
    textColor: "text-blue-600",
    action: "add-product"
  },
  {
    title: "Manage Inventory",
    description: "Update stock levels", 
    icon: "📦",
    color: "bg-green-50 hover:bg-green-100",
    textColor: "text-green-600",
    action: "manage-inventory"
  },
  {
    title: "View Analytics",
    description: "Check performance metrics",
    icon: "📊",
    color: "bg-purple-50 hover:bg-purple-100", 
    textColor: "text-purple-600",
    action: "view-analytics"
  },
  {
    title: "Customer Support",
    description: "Handle inquiries",
    icon: "💬",
    color: "bg-orange-50 hover:bg-orange-100",
    textColor: "text-orange-600", 
    action: "customer-support"
  }
];

export function QuickActions() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`h-auto p-4 ${action.color} flex flex-col items-center text-center space-y-2 transition-all duration-200`}
          >
            <div className="text-2xl">{action.icon}</div>
            <div>
              <h3 className={`font-medium text-sm ${action.textColor}`}>{action.title}</h3>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
}