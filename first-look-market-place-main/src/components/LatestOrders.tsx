import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: 1,
    customer: "Sumon",
    item: "Carrot ( 5 )",
    time: "Tue 20 Sep, 08:30 AM",
    status: "Accept",
    statusColor: "bg-green-500"
  },
  {
    id: 2,
    customer: "Naveen",
    item: "Fruits",
    time: "Sun 18 Sep, 05:30 AM", 
    status: "Accept",
    statusColor: "bg-green-500"
  },
  {
    id: 3,
    customer: "Ariana",
    item: "Table 4* 4",
    time: "Mon 19 Sep, 06:30 AM",
    status: "Accepted",
    statusColor: "bg-green-500"
  },
  {
    id: 4,
    customer: "Reshmi",
    item: "Pure Ghee",
    time: "Sun 18 Sep, 04:30 AM",
    status: "Accepted", 
    statusColor: "bg-green-500"
  }
];

export function LatestOrders() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Latest order</h3>
      
      <div className="space-y-3">
        <div className="grid grid-cols-3 text-xs font-medium text-muted-foreground pb-2 border-b">
          <span>Name</span>
          <span>Goods</span>
          <span>Status</span>
        </div>
        
        {orders.map((order) => (
          <div key={order.id} className="grid grid-cols-3 text-sm">
            <div>
              <p className="font-medium">{order.customer}</p>
              <p className="text-xs text-muted-foreground">{order.time}</p>
            </div>
            <div>
              <p className="font-medium">{order.item}</p>
            </div>
            <div>
              <Badge className={`${order.statusColor} text-white hover:${order.statusColor}/90`}>
                {order.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}