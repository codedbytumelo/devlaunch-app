'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  BarChart, 
  DollarSign, 
  Users, 
  Zap,
  Star,
  ExternalLink,
  Play,
  Calendar,
  Award,
  TrendingUp,
  Globe,
  CreditCard,
  MessageSquare,
  Palette,
  Image as ImageIcon,
  GitBranch,
  ArrowRightCircle,
  ArrowLeftCircle,
  Wrench
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PynePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Real-time analytics and insights to drive your business decisions'
    },
    {
      icon: DollarSign,
      title: 'Monetization Tools',
      description: 'Diverse revenue streams including subscriptions, donations, and digital products'
    },
    {
      icon: Users,
      title: 'Audience Management',
      description: 'Segment and engage with your audience through targeted campaigns'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline workflows with powerful automation tools and integrations'
    }
  ]

  const metrics = [
    { label: 'Monthly Active Users', value: '50K+', icon: Users },
    { label: 'Revenue Generated', value: '$2.5M+', icon: DollarSign },
    { label: 'Creators Served', value: '5K+', icon: Star },
    { label: 'Integration Partners', value: '25+', icon: Zap }
  ]

  const testimonials = [
    {
      quote: "PYNE transformed how I monetize my content. The analytics alone helped me increase revenue by 40%.",
      author: "Sarah Johnson",
      role: "Content Creator",
      avatar: "/avatar-1.jpg"
    },
    {
      quote: "The automation features saved me 10 hours per week. I can focus on creating while PYNE handles the business.",
      author: "Michael Chen",
      role: "Digital Artist",
      avatar: "/avatar-2.jpg"
    },
    {
      quote: "Best monetization platform I've used. The dashboard is intuitive and the support is exceptional.",
      author: "Emma Williams",
      role: "Podcast Host",
      avatar: "/avatar-3.jpg"
    }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Stripe', icon: '💳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'GraphQL', icon: '🔷' }
  ]

  const brandColors = [
    { name: 'Primary Purple', value: '#8B5CF6', description: 'Main brand color for buttons and highlights' },
    { name: 'Secondary Indigo', value: '#6366F1', description: 'Secondary color for backgrounds and accents' },
    { name: 'Accent Pink', value: '#EC4899', description: 'Accent color for CTAs and important elements' },
    { name: 'Neutral Gray', value: '#6B7280', description: 'Text and secondary elements' },
    { name: 'Light Gray', value: '#F3F4F6', description: 'Backgrounds and borders' },
    { name: 'White', value: '#FFFFFF', description: 'Cards and primary backgrounds' }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                <Star className="mr-1 h-3 w-3" />
                Featured Product
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                PYNE
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Unified monetization and business intelligence platform for creators
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                PYNE empowers creators and businesses to monetize their content, understand their audience, and grow their revenue through intelligent analytics and automation tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-2">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/pyne-dashboard.png"
                    alt="PYNE Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6" />
                  <div>
                    <div className="font-bold">40% Revenue Growth</div>
                    <div className="text-sm">Average for creators</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['overview', 'features', 'metrics', 'testimonials', 'tech', 'branding'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab 
                  ? 'border-purple-600 text-purple-600 dark:text-purple-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Revolutionizing Creator Monetization
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  PYNE was built to solve the biggest challenges faced by creators and businesses in the digital economy. From fragmented monetization tools to lack of actionable insights, we've created a unified platform that addresses these pain points head-on.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">All-in-One Solution</h3>
                      <p className="text-gray-600 dark:text-gray-400">Combine multiple revenue streams in a single dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Data-Driven Insights</h3>
                      <p className="text-gray-600 dark:text-gray-400">Make informed decisions with real-time analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Automation at Scale</h3>
                      <p className="text-gray-600 dark:text-gray-400">Save time with intelligent workflows and integrations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Project Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q1 2023 - Concept & Research</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q2 2023 - MVP Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q3 2023 - Beta Launch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q4 2023 - Public Release</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700 dark:text-gray-300">Best SaaS Platform 2023</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700 dark:text-gray-300">Top 100 Startups to Watch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700 dark:text-gray-300">Excellence in Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activeTab === 'features' && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful Features for Creators
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to monetize, analyze, and grow your audience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                In-Depth Feature Showcase
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart className="h-8 w-8 text-purple-600" />
                    <h4 className="text-xl font-semibold">Analytics Dashboard</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive analytics dashboard with real-time data visualization and custom reports.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Revenue tracking by source</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Audience demographics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Content performance metrics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <CreditCard className="h-8 w-8 text-purple-600" />
                    <h4 className="text-xl font-semibold">Monetization Hub</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Multiple monetization options including subscriptions, donations, and digital products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Subscription management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">One-time payments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Digital product sales</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                    <h4 className="text-xl font-semibold">Automation Engine</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Automate repetitive tasks and integrate with your favorite tools.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Email automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Social media posting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Third-party integrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Metrics Section */}
      {activeTab === 'metrics' && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Impact & Growth Metrics
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real numbers showing PYNE's success and impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <metric.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-3xl">{metric.value}</CardTitle>
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Revenue Growth Analysis
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Q1 2023</span>
                      <span className="text-gray-700 dark:text-gray-300">$125K</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Q2 2023</span>
                      <span className="text-gray-700 dark:text-gray-300">$325K</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Q3 2023</span>
                      <span className="text-gray-700 dark:text-gray-300">$680K</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Q4 2023</span>
                      <span className="text-gray-700 dark:text-gray-300">$1.2M</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  User Engagement Metrics
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Daily Active Users</span>
                      <span className="text-gray-700 dark:text-gray-300">15K+</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Session Duration</span>
                      <span className="text-gray-700 dark:text-gray-300">12 min avg</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Feature Adoption</span>
                      <span className="text-gray-700 dark:text-gray-300">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Retention Rate</span>
                      <span className="text-gray-700 dark:text-gray-300">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {activeTab === 'testimonials' && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real stories from creators who've transformed their business with PYNE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      {activeTab === 'tech' && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Built with modern, scalable technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
              {technologies.map((tech, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {tech.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Frontend Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built with React and TypeScript for a type-safe, maintainable codebase.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">React 18 with Hooks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">TypeScript for type safety</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tailwind CSS for styling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Backend Infrastructure
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Scalable Node.js backend with PostgreSQL for data persistence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Node.js with Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">PostgreSQL database</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Redis for caching</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  DevOps & Deployment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Automated CI/CD pipeline with cloud infrastructure on AWS.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">AWS EC2 & S3</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Docker containers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">GitHub Actions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Branding Section */}
      {activeTab === 'branding' && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Brand Identity & Design System
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Visual elements that define PYNE's brand presence
              </p>
            </div>

            {/* Brand Colors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Brand Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brandColors.map((color, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div 
                      className="h-32 w-full" 
                      style={{ backgroundColor: color.value }}
                    ></div>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">{color.name}</CardTitle>
                      <CardDescription>{color.description}</CardDescription>
                      <div className="mt-2 text-sm font-mono">{color.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Logo Concepts */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Logo Concepts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="h-48 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">Concept {item}</CardTitle>
                      <CardDescription>Logo idea placeholder</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Wireframes */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Wireframes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="h-64 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <ImageIcon className="h-16 w-16 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">Wireframe {item}</CardTitle>
                      <CardDescription>Interface wireframe placeholder</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Workflow Diagrams */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Workflow Diagrams
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="h-64 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <GitBranch className="h-16 w-16 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">Workflow {item}</CardTitle>
                      <CardDescription>Process flow diagram placeholder</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Topology Diagrams */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                System Topology
              </h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg mb-8">
                <div className="h-96 w-full bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
                  <Globe className="h-24 w-24 text-gray-400" />
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                    System architecture and data flow diagram placeholder
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="h-48 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">Marketing Asset {item}</CardTitle>
                      <CardDescription>Branding material placeholder</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Creator Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already growing their revenue with PYNE
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Card className="flex-1 max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Previous Project</h3>
                    <p className="text-gray-600 dark:text-gray-400">Coming Soon</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" disabled>
                  <ArrowLeftCircle className="mr-2 h-4 w-4" />
                  Previous Project
                </Button>
              </CardContent>
            </Card>

            <div className="hidden md:block">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Branding</p>
              </div>
            </div>

            <Card className="flex-1 max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-blue-200 dark:bg-blue-900 flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Next Project</h3>
                    <p className="text-gray-600 dark:text-gray-400">Zukani</p>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/launchpad/zukani">
                    Next Project
                    <ArrowRightCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}