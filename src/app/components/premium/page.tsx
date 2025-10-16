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
  CheckCircle,
  Component,
  Settings,
  Shield,
  BarChart,
  Bell,
  Calendar,
  Database,
  Users,
  Image
} from 'lucide-react'
import Link from 'next/link'

// Premium components data
const premiumComponents = [
  {
    id: 'premium-component-1',
    name: 'Advanced Dashboard UI',
    description: 'Comprehensive dashboard with charts, metrics, and real-time data visualization',
    price: 39,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'D3.js'],
    purpose: 'Dashboard',
    features: ['Real-time charts', 'Data filtering', 'Export options', 'Dark mode'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 12456,
    rating: 4.8,
    category: 'Dashboard',
    fileSize: '178 KB',
    lastUpdated: '2024-01-15',
    license: 'Commercial',
    icon: BarChart
  },
  {
    id: 'premium-component-2',
    name: 'Authentication System',
    description: 'Complete authentication flow with social login, 2FA, and user management',
    price: 49,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'NextAuth.js', 'Prisma', 'Tailwind CSS'],
    purpose: 'Authentication',
    features: ['Social login', '2FA support', 'User roles', 'Password reset'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 9876,
    rating: 4.9,
    category: 'Authentication',
    fileSize: '224 KB',
    lastUpdated: '2024-01-13',
    license: 'Commercial',
    icon: Shield
  },
  {
    id: 'premium-component-3',
    name: 'Notification Center',
    description: 'Advanced notification system with real-time updates and preferences',
    price: 29,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Framer Motion'],
    purpose: 'Notifications',
    features: ['Real-time updates', 'Custom preferences', 'Email notifications', 'Push API'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 8765,
    rating: 4.7,
    category: 'Notifications',
    fileSize: '156 KB',
    lastUpdated: '2024-01-11',
    license: 'Commercial',
    icon: Bell
  },
  {
    id: 'premium-component-4',
    name: 'Data Table Pro',
    description: 'Advanced data table with sorting, filtering, and export capabilities',
    price: 35,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Table', 'XLSX'],
    purpose: 'Data Display',
    features: ['Column sorting', 'Row filtering', 'CSV/Excel export', 'Pagination'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 10987,
    rating: 4.8,
    category: 'Data Display',
    fileSize: '198 KB',
    lastUpdated: '2024-01-09',
    license: 'Commercial',
    icon: Database
  },
  {
    id: 'premium-component-5',
    name: 'User Management Panel',
    description: 'Complete user management with roles, permissions, and activity tracking',
    price: 45,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Next.js', 'Prisma', 'Tailwind CSS'],
    purpose: 'User Management',
    features: ['Role-based access', 'Activity logs', 'Bulk actions', 'User analytics'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 7654,
    rating: 4.9,
    category: 'User Management',
    fileSize: '267 KB',
    lastUpdated: '2024-01-07',
    license: 'Commercial',
    icon: Users
  },
  {
    id: 'premium-component-6',
    name: 'Image Gallery Pro',
    description: 'Advanced image gallery with filtering, zoom, and organization features',
    price: 32,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lightbox', 'Masonry'],
    purpose: 'Media',
    features: ['Image filtering', 'Zoom functionality', 'Drag & drop', 'Metadata display'],
    imageUrl: '/devlaunch-logo.png',
    downloads: 6543,
    rating: 4.6,
    category: 'Media',
    fileSize: '189 KB',
    lastUpdated: '2024-01-05',
    license: 'Commercial',
    icon: Image
  }
]

const categories = ['All', 'Dashboard', 'Authentication', 'Notifications', 'Data Display', 'User Management', 'Media']
const technologies = ['All', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Chart.js', 'D3.js', 'NextAuth.js', 'Prisma', 'Socket.io', 'Framer Motion', 'TanStack Table', 'XLSX', 'Lightbox', 'Masonry']

export default function PremiumComponentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const { addItem } = useCartStore()

  const filteredComponents = premiumComponents.filter((component) => {
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
            <div className="h-8 w-1 bg-purple-600 rounded-full"></div>
            <h1 className="text-4xl font-bold text-foreground">Premium Components</h1>
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            High-quality, production-ready components with advanced features and commercial licenses.
          </p>
        </div>

        {/* Premium Features Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-purple-800 mb-2">Premium Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-purple-700">
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
            <Crown className="h-12 w-12 text-purple-600" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Download className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">
                  {premiumComponents.reduce((acc, component) => acc + component.downloads, 0).toLocaleString()}
                </div>
                <div className="text-sm text-purple-600">Total Downloads</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-700">
                  {(premiumComponents.reduce((acc, component) => acc + component.rating, 0) / premiumComponents.length).toFixed(1)}
                </div>
                <div className="text-sm text-indigo-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-violet-600 rounded-full flex items-center justify-center">
                <Component className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-violet-700">{premiumComponents.length}</div>
                <div className="text-sm text-violet-600">Premium Components</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/components">
              <Layout className="h-4 w-4 mr-2" />
              All Components
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/components/free">
              <Layout className="h-4 w-4 mr-2" />
              Free Components
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search premium components..."
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
              Showing {filteredComponents.length} of {premiumComponents.length} premium components
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{filteredComponents.reduce((acc, component) => acc + component.downloads, 0).toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>{filteredComponents.length > 0 ? (filteredComponents.reduce((acc, component) => acc + component.rating, 0) / filteredComponents.length).toFixed(1) : '0.0'} avg rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component) => {
            const Icon = component.icon
            return (
              <Card key={component.id} className="group hover:shadow-lg transition-all hover:-translate-y-1 border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <div className="p-1.5 bg-purple-100 rounded-md">
                          <Icon className="h-4 w-4 text-purple-700" />
                        </div>
                        <span>{component.name}</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          PREMIUM
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
                      <FileText className="h-3 w-3" />
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
                    <div className="text-lg font-semibold text-purple-600">
                      ${component.price}
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
                        className="bg-purple-600 hover:bg-purple-700 group/btn"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              No premium components found matching your criteria.
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
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Custom Components?</h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you create custom components tailored to your specific requirements.
            </p>
            <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600">
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