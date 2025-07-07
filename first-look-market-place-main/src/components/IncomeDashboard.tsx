import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";

const incomeData = [
  {
    label: "Daily",
    amount: "$129.80",
    trend: "up",
    percentage: "+5%",
    color: "text-income-up"
  },
  {
    label: "Weekly", 
    amount: "$347.62",
    trend: "up",
    percentage: "+12%",
    color: "text-income-up"
  },
  {
    label: "Monthly",
    amount: "$897.66",
    trend: "up", 
    percentage: "+8%",
    color: "text-income-up"
  }
];

export function IncomeDashboard() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Income</h3>
      
      <div className="space-y-4">
        {incomeData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${
                index === 0 ? 'bg-green-500' : 
                index === 1 ? 'bg-yellow-500' : 'bg-green-600'
              }`}></div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
            
            <div className="text-right">
              <div className="font-semibold">{item.amount}</div>
              <div className="flex items-center gap-1 text-xs">
                {item.trend === "up" ? (
                  <ChevronUp className="h-3 w-3 text-income-up" />
                ) : (
                  <ChevronDown className="h-3 w-3 text-income-down" />
                )}
                <span className={item.color}>{item.percentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}