import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const categories = [
  { value: "vegetables", label: "Vegetables", icon: "🥬" },
  { value: "fashion", label: "Fashion", icon: "👗" },
  { value: "mobiles", label: "Mobiles", icon: "📱" },
  { value: "office", label: "Office", icon: "💼" },
  { value: "computers", label: "Computers", icon: "💻" },
  { value: "fruits", label: "Fruits", icon: "🍎" },
  { value: "meat", label: "Meat", icon: "🥩" },
  { value: "fish", label: "Fish", icon: "🐟" },
];

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    condition: "",
    location: "",
    contact: "",
    images: [] as File[]
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sell Your Item</h1>
            <p className="text-muted-foreground">Create a listing to sell your products on our marketplace</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Information */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Product Title *</Label>
                      <Input
                        id="title"
                        placeholder="Enter product title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              <div className="flex items-center gap-2">
                                <span>{category.icon}</span>
                                <span>{category.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                          className="pl-8"
                          value={formData.price}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="condition">Condition</Label>
                      <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="like-new">Like New</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your product..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                      />
                    </div>
                  </div>
                </Card>

                {/* Images */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Product Images</h2>
                  
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="space-y-4">
                      <div className="text-4xl">📷</div>
                      <div>
                        <p className="text-lg font-medium">Drag and drop images here</p>
                        <p className="text-muted-foreground">or click to browse files</p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileInput}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button type="button" variant="outline" className="cursor-pointer">
                          Choose Files
                        </Button>
                      </label>
                    </div>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Selected Images:</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.images.map((file, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-2">
                            {file.name}
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="text-destructive hover:text-destructive/80"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>

                {/* Contact & Location */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact & Location</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact">Contact Information</Label>
                      <Input
                        id="contact"
                        placeholder="Phone number or email"
                        value={formData.contact}
                        onChange={(e) => handleInputChange("contact", e.target.value)}
                      />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Preview */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Listing Preview</h3>
                  
                  <div className="space-y-3">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      {formData.images.length > 0 ? (
                        <span className="text-2xl">📷</span>
                      ) : (
                        <span className="text-muted-foreground text-sm">No image</span>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="font-medium">
                        {formData.title || "Product Title"}
                      </h4>
                      <p className="text-lg font-bold text-primary">
                        ${formData.price || "0.00"}
                      </p>
                      {formData.condition && (
                        <Badge variant="outline" className="mt-1">
                          {formData.condition}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Tips */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Selling Tips</h3>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use clear, high-quality photos</li>
                    <li>• Write detailed descriptions</li>
                    <li>• Set competitive prices</li>
                    <li>• Respond quickly to inquiries</li>
                    <li>• Be honest about condition</li>
                  </ul>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    Publish Listing
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Save as Draft
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}