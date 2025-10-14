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
  Crown,
  Shield,
  Zap as Lightning,
  Users,
  Layout,
  Smartphone,
  Monitor,
  Globe,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

// Premium blocks data
const premiumBlocks = [
  {
    id: 'premium-block-1',
    name: 'Advanced Hero Block',
    description: 'Premium hero section with 3D animations, particle effects, and interactive elements',
    price: 24.99,
    tier: 'PREMIUM',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    purpose: 'Hero Sections',
    features: [
      '3D background animations',
      'Particle effects system',
      'Interactive mouse following',
      'Dynamic text animations',
      'Video background support',
      'Parallax scrolling',
      'Advanced hover effects',
      'Customizable color schemes',
      'Performance optimized',
      'Mobile responsive',
      'SEO optimized',
      'Accessibility compliant'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 8765,
    rating: 4.9,
    category: 'Hero',
    difficulty: 'Advanced',
    fileSize: '156 KB',
    lastUpdated: '2024-01-20',
    support: 'Priority Support',
    updates: 'Lifetime Updates',
    license: 'Commercial License'
  },
  {
    id: 'premium-block-2',
    name: 'Interactive Feature Showcase',
    description: 'Dynamic feature showcase with interactive demos and real-time previews',
    price: 19.99,
    tier: 'PREMIUM',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Spring'],
    purpose: 'Features',
    features: [
      'Interactive demo areas',
      'Real-time code preview',
      'Tabbed interface',
      'Animated statistics',
      'Interactive hover states',
      'Smooth transitions',
      'Customizable layouts',
      'Dark/light mode toggle',
      'Mobile touch gestures',
      'Performance optimized',
      'Cross-browser compatible',
      'Accessibility features'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 6543,
    rating: 4.8,
    category: 'Features',
    difficulty: 'Intermediate',
    fileSize: '124 KB',
    lastUpdated: '2024-01-18',
    support: 'Priority Support',
    updates: 'Lifetime Updates',
    license: 'Commercial License'
  },
  {
    id: 'premium-block-3',
    name: 'Video Testimonial Block',
    description: 'Professional video testimonial carousel with custom controls and effects',
    price: 29.99,
    tier: 'PREMIUM',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Video.js'],
    purpose: 'Testimonials',
    features: [
      'Video playback controls',
      'Custom video player',
      'Carousel navigation',
      'Transcript support',
      'Customer information overlay',
      'Video quality selection',
      'Fullscreen support',
      'Mobile responsive',
      'Custom branding',
      'Analytics integration',
      'SEO optimized',
      'Performance optimized'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 5432,
    rating: 4.7,
    category: 'Testimonials',
    difficulty: 'Intermediate',
    fileSize: '189 KB',
    lastUpdated: '2024-01-16',
    support: 'Priority Support',
    updates: 'Lifetime Updates',
    license: 'Commercial License'
  },
  {
    id: 'premium-block-4',
    name: 'Advanced Pricing Calculator',
    description: 'Interactive pricing calculator with real-time calculations and comparisons',
    price: 34.99,
    tier: 'PREMIUM',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'React Hook Form'],
    purpose: 'Pricing',
    features: [
      'Real-time price calculations',
      'Feature comparison matrix',
      'Interactive sliders',
      'Usage-based pricing',
      'Discount codes support',
      'Currency conversion',
      'Tax calculations',
      'Save/load configurations',
      'Export to PDF',
      'Email quotes',
      'Integration ready',
      'Mobile responsive'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 4321,
    rating: 4.9,
    category: 'Pricing',
    difficulty: 'Advanced',
    fileSize: '167 KB',
    lastUpdated: '2024-01-14',
    support: 'Priority Support',
    updates: 'Lifetime Updates',
    license: 'Commercial License'
  },
  {
    id: 'premium-block-5',
    name: 'Multi-step Form Block',
    description: 'Advanced multi-step form with validation, progress tracking, and file uploads',
    price: 27.99,
    tier: 'PREMIUM',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    purpose: 'Forms',
    features: [
      'Multi-step wizard interface',
      'Progress indicators',
      'Form validation',
      'File upload support',
      'Conditional logic',
      'Auto-save functionality',
      'Form analytics',
      'Spam protection',
      'Email notifications',
      'CRM integration',
      'Mobile responsive',
      'Accessibility compliant'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 5678,
    rating: 4.8,
    category: 'Forms',
    difficulty: 'Advanced',
    fileSize: '145 KB',
    lastUpdated: '2024-01-12',
    support: 'Priority Support',
    updates: 'Lifetime Updates',
    license: 'Commercial License'
  },
  {
    id: 'premium-block-6',
    name: 'Interactive Map Block',
    description: 'Advanced interactive map with markers, clustering, and custom overlays',
    price: 39.99,
    tier: 'PREMIUM',
    type: 'BLOCK',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mapbox GL', 'Turf.js'],
    purpose: 'Maps',
    features: [
      'Interactive map controls',
      'Custom markers and popups',
      'Marker clustering',
      'Geolocation support',
      'Route planning',
      'Search functionality',
      'Custom overlays',
      'Heat maps',
      'Real-time updates',
      'Mobile gestures',
      'Offline support',
      'Performance optimized'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 3456,
    rating: 4.7,
    category: 'Maps',
    difficulty: 'Advanced',
    fileSize: '198 KB',
    lastUpdated: '2024-01-10',
    support: 'Priority Support',
    updates: 'Lifetime Updates',
    license: 'Commercial License'
  }
]

const categories = ['All', 'Hero', 'Features', 'Testimonials', 'Pricing', 'Forms', 'Maps']
const difficulties = ['All', 'Intermediate', 'Advanced']

export default function PremiumBlocksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const { addItem } = useCartStore()

  const filteredBlocks = premiumBlocks.filter((block) => {
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
            <Crown className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold text-foreground">Premium Blocks</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Advanced, interactive UI blocks with cutting-edge features, animations, and enterprise-grade functionality.
          </p>
          
          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Crown className="h-4 w-4 text-yellow-600" />
              <span>{premiumBlocks.length} premium blocks</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Download className="h-4 w-4" />
              <span>{premiumBlocks.reduce((acc, block) => acc + block.downloads, 0).toLocaleString()} total downloads</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{(premiumBlocks.reduce((acc, block) => acc + block.rating, 0) / premiumBlocks.length).toFixed(1)} average rating</span>
            </div>
          </div>
        </div>

        {/* Premium Features Banner */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 p-6 dark:from-yellow-950 dark:to-orange-950">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="font-semibold">Commercial License</div>
                <div className="text-sm text-muted-foreground">Use in commercial projects</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="font-semibold">Priority Support</div>
                <div className="text-sm text-muted-foreground">24/7 dedicated support</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Lightning className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="font-semibold">Lifetime Updates</div>
                <div className="text-sm text-muted-foreground">Free updates forever</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="font-semibold">Advanced Features</div>
                <div className="text-sm text-muted-foreground">Cutting-edge functionality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Features */}
        <div className="mb-8 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <Monitor className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-sm font-medium">Desktop</div>
            </div>
            <div className="text-center">
              <Layout className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-sm font-medium">Tablet</div>
            </div>
            <div className="text-center">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-sm font-medium">Mobile</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-sm font-medium">PWA Ready</div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-yellow-800 dark:text-yellow-200">
            All blocks are fully responsive, PWA ready, and optimized for all devices
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search premium blocks..."
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
        <div className="mb-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
          <div className="flex items-center justify-between">
            <div className="text-sm text-yellow-800 dark:text-yellow-200">
              Showing {filteredBlocks.length} of {premiumBlocks.length} premium blocks
            </div>
            <Badge variant="default" className="bg-yellow-600 text-white">
              <Crown className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          </div>
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlocks.map((block) => (
            <Card key={block.id} className="group hover:shadow-lg transition-shadow border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="default" className="bg-yellow-600 text-white">
                        <Crown className="h-3 w-3 mr-1" />
                        PREMIUM
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

                {/* Premium Info */}
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-3 w-3" />
                    <span>{block.license}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{block.support}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Lightning className="h-3 w-3" />
                    <span>{block.updates}</span>
                  </div>
                </div>

                {/* File Info */}
                <div className="text-xs text-muted-foreground">
                  <div>File size: {block.fileSize}</div>
                  <div>Last updated: {new Date(block.lastUpdated).toLocaleDateString()}</div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-yellow-600">
                    ${block.price.toFixed(2)}
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
                      className="group/btn bg-yellow-600 hover:bg-yellow-700"
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
              No premium blocks found matching your criteria.
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
        <div className="mt-12 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:from-blue-950 dark:to-purple-950">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Custom Blocks?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can create custom blocks tailored to your specific requirements and brand guidelines.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Sales
                <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}