import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  Search, 
  Settings, 
  ChevronDown, 
  ChevronUp,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { id: "market", label: "Market", href: "/", active: true },
  { id: "categories", label: "Categories", href: "/categories" },
  { id: "order", label: "Order", href: "/orders", badge: 3 },
  { id: "favourite", label: "Favourite", href: "/favourites" },
  { id: "cart", label: "Cart", href: "/cart", badge: 6 },
  { id: "message", label: "Message", href: "/messages" },
  { id: "feedback", label: "Feedback", href: "/feedback" },
  { id: "help", label: "Help", href: "/help" },
  { id: "settings", label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-screen">
      {/* Logo Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-lg">AstroLite</span>
          <span className="text-xs text-muted-foreground">Buy Sell&amp; Discover</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted/50"
          />
        </div>
      </div>

      {/* Buy/Sell Buttons */}
      <div className="p-4 flex gap-2">
        <Button className="flex-1 bg-gradient-success text-white hover:opacity-90">
          BUY
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link to="/sell">SELL</Link>
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-2 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.id}
                to={item.href}
                className={`
                  flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors
                  ${isActive 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-foreground hover:bg-muted'
                  }
                `}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-medium">S</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Sakrupan</p>
            <p className="text-xs text-muted-foreground truncate">sakrupan@example.com</p>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}