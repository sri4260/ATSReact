import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";

const stats = [
  {
    label: "Today's Sales",
    amount: "$129.80",
    trend: "up",
    percentage: "+5%",
    icon: "📈",
    color: "text-income-up"
  },
  {
    label: "Weekly Revenue", 
    amount: "$347.62",
    trend: "up",
    percentage: "+12%",
    icon: "💰",
    color: "text-income-up"
  },
  {
    label: "Monthly Income",
    amount: "$897.66",
    trend: "up", 
    percentage: "+8%",
    icon: "🎯",
    color: "text-income-up"
  },
  {
    label: "Total Orders",
    amount: "1,847",
    trend: "up",
    percentage: "+15%",
    icon: "📦",
    color: "text-income-up"
  }
];

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-hover transition-all duration-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.amount}</p>
              <div className="flex items-center gap-1 mt-2">
                {stat.trend === "up" ? (
                  <ChevronUp className="h-4 w-4 text-income-up" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-income-down" />
                )}
                <span className={`text-sm ${stat.color}`}>{stat.percentage}</span>
                <span className="text-sm text-muted-foreground">vs last period</span>
              </div>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}