'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCartStore } from '@/store/cart-store'
import { 
  ShoppingCart, 
  Search, 
  Filter,
  Star,
  Download,
  Code,
  Palette,
  Zap,
  Rocket,
  Heart,
  Eye
} from 'lucide-react'
import Link from 'next/link'

// Sample component data
const sampleComponents = [
  {
    id: '1',
    name: 'Modern Button Collection',
    description: 'A comprehensive set of modern, accessible buttons with various styles and states',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'UI Components',
    features: ['Multiple variants', 'Accessibility support', 'Customizable styles', 'Loading states'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 15420,
    rating: 4.8,
    category: 'Buttons'
  },
  {
    id: '2',
    name: 'Advanced Form Components',
    description: 'Production-ready form components with validation and error handling',
    price: 29.99,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Zod', 'React Hook Form', 'Tailwind CSS'],
    purpose: 'Forms & Input',
    features: ['Form validation', 'Error handling', 'Custom inputs', 'Multi-step forms'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 8934,
    rating: 4.9,
    category: 'Forms'
  },
  {
    id: '3',
    name: 'Navigation System',
    description: 'Complete navigation system with responsive design and accessibility',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'Navigation',
    features: ['Responsive design', 'Mobile-friendly', 'Accessibility', 'Custom themes'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 12345,
    rating: 4.7,
    category: 'Navigation'
  },
  {
    id: '4',
    name: 'Dashboard Cards',
    description: 'Beautiful dashboard cards with charts, statistics, and interactive elements',
    price: 19.99,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Framer Motion'],
    purpose: 'Dashboard',
    features: ['Interactive charts', 'Statistics cards', 'Responsive layout', 'Animations'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 6789,
    rating: 4.6,
    category: 'Cards'
  },
  {
    id: '5',
    name: 'Modal System',
    description: 'Flexible modal system with animations and accessibility features',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'Overlays',
    features: ['Multiple sizes', 'Animations', 'Accessibility', 'Custom content'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 9876,
    rating: 4.5,
    category: 'Modals'
  },
  {
    id: '6',
    name: 'Data Table Pro',
    description: 'Advanced data table with sorting, filtering, pagination, and export features',
    price: 49.99,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'TanStack Table', 'Tailwind CSS'],
    purpose: 'Data Display',
    features: ['Sorting & filtering', 'Pagination', 'Export options', 'Custom rendering'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 4567,
    rating: 4.9,
    category: 'Tables'
  }
]

const categories = ['All', 'Buttons', 'Forms', 'Navigation', 'Cards', 'Modals', 'Tables']
const tiers = ['All', 'Free', 'Premium']

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTier, setSelectedTier] = useState('All')
  const { addItem } = useCartStore()

  const filteredComponents = sampleComponents.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory
    const matchesTier = selectedTier === 'All' || 
                       (selectedTier === 'Free' && component.tier === 'FREE') ||
                       (selectedTier === 'Premium' && component.tier === 'PREMIUM')
    
    return matchesSearch && matchesCategory && matchesTier
  })

  const handleAddToCart = (component: any) => {
    addItem({
      id: component.id,
      name: component.name,
      price: component.price,
      tier: component.tier,
      type: component.type,
      imageUrl: component.imageUrl
    })
  }

  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Components</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            High-quality, production-ready components built with modern technologies
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedTier} onValueChange={setSelectedTier}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tier" />
            </SelectTrigger>
            <SelectContent>
              {tiers.map((tier) => (
                <SelectItem key={tier} value={tier}>
                  {tier}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="mb-8 rounded-lg bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredComponents.length} of {sampleComponents.length} components
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{sampleComponents.reduce((acc, comp) => acc + comp.downloads, 0).toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>{(sampleComponents.reduce((acc, comp) => acc + comp.rating, 0) / sampleComponents.length).toFixed(1)} avg rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component) => (
            <Card key={component.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {component.description}
                    </CardDescription>
                  </div>
                  <Badge variant={component.tier === 'FREE' ? 'secondary' : 'default'}>
                    {component.tier}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {component.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {component.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{component.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{component.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{component.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{component.category}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {component.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {component.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{component.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    {component.price === 0 ? 'Free' : `$${component.price.toFixed(2)}`}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/components/${component.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(component)}
                      className="group/btn"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              No components found matching your criteria.
            </div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedTier('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </LayoutWrapper>
  )
}