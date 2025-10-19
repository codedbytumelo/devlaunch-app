import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Gift, 
  Bell,
  LayoutTemplate,
  Wrench,
  Puzzle,
  Rocket,
  FileText,
  Zap,
  Blocks,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { ThemeAwareImage } from '@/components/theme-aware-image'

export default function ExplorePage() {
  // Featured products data
  const featuredProducts = [
    {
      name: "Docify",
      category: "Tool",
      description: "AI-powered documentation generator that builds smarter project docs in seconds.",
      image: "/placeholder-docify.png",
      comingSoon: true
    },
    {
      name: "SaaS Starter",
      category: "Template",
      description: "Complete SaaS application template with authentication, billing, and dashboard.",
      image: "/placeholder-saas.png",
      comingSoon: false
    },
    {
      name: "UI Component Library",
      category: "Components",
      description: "100+ responsive components built with shadcn/ui and Tailwind CSS.",
      image: "/placeholder-components.png",
      comingSoon: false
    },
    {
      name: "Analytics Dashboard",
      category: "Template",
      description: "Beautiful analytics dashboard with charts, metrics, and data visualization.",
      image: "/placeholder-analytics.png",
      comingSoon: true
    }
  ]

  // Categories data
  const categories = [
    {
      title: "Templates",
      icon: LayoutTemplate,
      description: "Landing pages, dashboards, SaaS starters",
      items: [
        { name: "Landing Pages", comingSoon: false },
        { name: "SaaS Starters", comingSoon: true },
        { name: "Dashboards", comingSoon: false },
        { name: "Authentication", comingSoon: false }
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      description: "DevAI, automation, launch helpers",
      items: [
        { name: "DevAI", comingSoon: true },
        { name: "Code Generators", comingSoon: true },
        { name: "CLI Tools", comingSoon: false },
        { name: "Automation", comingSoon: true }
      ]
    },
    {
      title: "Components & Blocks",
      icon: Puzzle,
      description: "UI parts for building",
      items: [
        { name: "Navigation", comingSoon: false },
        { name: "Forms", comingSoon: false },
        { name: "Cards", comingSoon: false },
        { name: "Testimonials", comingSoon: true }
      ]
    },
    {
      title: "MVP Kits",
      icon: Rocket,
      description: "Prebuilt startup kits or demo ideas",
      items: [
        { name: "PYNE", comingSoon: true },
        { name: "Zukani", comingSoon: true },
        { name: "Nexora", comingSoon: true },
        { name: "Marketplace", comingSoon: true }
      ]
    }
  ]

  // How it works steps
  const howItWorks = [
    {
      icon: Search,
      title: "Explore tools and templates",
      description: "Browse our collection of ready-to-use products and resources."
    },
    {
      icon: Bell,
      title: "Join the waitlist",
      description: "Sign up to get notified when new products become available."
    },
    {
      icon: Gift,
      title: "Get notified when products go live",
      description: "Receive exclusive early access to our latest releases."
    },
    {
      icon: Zap,
      title: "Start building faster",
      description: "Accelerate your development with our production-ready solutions."
    }
  ]

  // Benefits
  const benefits = [
    "Save weeks of build time",
    "Launch faster with prebuilt MVPs",
    "Designed for developers and product founders",
    "Production-ready code and components"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Explore ready-to-launch products, tools, and templates
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                For developers and founders looking to ship faster with high-quality resources.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="text" 
                    placeholder="Search products, templates, tools..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Filter Tags */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">MVPs</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">SaaS</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">Tools</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">Templates</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">Components</Badge>
              </div>
              
              {/* CTA */}
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="#waitlist">
                    Join Waitlist to Get Early Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Featured Products & Templates
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our most popular resources for developers and founders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <ThemeAwareImage
                      lightSrc="/placeholder-light.png"
                      darkSrc="/placeholder-dark.png"
                      alt={product.name}
                      width={320}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Button 
                      className="w-full" 
                      variant={product.comingSoon ? "outline" : "default"}
                      asChild
                    >
                      <Link href={product.comingSoon ? "#waitlist" : "#"}>
                        {product.comingSoon ? "Notify Me" : "View Demo"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Explore by Category
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our offerings organized by type and use case.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-2">
                      <category.icon className="h-8 w-8 text-primary flex-shrink-0" />
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="space-y-3 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between">
                          <span className="text-sm">{item.name}</span>
                          {item.comingSoon ? (
                            <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">Available</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-auto" variant="outline" asChild>
                      <Link href="#waitlist">
                        Explore {category.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How Devlaunch Works Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                How Devlaunch Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started in just a few simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <Card key={index} className="text-center h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        {index < howItWorks.length - 1 && (
                          <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-border">
                            <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose Devlaunch?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Accelerate your development with our premium resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Get Early Access to Devlaunch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Be the first to test new products and tools. Join thousands of developers on our waiting list.
              </p>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="#waitlist">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}