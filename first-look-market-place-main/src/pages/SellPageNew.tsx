import { TopNavigation } from "@/components/TopNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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

export default function SellPageNew() {
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
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Content */}
      <main className="mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Sell Your Item
            </h1>
            <p className="text-xl text-muted-foreground">
              Create a listing to sell your products on our marketplace
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Form - Takes 3 columns */}
              <div className="lg:col-span-3 space-y-8">
                {/* Basic Information */}
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-2xl">📝</span>
                    Basic Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="title" className="text-base">Product Title *</Label>
                      <Input
                        id="title"
                        placeholder="Enter an attractive product title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-base">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-2 h-12">
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
                      <Label htmlFor="price" className="text-base">Price *</Label>
                      <div className="relative mt-2">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-lg">$</span>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                          className="pl-12 h-12 text-lg"
                          value={formData.price}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="condition" className="text-base">Condition</Label>
                      <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">✨ New</SelectItem>
                          <SelectItem value="like-new">🌟 Like New</SelectItem>
                          <SelectItem value="good">👍 Good</SelectItem>
                          <SelectItem value="fair">👌 Fair</SelectItem>
                          <SelectItem value="poor">💔 Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-base">Location</Label>
                      <Input
                        id="location"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="mt-2 h-12"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="description" className="text-base">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your product in detail..."
                        rows={6}
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>

                {/* Images Section */}
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-2xl">📷</span>
                    Product Images
                  </h2>
                  
                  <div
                    className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                      dragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-muted-foreground/25 hover:border-primary/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="space-y-6">
                      <div className="text-6xl">📷</div>
                      <div>
                        <p className="text-xl font-medium mb-2">Drag and drop images here</p>
                        <p className="text-muted-foreground">or click to browse files (Max 5 images)</p>
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
                        <Button type="button" size="lg" variant="outline" className="cursor-pointer">
                          Choose Files
                        </Button>
                      </label>
                    </div>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-4">Selected Images ({formData.images.length}/5):</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {formData.images.map((file, index) => (
                          <div key={index} className="relative">
                            <Badge 
                              variant="secondary" 
                              className="w-full justify-between p-3 h-auto"
                            >
                              <span className="truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="text-destructive hover:text-destructive/80 ml-2 text-lg"
                              >
                                ×
                              </button>
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Sidebar - Takes 1 column */}
              <div className="space-y-6">
                {/* Preview */}
                <Card className="p-6 sticky top-24">
                  <h3 className="font-semibold mb-4 text-lg">Listing Preview</h3>
                  
                  <div className="space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                      {formData.images.length > 0 ? (
                        <div className="text-center">
                          <span className="text-4xl block mb-2">📷</span>
                          <span className="text-sm text-muted-foreground">{formData.images.length} image(s)</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">No image</span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">
                        {formData.title || "Product Title"}
                      </h4>
                      <p className="text-2xl font-bold text-primary">
                        ${formData.price || "0.00"}
                      </p>
                      {formData.condition && (
                        <Badge variant="outline" className="mt-1">
                          {formData.condition}
                        </Badge>
                      )}
                      {formData.location && (
                        <p className="text-sm text-muted-foreground">📍 {formData.location}</p>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                    🚀 Publish Listing
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="w-full">
                    💾 Save as Draft
                  </Button>
                </div>

                {/* Tips */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">💡 Selling Tips</h3>
                  
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span>📸</span>
                      <span>Use clear, high-quality photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>📝</span>
                      <span>Write detailed descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>💰</span>
                      <span>Set competitive prices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>⚡</span>
                      <span>Respond quickly to inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✅</span>
                      <span>Be honest about condition</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}