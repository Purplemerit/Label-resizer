"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
<<<<<<< HEAD
  Search,
  Plus,
=======
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Copy,
  Trash2,
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  Star,
  StarOff,
  Grid3X3,
  List,
<<<<<<< HEAD
=======
  Layout,
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  FileText,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"

const templates = [
  {
    id: "TPL-001",
    name: "Amazon FBA Standard",
    description: "Standard 4x6 format for Amazon FBA shipments",
    format: "Amazon FBA 4x6",
    category: "E-commerce",
    usageCount: 1247,
    lastUsed: "Jan 12, 2026",
    isFavorite: true,
  },
  {
    id: "TPL-002",
    name: "USPS Priority Mail",
    description: "Priority Mail labels with tracking barcode",
    format: "USPS 4x6",
    category: "Shipping",
    usageCount: 892,
    lastUsed: "Jan 12, 2026",
    isFavorite: true,
  },
  {
    id: "TPL-003",
    name: "FedEx Ground",
    description: "Ground shipping labels for FedEx",
    format: "FedEx 4x6.75",
    category: "Shipping",
    usageCount: 456,
    lastUsed: "Jan 11, 2026",
    isFavorite: false,
  },
]

const categoryColors: Record<string, string> = {
  "E-commerce": "bg-purple-500/10 text-purple-500",
  Shipping: "bg-blue-500/10 text-blue-500",
}

export function TemplatesContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [templateList, setTemplateList] = useState(templates)

  const filteredTemplates = templateList.filter((template) =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleFavorite = (id: string) => {
    setTemplateList((prev) => prev.map((t) => (t.id === id ? { ...t, isFavorite: !t.isFavorite } : t)))
  }

  const favoriteTemplates = filteredTemplates.filter((t) => t.isFavorite)
  const otherTemplates = filteredTemplates.filter((t) => !t.isFavorite)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Templates</h1>
          <p className="text-sm text-muted-foreground mt-1">Create and manage reusable label templates</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-muted border-border"
              />
            </div>
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "grid"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "list"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {favoriteTemplates.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <h2 className="text-lg font-medium text-foreground">Favorites</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favoriteTemplates.map((template) => (
              <Card key={template.id} className="bg-card border-border hover:border-accent/50 transition-colors group">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <button
                      onClick={() => toggleFavorite(template.id)}
                      className="p-1.5 rounded-md hover:bg-muted transition-colors"
                    >
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-foreground truncate">{template.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{template.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className={cn("text-xs", categoryColors[template.category])}>{template.category}</Badge>
                      <span className="text-xs text-muted-foreground">{template.format}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {template.usageCount} uses
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {template.lastUsed}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">
          {favoriteTemplates.length > 0 ? "All Templates" : "Templates"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {otherTemplates.map((template) => (
            <Card key={template.id} className="bg-card border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <button
                    onClick={() => toggleFavorite(template.id)}
                    className="p-1.5 rounded-md hover:bg-muted transition-colors"
                  >
                    <StarOff className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-foreground truncate">{template.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{template.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={cn("text-xs", categoryColors[template.category])}>{template.category}</Badge>
                    <span className="text-xs text-muted-foreground">{template.format}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {template.usageCount} uses
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {template.lastUsed}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
