'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  BarChart, 
  Target, 
  Globe,
  Star,
  ExternalLink,
  Play,
  Award,
  TrendingUp,
  Shield,
  Search,
  FileText,
  MessageSquare,
  Database,
  Zap
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NexoraPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide actionable procurement intelligence'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor spending patterns and identify opportunities for cost optimization'
    },
    {
      icon: Target,
      title: 'Supplier Intelligence',
      description: 'Evaluate and compare suppliers based on performance, risk, and compliance'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Access procurement data and insights from markets worldwide'
    }
  ]

  const metrics = [
    { label: 'Countries Covered', value: '50+', icon: Globe },
    { label: 'Suppliers Analyzed', value: '100K+', icon: Target },
    { label: 'Data Points', value: '10M+', icon: Database },
    { label: 'Cost Savings', value: '25%', icon: TrendingUp }
  ]

  const testimonials = [
    {
      quote: "Nexora's AI insights helped us identify $2M in savings opportunities we had completely missed.",
      author: "Jennifer Wong",
      role: "Procurement Director",
      avatar: "/avatar-7.jpg"
    },
    {
      quote: "The supplier intelligence platform reduced our vendor evaluation time by 80% while improving quality.",
      author: "Marcus Johnson",
      role: "Supply Chain Manager",
      avatar: "/avatar-8.jpg"
    },
    {
      quote: "Best procurement intelligence platform we've used. The AI predictions are surprisingly accurate.",
      author: "Sarah Chen",
      role: "CFO",
      avatar: "/avatar-9.jpg"
    }
  ]

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Elasticsearch', icon: '🔍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Tableau', icon: '📊' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'GraphQL', icon: '🔷' }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950 dark:to-purple-900">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                <Star className="mr-1 h-3 w-3" />
                AI Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                NEXORA
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Procurement intelligence platform with AI insights
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                NEXORA leverages artificial intelligence and machine learning to transform procurement processes, providing actionable insights that drive cost savings, risk reduction, and supplier performance optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
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
                    src="/nexora-dashboard.png"
                    alt="NEXORA Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-400 text-gray-900 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6" />
                  <div>
                    <div className="font-bold">25% Cost Reduction</div>
                    <div className="text-sm">Average for clients</div>
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
            {['overview', 'features', 'metrics', 'testimonials', 'tech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab 
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' 
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
                  Intelligent Procurement for the Modern Enterprise
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  NEXORA was developed to address the complex challenges faced by procurement professionals in today's global business environment. From fragmented data sources to lack of predictive insights, our platform provides a comprehensive solution powered by cutting-edge AI technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">AI-Driven Analysis</h3>
                      <p className="text-gray-600 dark:text-gray-400">Machine learning models analyze procurement patterns and predict future trends</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Comprehensive Data</h3>
                      <p className="text-gray-600 dark:text-gray-400">Access to millions of data points from global markets and suppliers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Actionable Insights</h3>
                      <p className="text-gray-600 dark:text-gray-400">Turn complex data into clear recommendations for cost optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Project Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q3 2022 - Research & Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q1 2023 - AI Model Training</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q3 2023 - Beta Launch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-700 dark:text-gray-300">Q1 2024 - Enterprise Release</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Innovations</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Proprietary AI algorithms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Real-time data processing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">Predictive analytics</span>
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
                Advanced AI-Powered Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Cutting-edge capabilities for intelligent procurement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
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
                Deep Dive into AI Capabilities
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="h-8 w-8 text-indigo-600" />
                    <h4 className="text-xl font-semibold">Predictive Analytics</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Advanced machine learning models predict market trends, price fluctuations, and supplier risks.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Price forecasting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Risk assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Market analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Search className="h-8 w-8 text-indigo-600" />
                    <h4 className="text-xl font-semibold">Supplier Intelligence</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive evaluation of suppliers based on performance, compliance, and financial health.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Performance scoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Compliance monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Financial analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart className="h-8 w-8 text-indigo-600" />
                    <h4 className="text-xl font-semibold">Spend Optimization</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Identify cost-saving opportunities and optimize spending across categories and suppliers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Spend analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Category management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Cost reduction</span>
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
                Platform Performance Metrics
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Measurable impact on procurement operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <metric.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    <CardTitle className="text-3xl">{metric.value}</CardTitle>
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Cost Savings Achieved
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Direct Materials</span>
                      <span className="text-gray-700 dark:text-gray-300">-30%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Indirect Spend</span>
                      <span className="text-gray-700 dark:text-gray-300">-25%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Services</span>
                      <span className="text-gray-700 dark:text-gray-300">-20%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Total Cost of Ownership</span>
                      <span className="text-gray-700 dark:text-gray-300">-25%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Process Efficiency Gains
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Procurement Cycle Time</span>
                      <span className="text-gray-700 dark:text-gray-300">-60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Supplier Onboarding</span>
                      <span className="text-gray-700 dark:text-gray-300">-70%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Compliance Checks</span>
                      <span className="text-gray-700 dark:text-gray-300">-80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Data Processing</span>
                      <span className="text-gray-700 dark:text-gray-300">-90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
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
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                How NEXORA is transforming procurement for leading organizations
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
                Powered by cutting-edge AI and data technologies
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
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  AI & Machine Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  State-of-the-art machine learning models for predictive analytics and natural language processing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">TensorFlow & PyTorch</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Natural Language Processing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Time Series Forecasting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Infrastructure
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Scalable data infrastructure for processing millions of procurement records in real-time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">PostgreSQL & TimescaleDB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Elasticsearch</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Apache Kafka</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900 dark:to-rose-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Cloud & DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Enterprise-grade cloud infrastructure with automated deployment and monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">AWS & Google Cloud</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Kubernetes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">CI/CD Pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies who are already optimizing their procurement with NEXORA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}