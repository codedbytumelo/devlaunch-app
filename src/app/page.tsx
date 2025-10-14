import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Rocket, 
  Code, 
  Palette, 
  Zap, 
  Github, 
  ShoppingCart, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: Code,
      title: 'High-Quality Components',
      description: 'Production-ready components built with shadcn/ui and Tailwind CSS'
    },
    {
      icon: Palette,
      title: 'Beautiful Templates',
      description: 'Stunning templates that accelerate your development workflow'
    },
    {
      icon: Zap,
      title: 'Reusable Blocks',
      description: 'Pre-built UI blocks for common patterns and layouts'
    },
    {
      icon: Rocket,
      title: 'MVP Solutions',
      description: 'Complete minimum viable products to jumpstart your projects'
    }
  ]

  const stats = [
    { label: 'Components', value: '150+', icon: Code },
    { label: 'Templates', value: '50+', icon: Palette },
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Projects Built', value: '25K+', icon: TrendingUp }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge variant="secondary">v1.0</Badge>
              <Badge variant="outline">New</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Build Products
              <span className="text-primary"> Faster</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              High-quality templates, components, blocks, and MVPs built for modern developers. 
              Ship your next project in record time with our production-ready solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/components">
                  Explore Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Everything You Need to Ship Fast
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From individual components to complete MVPs, we've got you covered with 
              production-ready solutions that scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Explore Our Collections
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our curated collections of components, templates, blocks, and MVPs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Components',
                description: '150+ reusable UI components',
                href: '/components',
                items: ['Buttons', 'Forms', 'Navigation', 'Cards']
              },
              {
                title: 'Templates',
                description: '50+ complete page templates',
                href: '/templates',
                items: ['Landing Pages', 'Dashboards', 'Authentication', 'Blog']
              },
              {
                title: 'Blocks',
                description: '100+ pre-built UI sections',
                href: '/blocks',
                items: ['Headers', 'Features', 'Testimonials', 'Footers']
              },
              {
                title: 'MVPs',
                description: 'Complete starter applications',
                href: '/mvp',
                items: ['PYNE', 'Zukani', 'Nexora', 'More...']
              },
              {
                title: 'Tools',
                description: 'Developer productivity tools',
                href: '/tools',
                items: ['DevAI', 'Code Generators', 'Utilities', 'CLI Tools']
              },
              {
                title: 'Documentation',
                description: 'Comprehensive guides and API',
                href: '/documentation',
                items: ['Getting Started', 'API Reference', 'Examples', 'Best Practices']
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {category.title}
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link href={category.href}>
                      Explore {category.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who are shipping products faster with Devlaunch.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/components">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Browse Components
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/documentation">
                  Read Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}