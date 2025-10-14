'use client'

import { notFound } from 'next/navigation'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCartStore } from '@/store/cart-store'
import { 
  ShoppingCart, 
  ArrowLeft,
  Download,
  Star,
  Eye,
  Heart,
  Share2,
  Code,
  Palette,
  Zap,
  Rocket,
  CheckCircle,
  ExternalLink,
  Github
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Sample component data - in a real app, this would come from the database
const sampleComponents = {
  '1': {
    id: '1',
    name: 'Modern Button Collection',
    description: 'A comprehensive set of modern, accessible buttons with various styles and states',
    price: 0,
    tier: 'FREE',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    purpose: 'UI Components',
    features: [
      'Multiple variants (primary, secondary, outline, ghost, link)',
      'Full accessibility support with ARIA labels',
      'Customizable styles and sizes',
      'Loading states and animations',
      'Icon support and positioning',
      'Responsive design',
      'Dark mode compatibility',
      'Hover and focus states'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 15420,
    rating: 4.8,
    category: 'Buttons',
    lastUpdated: '2024-01-15',
    documentation: 'https://documentation.example.com/button-collection',
    githubUrl: 'https://github.com/example/button-collection',
    demoUrl: 'https://demo.example.com/button-collection',
    installation: 'npm install @devlaunch/button-collection',
    usage: `import { Button } from '@devlaunch/button-collection'

export default function MyComponent() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}`,
    dependencies: [
      { name: 'react', version: '^18.0.0' },
      { name: 'typescript', version: '^5.0.0' },
      { name: 'tailwindcss', version: '^3.0.0' },
      { name: '@radix-ui/react-slot', version: '^1.0.0' }
    ],
    fileStructure: [
      'src/components/Button.tsx',
      'src/components/Button.types.ts',
      'src/components/Button.styles.ts',
      'src/components/Button.stories.tsx',
      'src/components/Button.test.tsx'
    ]
  },
  '2': {
    id: '2',
    name: 'Advanced Form Components',
    description: 'Production-ready form components with validation and error handling',
    price: 29.99,
    tier: 'PREMIUM',
    type: 'COMPONENT',
    technologies: ['React', 'TypeScript', 'Zod', 'React Hook Form', 'Tailwind CSS'],
    purpose: 'Forms & Input',
    features: [
      'Comprehensive form validation with Zod',
      'Real-time error handling and display',
      'Custom input components',
      'Multi-step form support',
      'Form submission handling',
      'Accessibility features',
      'Responsive design',
      'Customizable styling'
    ],
    imageUrl: '/devlaunch-logo.png',
    downloads: 8934,
    rating: 4.9,
    category: 'Forms',
    lastUpdated: '2024-01-20',
    documentation: 'https://documentation.example.com/form-components',
    githubUrl: 'https://github.com/example/form-components',
    demoUrl: 'https://demo.example.com/form-components',
    installation: 'npm install @devlaunch/form-components',
    usage: `import { Form, Input, SubmitButton } from '@devlaunch/form-components'

export default function MyForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" required />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  )
}`,
    dependencies: [
      { name: 'react', version: '^18.0.0' },
      { name: 'typescript', version: '^5.0.0' },
      { name: 'zod', version: '^3.0.0' },
      { name: 'react-hook-form', version: '^7.0.0' },
      { name: 'tailwindcss', version: '^3.0.0' }
    ],
    fileStructure: [
      'src/components/Form.tsx',
      'src/components/Input.tsx',
      'src/components/SubmitButton.tsx',
      'src/components/ErrorMessage.tsx',
      'src/components/Form.types.ts',
      'src/components/Form.utils.ts',
      'src/components/Form.stories.tsx',
      'src/components/Form.test.tsx'
    ]
  }
}

interface ComponentPageProps {
  params: { id: string }
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const component = sampleComponents[params.id as keyof typeof sampleComponents]
  const { addItem } = useCartStore()

  if (!component) {
    notFound()
  }

  const handleAddToCart = () => {
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
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/components">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant={component.tier === 'FREE' ? 'secondary' : 'default'}>
                      {component.tier}
                    </Badge>
                    <Badge variant="outline">{component.category}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground">{component.name}</h1>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {component.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-foreground">
                    {component.price === 0 ? 'Free' : `$${component.price.toFixed(2)}`}
                  </div>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">
                      {component.rating} ({component.downloads.toLocaleString()} downloads)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={component.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={component.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-4 w-4" />
                  Favorite
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="technical">Technical Details</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      {component.name} is a comprehensive solution for {component.purpose.toLowerCase()} 
                      built with modern web technologies. It provides a robust foundation for your 
                      applications with excellent developer experience and user accessibility.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1">
                          {component.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Quick Stats</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Downloads:</span>
                            <span>{component.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Rating:</span>
                            <span>{component.rating}/5.0</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Last Updated:</span>
                            <span>{new Date(component.lastUpdated).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {component.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="installation" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Package Manager</h4>
                      <div className="rounded-md bg-muted p-3">
                        <code className="text-sm">{component.installation}</code>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Usage Example</h4>
                      <div className="rounded-md bg-muted p-3">
                        <pre className="text-sm overflow-x-auto">
                          <code>{component.usage}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Documentation</h4>
                      <Button variant="outline" asChild>
                        <Link href={component.documentation} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Full Documentation
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Dependencies</h4>
                      <div className="space-y-2">
                        {component.dependencies.map((dep, index) => (
                          <div key={index} className="flex justify-between items-center p-2 rounded-md bg-muted">
                            <span className="font-medium">{dep.name}</span>
                            <Badge variant="outline">{dep.version}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold">File Structure</h4>
                      <div className="space-y-1">
                        {component.fileStructure.map((file, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <Code className="h-4 w-4 text-muted-foreground" />
                            <span>{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold">Purpose</h4>
                      <p className="text-muted-foreground">
                        This component is designed to solve {component.purpose.toLowerCase()} challenges 
                        in modern web applications. It provides a clean, maintainable, and scalable 
                        solution that follows best practices and industry standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={component.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={component.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Component Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Component Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <Badge variant="outline">{component.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline">{component.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier:</span>
                    <Badge variant={component.tier === 'FREE' ? 'secondary' : 'default'}>
                      {component.tier}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{component.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Downloads:</span>
                    <span>{component.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>{new Date(component.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle>Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}