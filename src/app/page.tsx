"use client";


import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
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
  TrendingUp,
  Mail,
  Clock,
  Gift,
  Bell
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setEmail('')
  }

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

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Early Access',
      description: 'Be the first to access our premium components and templates'
    },
    {
      icon: Clock,
      title: 'Limited Spots Available',
      description: 'We\'re opening access in batches to ensure quality support'
    },
    {
      icon: Bell,
      title: 'Priority Notifications',
      description: 'Get notified as soon as your spot in the waiting list opens up'
    }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge variant="secondary">Coming Soon</Badge>
              <Badge variant="outline">Limited Access</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Get Early Access to
              <span className="text-primary"> Build Products Faster</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Join our exclusive waiting list for first access to our high-quality templates, components, blocks, and MVPs. 
              Limited spots available.
            </p>
            
            {/* Waiting List Form */}
            <div className="mt-10 max-w-md mx-auto">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Thank you! You've been added to our waiting list.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow"
                  />
                  <Button type="submit" size="lg" className="whitespace-nowrap">
                    Join Waiting List
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
              <p className="mt-3 text-sm text-muted-foreground">
                Join 2,500+ developers already on the waiting list. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Join Our Waiting List?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get exclusive benefits and be the first to access our premium development resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <benefit.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What You'll Get Access To
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our waiting list members will be the first to access these premium resources.
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

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Don't Miss Your Spot!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're opening access in limited batches. Join the waiting list now to secure your early access spot.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-6">
              <Button size="lg" asChild>
                <Link href="#waitlist-form">
                  <Mail className="mr-2 h-4 w-4" />
                  Join the Waiting List
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/devlaunchhq-hub" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Follow Updates
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Questions? <Link href="#" className="text-primary hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}