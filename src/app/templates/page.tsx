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
  Smartphone,
  Crown
} from 'lucide-react'
import Link from 'next/link'

// All templates data (mix of free and premium)
const allTemplates = [
  // Free templates
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
  // Premium templates
  {
    id: 'premium-template-1',
    name: 'SaaS Dashboard Pro',
    description: 'Advanced SaaS dashboard with analytics, user management, and billing',
    price: 49,
    tier: 'PREMIUM',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Chart.js'],
    purpose: 'Dashboard',
    features: ['Real-time analytics', 'User management', 'Billing integration', 'Advanced charts'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 8765,
    rating: 4.9,
    category: 'Dashboard',
    fileSize: '256 KB',
    lastUpdated: '2024-01-14',
    license: 'Commercial'
  },
  {
    id: 'premium-template-2',
    name: 'E-commerce Platform',
    description: 'Complete e-commerce platform with payment processing and inventory management',
    price: 79,
    tier: 'PREMIUM',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Stripe'],
    purpose: 'E-commerce',
    features: ['Payment processing', 'Inventory management', 'Order tracking', 'Admin panel'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 6543,
    rating: 4.8,
    category: 'E-commerce',
    fileSize: '342 KB',
    lastUpdated: '2024-01-12',
    license: 'Commercial'
  },
  {
    id: 'premium-template-3',
    name: 'Social Media Platform',
    description: 'Social media platform template with real-time messaging and content sharing',
    price: 99,
    tier: 'PREMIUM',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Socket.io'],
    purpose: 'Social',
    features: ['Real-time messaging', 'Content sharing', 'User profiles', 'Notifications'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 4321,
    rating: 4.7,
    category: 'Social',
    fileSize: '445 KB',
    lastUpdated: '2024-01-10',
    license: 'Commercial'
  }
]

const categories = ['All', 'Landing Pages', 'Blog', 'Portfolio', 'Dashboard', 'E-commerce', 'Social']
const technologies = ['All', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Chart.js', 'Stripe', 'Socket.io']
const tiers = ['All', 'FREE', 'PREMIUM']

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const [selectedTier, setSelectedTier] = useState('All')
  const { addItem } = useCartStore()

  const filteredTemplates = allTemplates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory
    const matchesTechnology = selectedTechnology === 'All' || 
                             template.technologies.includes(selectedTechnology)
    const matchesTier = selectedTier === 'All' || template.tier === selectedTier
    
    return matchesSearch && matchesCategory && matchesTechnology && matchesTier
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
            <div className="h-8 w-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h1 className="text-4xl font-bold text-foreground">All Templates</h1>
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            Browse our complete collection of free and premium templates. From landing pages to complex platforms.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Download className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">
                  {allTemplates.reduce((acc, template) => acc + template.downloads, 0).toLocaleString()}
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
                  {(allTemplates.reduce((acc, template) => acc + template.rating, 0) / allTemplates.length).toFixed(1)}
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
                <div className="text-2xl font-bold text-purple-700">{allTemplates.length}</div>
                <div className="text-sm text-purple-600">Total Templates</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-700">
                  {allTemplates.filter(t => t.tier === 'FREE').length}
                </div>
                <div className="text-sm text-yellow-600">Free Templates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/templates/free">
              <Layout className="h-4 w-4 mr-2" />
              Free Templates
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/templates/premium">
              <Crown className="h-4 w-4 mr-2" />
              Premium Templates
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
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

        {/* Filter Results */}
        <div className="mb-8 rounded-lg bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredTemplates.length} of {allTemplates.length} templates
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
                      <Badge 
                        variant="secondary" 
                        className={
                          template.tier === 'FREE' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {template.tier}
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
                  <div className={`text-lg font-semibold ${
                    template.tier === 'FREE' ? 'text-blue-600' : 'text-yellow-600'
                  }`}>
                    {template.tier === 'FREE' ? 'Free' : `$${template.price}`}
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
                      className={
                        template.tier === 'FREE' 
                          ? 'bg-blue-600 hover:bg-blue-700 group/btn' 
                          : 'bg-yellow-600 hover:bg-yellow-700 group/btn'
                      }
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
              No templates found matching your criteria.
            </div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedTechnology('All')
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