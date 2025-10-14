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
  CheckCircle,
  Gift,
  Layout,
  Smartphone,
  Monitor
} from 'lucide-react'
import Link from 'next/link'

// Free blocks data
const freeBlocks = [
  {
    id: 'free-block-1',
    name: 'Hero Section Block',
    description: 'Modern hero section with call-to-action and background options',
    price: 0,
    tier: 'FREE',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    purpose: 'Hero Sections',
    features: [
      'Responsive headline and subheading',
      'Call-to-action buttons',
      'Background image/video support',
      'Overlay options',
      'Animated text effects',
      'Mobile responsive',
      'Dark mode support',
      'Customizable spacing',
      'SEO optimized',
      'Fast loading'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 34567,
    rating: 4.8,
    category: 'Hero',
    difficulty: 'Beginner',
    fileSize: '45 KB',
    lastUpdated: '2024-01-18'
  },
  {
    id: 'free-block-2',
    name: 'Feature Grid Block',
    description: 'Clean feature showcase grid with icons and descriptions',
    price: 0,
    tier: 'FREE',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    purpose: 'Features',
    features: [
      'Grid layout options (2-4 columns)',
      'Icon support (Lucide icons included)',
      'Hover effects and animations',
      'Customizable colors',
      'Responsive design',
      'Title and description support',
      'Link integration',
      'Dark mode compatible',
      'Accessible markup',
      'Performance optimized'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 28934,
    rating: 4.7,
    category: 'Features',
    difficulty: 'Beginner',
    fileSize: '38 KB',
    lastUpdated: '2024-01-16'
  },
  {
    id: 'free-block-3',
    name: 'Testimonial Carousel Block',
    description: 'Rotating testimonial carousel with customer quotes and photos',
    price: 0,
    tier: 'FREE',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    purpose: 'Testimonials',
    features: [
      'Auto-rotating carousel',
      'Manual navigation controls',
      'Customer photos and names',
      'Star rating display',
      'Company/role information',
      'Smooth transitions',
      'Mobile touch support',
      'Customizable timing',
      'Pause on hover',
      'Responsive layout'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 23456,
    rating: 4.6,
    category: 'Testimonials',
    difficulty: 'Beginner',
    fileSize: '52 KB',
    lastUpdated: '2024-01-14'
  },
  {
    id: 'free-block-4',
    name: 'Pricing Table Block',
    description: 'Professional pricing tables with feature comparison and CTA buttons',
    price: 0,
    tier: 'FREE',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    purpose: 'Pricing',
    features: [
      'Multiple pricing tiers',
      'Feature comparison lists',
      'Highlighted popular plan',
      'Call-to-action buttons',
      'Toggle monthly/yearly pricing',
      'Customizable colors',
      'Responsive design',
      'Badge support',
      'Tooltips for features',
      'Dark mode support'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 19876,
    rating: 4.5,
    category: 'Pricing',
    difficulty: 'Beginner',
    fileSize: '41 KB',
    lastUpdated: '2024-01-12'
  },
  {
    id: 'free-block-5',
    name: 'Contact Form Block',
    description: 'Clean contact form with validation and submission handling',
    price: 0,
    tier: 'FREE',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    purpose: 'Forms',
    features: [
      'Name, email, message fields',
      'Form validation',
      'Error state handling',
      'Success/error messages',
      'Customizable styling',
      'Spam protection',
      'Mobile responsive',
      'Accessible labels',
      'Integration ready',
      'Dark mode support'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 26789,
    rating: 4.4,
    category: 'Forms',
    difficulty: 'Beginner',
    fileSize: '35 KB',
    lastUpdated: '2024-01-10'
  },
  {
    id: 'free-block-6',
    name: 'Footer Block',
    description: 'Comprehensive footer with links, social media, and company info',
    price: 0,
    tier: 'FREE',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    purpose: 'Footer',
    features: [
      'Multi-column layout',
      'Company information',
      'Quick links navigation',
      'Social media icons',
      'Newsletter signup',
      'Copyright information',
      'Responsive design',
      'Dark mode support',
      'Customizable colors',
      'Back to top button'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 31234,
    rating: 4.3,
    category: 'Footer',
    difficulty: 'Beginner',
    fileSize: '28 KB',
    lastUpdated: '2024-01-08'
  }
]

const categories = ['All', 'Hero', 'Features', 'Testimonials', 'Pricing', 'Forms', 'Footer']
const difficulties = ['All', 'Beginner']

export default function FreeBlocksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const { addItem } = useCartStore()

  const filteredBlocks = freeBlocks.filter((block) => {
    const matchesSearch = block.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         block.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || block.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'All' || block.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const handleAddToCart = (block: any) => {
    addItem({
      id: block.id,
      name: block.name,
      price: block.price,
      tier: block.tier,
      type: block.type,
      imageUrl: block.imageUrl
    })
  }

  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Gift className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-foreground">Free Blocks</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Ready-to-use UI blocks that you can copy and paste into your projects. Save time and maintain consistency.
          </p>
          
          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>{freeBlocks.length} free blocks</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Download className="h-4 w-4" />
              <span>{freeBlocks.reduce((acc, block) => acc + block.downloads, 0).toLocaleString()} total downloads</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{(freeBlocks.reduce((acc, block) => acc + block.rating, 0) / freeBlocks.length).toFixed(1)} average rating</span>
            </div>
          </div>
        </div>

        {/* Responsive Features */}
        <div className="mb-8 rounded-lg bg-green-50 p-6 dark:bg-green-950">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <Monitor className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-sm font-medium">Desktop</div>
            </div>
            <div className="text-center">
              <Layout className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-sm font-medium">Tablet</div>
            </div>
            <div className="text-center">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-sm font-medium">Mobile</div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-green-800 dark:text-green-200">
            All blocks are fully responsive and work perfectly on all devices
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search free blocks..."
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
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficulties.map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
          <div className="flex items-center justify-between">
            <div className="text-sm text-green-800 dark:text-green-200">
              Showing {filteredBlocks.length} of {freeBlocks.length} free blocks
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              All Free
            </Badge>
          </div>
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlocks.map((block) => (
            <Card key={block.id} className="group hover:shadow-lg transition-shadow border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <Gift className="h-3 w-3 mr-1" />
                        FREE
                      </Badge>
                      <Badge variant="outline">{block.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{block.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {block.description}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {block.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {block.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{block.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{block.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{block.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{block.difficulty}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {block.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {block.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{block.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* File Info */}
                <div className="text-xs text-muted-foreground">
                  <div>File size: {block.fileSize}</div>
                  <div>Last updated: {new Date(block.lastUpdated).toLocaleDateString()}</div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-green-600">
                    Free
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/blocks/${block.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(block)}
                      className="group/btn bg-green-600 hover:bg-green-700"
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

        {filteredBlocks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              No free blocks found matching your criteria.
            </div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedDifficulty('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-8 dark:from-green-950 dark:to-blue-950">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Advanced Blocks?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Check out our premium blocks for advanced features, animations, and enterprise-grade functionality.
            </p>
            <Button asChild>
              <Link href="/blocks/premium">
                View Premium Blocks
                <Rocket className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}