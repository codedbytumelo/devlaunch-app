'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Calendar, 
  Wrench, 
  Users, 
  Smartphone,
  Star,
  ExternalLink,
  Play,
  Award,
  TrendingUp,
  Shield,
  Globe,
  MapPin,
  Clock,
  FileText,
  MessageSquare,
  Target,
  Palette,
  Image as ImageIcon,
  GitBranch,
  Brain,
  ArrowRightCircle,
  ArrowLeftCircle
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ZukaniPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent appointment scheduling with automated reminders and conflict detection'
    },
    {
      icon: Wrench,
      title: 'Inventory Management',
      description: 'Track tools, materials, and equipment in real-time across multiple job sites'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Manage your team, assign tasks, and track progress from a single dashboard'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Access all features on-the-go with our native mobile apps for iOS and Android'
    }
  ]

  const metrics = [
    { label: 'Active Trades', value: '15+', icon: Wrench },
    { label: 'Businesses Using', value: '3K+', icon: Users },
    { label: 'Jobs Managed', value: '50K+', icon: Calendar },
    { label: 'Time Saved', value: '40%', icon: Clock }
  ]

  const testimonials = [
    {
      quote: "Zukani has completely transformed how I run my electrical business. I'm saving 15 hours per week on admin tasks.",
      author: "David Martinez",
      role: "Electrical Contractor",
      avatar: "/avatar-4.jpg"
    },
    {
      quote: "The scheduling feature alone paid for itself in the first month. No more double bookings or missed appointments.",
      author: "Lisa Thompson",
      role: "Plumbing Business Owner",
      avatar: "/avatar-5.jpg"
    },
    {
      quote: "Finally, a business management tool that understands tradespeople. It's simple, powerful, and just works.",
      author: "Robert Johnson",
      role: "HVAC Specialist",
      avatar: "/avatar-6.jpg"
    }
  ]

  const technologies = [
    { name: 'React Native', icon: '📱' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Google Maps API', icon: '🗺️' },
    { name: 'Stripe', icon: '💳' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'AWS', icon: '☁️' }
  ]

  const brandColors = [
    { name: 'Primary Blue', value: '#3B82F6', description: 'Main brand color for buttons and highlights' },
    { name: 'Secondary Cyan', value: '#06B6D4', description: 'Secondary color for backgrounds and accents' },
    { name: 'Accent Green', value: '#10B981', description: 'Accent color for success and positive elements' },
    { name: 'Neutral Gray', value: '#64748B', description: 'Text and secondary elements' },
    { name: 'Light Gray', value: '#F1F5F9', description: 'Backgrounds and borders' },
    { name: 'White', value: '#FFFFFF', description: 'Cards and primary backgrounds' }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Star className="mr-1 h-3 w-3" />
                B2B Solution
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                ZUKANI
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Business management software for tradespeople
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                ZUKANI is designed specifically for trades businesses, providing tools for scheduling, inventory management, team coordination, and customer relationship management - all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
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
                    src="/zukani-dashboard.png"
                    alt="ZUKANI Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-400 text-gray-900 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <div>
                    <div className="font-bold">15 Hours Saved</div>
                    <div className="text-sm">Weekly average</div>
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
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400' 
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
                  Built for the Trades, By the Trades
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  ZUKANI was born from the real challenges faced by tradespeople every day. After years of frustration with generic business software that didn't understand the unique needs of trades businesses, we set out to create something better.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Industry-Specific</h3>
                      <p className="text-gray-600 dark:text-gray-400">Designed specifically for electricians, plumbers, HVAC technicians, and other trades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Mobile-First Approach</h3>
                      <p className="text-gray-600 dark:text-gray-400">Access your business data from the field with our mobile apps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">All-in-One Solution</h3>
                      <p className="text-gray-600 dark:text-gray-400">From scheduling to invoicing, everything you need in one platform</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Project Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q2 2023 - Market Research</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q3 2023 - MVP Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q4 2023 - Beta Testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q1 2024 - Public Launch</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Supported Trades</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Electrical</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Plumbing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">HVAC</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Carpentry</span>
                    </div>
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
                Powerful Features for Trades Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to manage your trades business efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
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
                Feature Deep Dive
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                    <h4 className="text-xl font-semibold">Smart Scheduling</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Intelligent scheduling system that optimizes routes, prevents conflicts, and sends automated reminders.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Drag-and-drop calendar</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Automated SMS reminders</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Route optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Wrench className="h-8 w-8 text-blue-600" />
                    <h4 className="text-xl font-semibold">Inventory Management</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Track tools, materials, and equipment across multiple job sites and warehouses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Barcode scanning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Low stock alerts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Purchase order management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                    <h4 className="text-xl font-semibold">Team Coordination</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Manage your team, assign tasks, and track progress in real-time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Task assignment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Time tracking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Performance analytics</span>
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
                Business Impact Metrics
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real results from trades businesses using ZUKANI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <metric.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-3xl">{metric.value}</CardTitle>
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Efficiency Improvements
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Scheduling Time</span>
                      <span className="text-gray-700 dark:text-gray-300">-75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Admin Tasks</span>
                      <span className="text-gray-700 dark:text-gray-300">-60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Fuel Costs</span>
                      <span className="text-gray-700 dark:text-gray-300">-40%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Customer Satisfaction</span>
                      <span className="text-gray-700 dark:text-gray-300">+85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Business Growth Indicators
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Revenue Growth</span>
                      <span className="text-gray-700 dark:text-gray-300">+45%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">New Customers</span>
                      <span className="text-gray-700 dark:text-gray-300">+65%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Jobs Completed</span>
                      <span className="text-gray-700 dark:text-gray-300">+55%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Team Productivity</span>
                      <span className="text-gray-700 dark:text-gray-300">+70%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
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
                Success Stories from Trades Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Hear from tradespeople who transformed their business with ZUKANI
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
                Built with modern, reliable technologies
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
                  Mobile Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Cross-platform mobile apps built with React Native for iOS and Android.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">React Native</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Native APIs integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Offline functionality</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Backend Services
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Scalable backend with real-time synchronization and cloud storage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Node.js & Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">MongoDB Atlas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Firebase Cloud Messaging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Third-Party Integrations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Seamless integration with popular business tools and services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Google Maps API</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Stripe Payments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">QuickBooks Online</span>
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
                Visual elements that define ZUKANI's brand presence
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
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <div className="h-96 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Globe className="h-24 w-24 text-gray-400" />
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                  System architecture and data flow diagram placeholder
                </p>
              </div>
            </div>

            {/* Marketing Branding */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Marketing Materials
              </h3>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Streamline Your Trades Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of trades businesses who are saving time and growing revenue with ZUKANI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              Schedule Demo
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
                  <div className="h-16 w-16 rounded-lg bg-purple-200 dark:bg-purple-900 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Previous Project</h3>
                    <p className="text-gray-600 dark:text-gray-400">PYNE</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/launchpad/pyne">
                    <ArrowLeftCircle className="mr-2 h-4 w-4" />
                    Previous Project
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="hidden md:block">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Palette className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Branding</p>
              </div>
            </div>

            <Card className="flex-1 max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-green-200 dark:bg-green-900 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Next Project</h3>
                    <p className="text-gray-600 dark:text-gray-400">Nexora</p>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/launchpad/nexora">
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