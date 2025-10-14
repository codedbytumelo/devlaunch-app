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
  Crown,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

// Premium templates data
const premiumTemplates = [
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
  },
  {
    id: 'premium-template-4',
    name: 'Learning Management System',
    description: 'Complete LMS with course management, video streaming, and progress tracking',
    price: 89,
    tier: 'PREMIUM',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'WebRTC'],
    purpose: 'Education',
    features: ['Course management', 'Video streaming', 'Progress tracking', 'Certificates'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 3456,
    rating: 4.8,
    category: 'Education',
    fileSize: '389 KB',
    lastUpdated: '2024-01-08',
    license: 'Commercial'
  },
  {
    id: 'premium-template-5',
    name: 'Project Management Tool',
    description: 'Advanced project management with team collaboration and time tracking',
    price: 69,
    tier: 'PREMIUM',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Kanban'],
    purpose: 'Productivity',
    features: ['Team collaboration', 'Time tracking', 'Task management', 'Reporting'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 5678,
    rating: 4.6,
    category: 'Productivity',
    fileSize: '298 KB',
    lastUpdated: '2024-01-06',
    license: 'Commercial'
  },
  {
    id: 'premium-template-6',
    name: 'Real Estate Platform',
    description: 'Complete real estate platform with property listings and agent management',
    price: 119,
    tier: 'PREMIUM',
    type: 'TEMPLATE',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Mapbox'],
    purpose: 'Real Estate',
    features: ['Property listings', 'Agent management', 'Map integration', 'Lead generation'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 2345,
    rating: 4.9,
    category: 'Real Estate',
    fileSize: '412 KB',
    lastUpdated: '2024-01-04',
    license: 'Commercial'
  }
]

const categories = ['All', 'Dashboard', 'E-commerce', 'Social', 'Education', 'Productivity', 'Real Estate']
const technologies = ['All', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Chart.js', 'Stripe', 'Socket.io', 'WebRTC', 'Kanban', 'Mapbox']

export default function PremiumTemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const { addItem } = useCartStore()

  const filteredTemplates = premiumTemplates.filter((template) => {
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
            <div className="h-8 w-1 bg-yellow-500 rounded-full"></div>
            <h1 className="text-4xl font-bold text-foreground">Premium Templates</h1>
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            Professional-grade templates with advanced features, priority support, and commercial licenses.
          </p>
        </div>

        {/* Premium Features Banner */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Premium Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-yellow-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Commercial License</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Priority Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Regular Updates</span>
                </div>
              </div>
            </div>
            <Crown className="h-12 w-12 text-yellow-500" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Download className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-700">
                  {premiumTemplates.reduce((acc, template) => acc + template.downloads, 0).toLocaleString()}
                </div>
                <div className="text-sm text-yellow-600">Total Downloads</div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-700">
                  {(premiumTemplates.reduce((acc, template) => acc + template.rating, 0) / premiumTemplates.length).toFixed(1)}
                </div>
                <div className="text-sm text-orange-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-amber-500 rounded-full flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-700">{premiumTemplates.length}</div>
                <div className="text-sm text-amber-600">Premium Templates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/templates">
              <Layout className="h-4 w-4 mr-2" />
              All Templates
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/templates/free">
              <Layout className="h-4 w-4 mr-2" />
              Free Templates
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search premium templates..."
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
              Showing {filteredTemplates.length} of {premiumTemplates.length} premium templates
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
            <Card key={template.id} className="group hover:shadow-lg transition-all hover:-translate-y-1 border-yellow-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{template.name}</span>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        PREMIUM
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
                  <div className="text-lg font-semibold text-yellow-600">
                    ${template.price}
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
                      className="bg-yellow-600 hover:bg-yellow-700 group/btn"
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
              No premium templates found matching your criteria.
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
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Custom Development?</h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you customize any template or build a completely custom solution for your business.
            </p>
            <Button asChild className="bg-gradient-to-r from-yellow-600 to-orange-600">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}