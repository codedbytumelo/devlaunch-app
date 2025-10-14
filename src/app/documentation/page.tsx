'use client'

import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  BookOpen, 
  Code, 
  Palette, 
  Zap, 
  Rocket,
  ExternalLink,
  Github,
  FileText,
  Video,
  Users,
  Star,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const documentationSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics and get up and running quickly',
    icon: Rocket,
    items: [
      { title: 'Introduction', description: 'Overview of Devlaunch platform', href: '/documentation/introduction' },
      { title: 'Installation', description: 'Set up Devlaunch in your project', href: '/documentation/installation' },
      { title: 'Quick Start', description: 'Build your first component', href: '/documentation/quick-start' },
      { title: 'Project Structure', description: 'Understanding the codebase', href: '/documentation/structure' },
    ]
  },
  {
    title: 'Components',
    description: 'Learn about our component library',
    icon: Code,
    items: [
      { title: 'Component Overview', description: 'Available components and their usage', href: '/documentation/components/overview' },
      { title: 'Styling Guide', description: 'Customize component appearance', href: '/documentation/components/styling' },
      { title: 'Accessibility', description: 'Building accessible components', href: '/documentation/components/accessibility' },
      { title: 'Best Practices', description: 'Component development patterns', href: '/documentation/components/best-practices' },
    ]
  },
  {
    title: 'Templates',
    description: 'Explore our template collection',
    icon: Palette,
    items: [
      { title: 'Template Guide', description: 'Using and customizing templates', href: '/documentation/templates/guide' },
      { title: 'Landing Pages', description: 'Marketing and landing page templates', href: '/documentation/templates/landing-pages' },
      { title: 'Dashboards', description: 'Admin and dashboard templates', href: '/documentation/templates/dashboards' },
      { title: 'Authentication', description: 'Auth flow templates', href: '/documentation/templates/authentication' },
    ]
  },
  {
    title: 'Blocks',
    description: 'Reusable UI blocks and sections',
    icon: Zap,
    items: [
      { title: 'Blocks Overview', description: 'Available UI blocks', href: '/documentation/blocks/overview' },
      { title: 'Hero Sections', description: 'Landing page hero blocks', href: '/documentation/blocks/hero' },
      { title: 'Feature Sections', description: 'Product feature showcases', href: '/documentation/blocks/features' },
      { title: 'Testimonials', description: 'Customer testimonial blocks', href: '/documentation/blocks/testimonials' },
    ]
  },
  {
    title: 'API Reference',
    description: 'Detailed API documentation',
    icon: BookOpen,
    items: [
      { title: 'REST API', description: 'RESTful API endpoints', href: '/documentation/api/rest' },
      { title: 'GraphQL API', description: 'GraphQL schema and queries', href: '/documentation/api/graphql' },
      { title: 'Webhooks', description: 'Webhook events and payloads', href: '/documentation/api/webhooks' },
      { title: 'Authentication', description: 'API authentication methods', href: '/documentation/api/authentication' },
    ]
  },
  {
    title: 'Guides',
    description: 'In-depth guides and tutorials',
    icon: FileText,
    items: [
      { title: 'Deployment', description: 'Deploy your applications', href: '/documentation/guides/deployment' },
      { title: 'Performance', description: 'Optimize for performance', href: '/documentation/guides/performance' },
      { title: 'Testing', description: 'Testing strategies and tools', href: '/documentation/guides/testing' },
      { title: 'Security', description: 'Security best practices', href: '/documentation/guides/security' },
    ]
  }
]

const quickLinks = [
  { title: 'Community', description: 'Join our developer community', href: '/community', icon: Users },
  { title: 'Video Tutorials', description: 'Watch our video guides', href: '/tutorials', icon: Video },
  { title: 'GitHub', description: 'Contribute to the project', href: 'https://github.com', icon: Github, external: true },
  { title: 'Examples', description: 'See live examples', href: '/examples', icon: ExternalLink },
]

export default function DocsPage() {
  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build amazing products with Devlaunch.
          </p>
          
          {/* Search */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <link.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4">{link.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={link.href} target={link.external ? '_blank' : '_self'} rel={link.external ? 'noopener noreferrer' : ''}>
                      {link.external ? 'Visit' : 'Learn More'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Documentation Sections</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documentationSections.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <section.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <Link 
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-sm group-hover:text-primary transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  Video Tutorials
                </CardTitle>
                <CardDescription>
                  Watch our comprehensive video tutorials to learn visually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div>
                      <div className="font-medium text-sm">Getting Started Guide</div>
                      <div className="text-xs text-muted-foreground">15 min</div>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div>
                      <div className="font-medium text-sm">Component Deep Dive</div>
                      <div className="text-xs text-muted-foreground">25 min</div>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div>
                      <div className="font-medium text-sm">Advanced Patterns</div>
                      <div className="text-xs text-muted-foreground">45 min</div>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Community Resources
                </CardTitle>
                <CardDescription>
                  Connect with other developers and get help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div>
                      <div className="font-medium text-sm">Discord Community</div>
                      <div className="text-xs text-muted-foreground">2.5K members</div>
                    </div>
                    <Button variant="outline" size="sm">Join</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div>
                      <div className="font-medium text-sm">GitHub Discussions</div>
                      <div className="text-xs text-muted-foreground">Active discussions</div>
                    </div>
                    <Button variant="outline" size="sm">Join</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div>
                      <div className="font-medium text-sm">Stack Overflow</div>
                      <div className="text-xs text-muted-foreground">Get help</div>
                    </div>
                    <Button variant="outline" size="sm">Ask</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contribute */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Github className="mr-2 h-5 w-5" />
              Contribute to Documentation
            </CardTitle>
            <CardDescription>
              Help us improve our documentation by contributing on GitHub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">1,234 stars on GitHub</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Found an issue? Help us improve by submitting a pull request
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    Contribute
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  )
}