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
  Eye,
  FileText,
  Layout,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'

// Free templates data
const freeTemplates = [
  {
    id: 'free-template-1',
    name: 'Landing Page Template',
    description: 'Modern landing page template perfect for SaaS products and startups',
    price: 0,
    tier: 'FREE',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purpose: 'Marketing',
    features: ['Hero section', 'Feature showcase', 'Pricing table', 'Contact form'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 25420,
    rating: 4.9,
    category: 'Landing Pages',
    fileSize: '125 KB',
    lastUpdated: '2024-01-15',
    license: 'MIT'
  },
  {
    id: 'free-template-2',
    name: 'Blog Template',
    description: 'Clean and minimalist blog template with markdown support',
    price: 0,
    tier: 'FREE',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purpose: 'Content',
    features: ['Markdown support', 'SEO optimized', 'Responsive design', 'Dark mode'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 18945,
    rating: 4.7,
    category: 'Blog',
    fileSize: '98 KB',
    lastUpdated: '2024-01-12',
    license: 'MIT'
  },
  {
    id: 'free-template-3',
    name: 'Portfolio Template',
    description: 'Professional portfolio template for developers and designers',
    price: 0,
    tier: 'FREE',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purpose: 'Portfolio',
    features: ['Project showcase', 'Skills section', 'Contact form', 'Resume download'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 15678,
    rating: 4.8,
    category: 'Portfolio',
    fileSize: '87 KB',
    lastUpdated: '2024-01-10',
    license: 'MIT'
  },
  {
    id: 'free-template-4',
    name: 'Dashboard Template',
    description: 'Admin dashboard template with charts and analytics',
    price: 0,
    tier: 'FREE',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purpose: 'Dashboard',
    features: ['Analytics charts', 'User management', 'Data tables', 'Responsive layout'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 22345,
    rating: 4.6,
    category: 'Dashboard',
    fileSize: '156 KB',
    lastUpdated: '2024-01-08',
    license: 'MIT'
  },
  {
    id: 'free-template-5',
    name: 'E-commerce Template',
    description: 'E-commerce template with product catalog and cart functionality',
    price: 0,
    tier: 'FREE',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purpose: 'E-commerce',
    features: ['Product catalog', 'Shopping cart', 'Checkout flow', 'Product search'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 19876,
    rating: 4.5,
    category: 'E-commerce',
    fileSize: '178 KB',
    lastUpdated: '2024-01-05',
    license: 'MIT'
  },
  {
    id: 'free-template-6',
    name: 'Documentation Template',
    description: 'Clean documentation template with search and navigation',
    price: 0,
    tier: 'FREE',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    purpose: 'Documentation',
    features: ['Search functionality', 'Table of contents', 'Code highlighting', 'Mobile responsive'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 12456,
    rating: 4.7,
    category: 'Documentation',
    fileSize: '92 KB',
    lastUpdated: '2024-01-03',
    license: 'MIT'
  }
]

const categories = ['All', 'Landing Pages', 'Blog', 'Portfolio', 'Dashboard', 'E-commerce', 'Documentation']
const technologies = ['All', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js']

export default function FreeTemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const { addItem } = useCartStore()

  const filteredTemplates = freeTemplates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory
    const matchesTechnology = selectedTechnology === 'All' || 
                             template.technologies.includes(selectedTechnology)
    
    return matchesSearch && matchesCategory && matchesTechnology
  })

  const handleAddToCart = (template: any) => {
    addItem({
      id: template.id,
      name: template.name,
      price: template.price,
      tier: template.tier,
      type: template.type,
      imageUrl: template.imageUrl
    })
  }

  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h1 className="text-4xl font-bold text-foreground">Free Templates</h1>
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            High-quality free templates built with modern technologies. Perfect for quick project setup and prototyping.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Download className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">
                  {freeTemplates.reduce((acc, template) => acc + template.downloads, 0).toLocaleString()}
                </div>
                <div className="text-sm text-blue-600">Total Downloads</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">
                  {(freeTemplates.reduce((acc, template) => acc + template.rating, 0) / freeTemplates.length).toFixed(1)}
                </div>
                <div className="text-sm text-green-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Layout className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">{freeTemplates.length}</div>
                <div className="text-sm text-purple-600">Free Templates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search free templates..."
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
              Showing {filteredTemplates.length} of {freeTemplates.length} free templates
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{filteredTemplates.reduce((acc, template) => acc + template.downloads, 0).toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>{filteredTemplates.length > 0 ? (filteredTemplates.reduce((acc, template) => acc + template.rating, 0) / filteredTemplates.length).toFixed(1) : '0.0'} avg rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{template.name}</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        FREE
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {template.description}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {template.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {template.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{template.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{template.category}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>{template.fileSize}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Rocket className="h-3 w-3" />
                    <span>{template.lastUpdated}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {template.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {template.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{template.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* License */}
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span className="font-medium">License:</span>
                  <span>{template.license}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-blue-600">
                    Free
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/templates/${template.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(template)}
                      className="bg-blue-600 hover:bg-blue-700 group/btn"
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

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              No free templates found matching your criteria.
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need More Advanced Templates?</h2>
            <p className="text-muted-foreground mb-6">
              Check out our premium templates with advanced features, priority support, and commercial licenses.
            </p>
            <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
              <Link href="/templates/premium">
                Explore Premium Templates
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}