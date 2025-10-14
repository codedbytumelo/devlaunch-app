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

// Free components data
const freeComponents = [
  {
    id: 'free-1',
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
    category: 'Buttons',
    fileSize: '45 KB',
    lastUpdated: '2024-01-15',
    license: 'MIT'
  },
  {
    id: 'free-2',
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
    category: 'Navigation',
    fileSize: '32 KB',
    lastUpdated: '2024-01-10',
    license: 'MIT'
  },
  {
    id: 'free-3',
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
    category: 'Modals',
    fileSize: '28 KB',
    lastUpdated: '2024-01-08',
    license: 'MIT'
  },
  {
    id: 'free-4',
    name: 'Alert Components',
    description: 'Beautiful alert components for notifications and messages',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'Notifications',
    features: ['Multiple types', 'Auto-dismiss', 'Custom styling', 'Accessibility'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 8765,
    rating: 4.6,
    category: 'Alerts',
    fileSize: '22 KB',
    lastUpdated: '2024-01-05',
    license: 'MIT'
  },
  {
    id: 'free-5',
    name: 'Tooltip System',
    description: 'Smart tooltip system with positioning and accessibility',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'UI Elements',
    features: ['Smart positioning', 'Rich content', 'Accessibility', 'Custom triggers'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 7654,
    rating: 4.4,
    category: 'Tooltips',
    fileSize: '18 KB',
    lastUpdated: '2024-01-03',
    license: 'MIT'
  },
  {
    id: 'free-6',
    name: 'Progress Indicators',
    description: 'Versatile progress indicators for loading and completion states',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'Feedback',
    features: ['Multiple styles', 'Animated', 'Customizable', 'Accessibility'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 6543,
    rating: 4.3,
    category: 'Progress',
    fileSize: '25 KB',
    lastUpdated: '2024-01-01',
    license: 'MIT'
  }
]

const categories = ['All', 'Buttons', 'Navigation', 'Modals', 'Alerts', 'Tooltips', 'Progress']
const technologies = ['All', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']

export default function FreeComponentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const { addItem } = useCartStore()

  const filteredComponents = freeComponents.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory
    const matchesTechnology = selectedTechnology === 'All' || 
                             component.technologies.includes(selectedTechnology)
    
    return matchesSearch && matchesCategory && matchesTechnology
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
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-1 bg-green-500 rounded-full"></div>
            <h1 className="text-4xl font-bold text-foreground">Free Components</h1>
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            High-quality free components built with modern technologies. Perfect for learning and prototyping.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <Download className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">
                  {freeComponents.reduce((acc, comp) => acc + comp.downloads, 0).toLocaleString()}
                </div>
                <div className="text-sm text-green-600">Total Downloads</div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">
                  {(freeComponents.reduce((acc, comp) => acc + comp.rating, 0) / freeComponents.length).toFixed(1)}
                </div>
                <div className="text-sm text-blue-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Code className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">{freeComponents.length}</div>
                <div className="text-sm text-purple-600">Free Components</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search free components..."
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
          <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent>
              {technologies.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filter Results */}
        <div className="mb-8 rounded-lg bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredComponents.length} of {freeComponents.length} free components
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{filteredComponents.reduce((acc, comp) => acc + comp.downloads, 0).toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>{filteredComponents.length > 0 ? (filteredComponents.reduce((acc, comp) => acc + comp.rating, 0) / filteredComponents.length).toFixed(1) : '0.0'} avg rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component) => (
            <Card key={component.id} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{component.name}</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        FREE
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {component.description}
                    </CardDescription>
                  </div>
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

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Code className="h-3 w-3" />
                    <span>{component.fileSize}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Rocket className="h-3 w-3" />
                    <span>{component.lastUpdated}</span>
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

                {/* License */}
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span className="font-medium">License:</span>
                  <span>{component.license}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-green-600">
                    Free
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
                      className="bg-green-600 hover:bg-green-700 group/btn"
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
              No free components found matching your criteria.
            </div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedTechnology('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need More Advanced Components?</h2>
            <p className="text-muted-foreground mb-6">
              Check out our premium components with advanced features, priority support, and commercial licenses.
            </p>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/components/premium">
                Explore Premium Components
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}