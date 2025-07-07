import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const recentActivity = [
  {
    id: 1,
    type: "order",
    title: "New order received",
    description: "Sumon ordered Carrot (5 units)",
    time: "2 hours ago",
    status: "pending",
    avatar: "👤"
  },
  {
    id: 2,
    type: "stock",
    title: "Low stock alert",
    description: "Vegetables running low - 10 items left",
    time: "4 hours ago",
    status: "warning",
    avatar: "⚠️"
  },
  {
    id: 3,
    type: "sale",
    title: "Product sold",
    description: "iPhone 14 Pro sold for $899",
    time: "6 hours ago",
    status: "success",
    avatar: "✅"
  },
  {
    id: 4,
    type: "review",
    title: "New review received",
    description: "5-star review for Fresh Broccoli",
    time: "1 day ago",
    status: "info",
    avatar: "⭐"
  }
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  warning: "bg-orange-100 text-orange-800", 
  success: "bg-green-100 text-green-800",
  info: "bg-blue-100 text-blue-800"
};

export function RecentActivity() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      
      <div className="space-y-4">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="text-xl">{activity.avatar}</div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-sm">{activity.title}</h3>
                <Badge variant="secondary" className={statusColors[activity.status as keyof typeof statusColors]}>
                  {activity.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}