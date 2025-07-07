import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "The fruit is almost finished, quickly refill",
    time: "Tue 10 Nov, 10:20 AM",
    type: "warning"
  },
  {
    id: 2,
    title: "Vegetable stocks have been filled",
    time: "Tue 10 Nov, 09:20 AM", 
    type: "success"
  },
  {
    id: 3,
    title: "Fish stock has been reordered",
    time: "Fri 17 May, 10:30 AM",
    type: "info"
  },
  {
    id: 4,
    title: "Fish orders have been refilled",
    time: "Fri 17 May, 08:30 AM",
    type: "success"
  }
];

export function NotificationPanel() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Notification</h3>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
            <p className="text-sm font-medium mb-1">{notification.title}</p>
            <p className="text-xs text-muted-foreground">{notification.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}