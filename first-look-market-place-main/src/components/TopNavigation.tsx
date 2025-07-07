import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  Settings, 
  ChevronDown,
  Bell,
  MessageSquare,
  ShoppingCart,
  Heart,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "categories", label: "Categories", href: "/categories" },
  { id: "deals", label: "Deals", href: "/deals" },
  { id: "sell", label: "Sell", href: "/sell" },
  { id: "support", label: "Support", href: "/support" },
];

export function TopNavigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <span className="font-bold text-xl">AstroLite</span>
                <p className="text-xs text-muted-foreground">Buy • Sell • Discover</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Buy/Sell Buttons */}
            <div className="flex gap-2">
              <Button size="sm" className="bg-gradient-success text-white hover:opacity-90">
                BUY
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/sell">SELL</Link>
              </Button>
            </div>

            {/* Icon Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  6
                </Badge>
              </Button>

              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  3
                </Badge>
              </Button>

              <Button variant="ghost" size="sm">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-medium">S</span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">Srikar</p>
                    <p className="text-xs text-muted-foreground">srikar@email.com</p>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}