// app/pricing/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { Check, Star, ArrowRight, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const PricingPage = () => {
  const features = [
    'Unlimited access to all premium components',
    'All premium templates and blocks',
    'Priority customer support',
    'Access to new releases and updates',
    'Commercial usage license',
    'Source code access',
    'Private Discord community access',
    'Monthly exclusive workshops',
    'Early access to beta features',
    'Custom component requests',
  ]

  const comparisonFeatures = [
    { name: 'Free Components', free: true, premium: true },
    { name: 'Premium Components', free: false, premium: true },
    { name: 'Free Templates', free: true, premium: true },
    { name: 'Premium Templates', free: false, premium: true },
    { name: 'Free Blocks', free: true, premium: true },
    { name: 'Premium Blocks', free: false, premium: true },
    { name: 'Customer Support', free: 'Community', premium: 'Priority' },
    { name: 'Commercial License', free: false, premium: true },
    { name: 'Source Code Access', free: false, premium: true },
    { name: 'New Releases', free: 'Delayed', premium: 'Immediate' },
  ]

  const faqs = [
    {
      question: 'What is included in the All Access plan?',
      answer: 'The All Access plan gives you unlimited access to all our premium components, templates, and blocks. You also get priority support, commercial usage rights, source code access, and exclusive community benefits.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact us within 30 days for a full refund.'
    },
    {
      question: 'Can I use the components in commercial projects?',
      answer: 'Yes, the All Access plan includes a commercial license that allows you to use our components in any commercial project.'
    },
    {
      question: 'How often do you release new content?',
      answer: 'We release new components, templates, and blocks every month. All Access subscribers get immediate access to all new releases.'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <Gift className="w-3 h-3 mr-1" />
                Limited Time Offer
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get <span className="text-primary">All Access</span> to Our Entire Library
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Unlock every premium component, template, and block with our comprehensive All Access plan. Build faster, better, and with unlimited resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/checkout">
                    Get All Access - $99/month
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">
                    View Features
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-12">
                <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg text-sm font-medium">
                    POPULAR
                  </div>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-2">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">All Access</CardTitle>
                    <CardDescription>
                      Everything you need to build amazing products
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/checkout">
                        Get Started Now
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      30-day money-back guarantee
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section id="features" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See how our All Access plan compares to our free offerings
                </p>
              </div>
              
              <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
                <div className="grid grid-cols-12 border-b">
                  <div className="col-span-6 p-4 font-medium">Features</div>
                  <div className="col-span-3 p-4 text-center font-medium">Free</div>
                  <div className="col-span-3 p-4 text-center font-medium bg-primary/5">All Access</div>
                </div>
                
                {comparisonFeatures.map((feature, index) => (
                  <div key={index} className="grid grid-cols-12 border-b last:border-b-0">
                    <div className="col-span-6 p-4">{feature.name}</div>
                    <div className="col-span-3 p-4 text-center">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="text-muted-foreground">—</div>
                        )
                      ) : (
                        <span className="text-sm">{feature.free}</span>
                      )}
                    </div>
                    <div className="col-span-3 p-4 text-center bg-primary/5">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="text-muted-foreground">—</div>
                        )
                      ) : (
                        <span className="text-sm font-medium">{feature.premium}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Everything you need to know about the All Access plan
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Development?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are building faster and better with our All Access plan.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/checkout">
                  Get All Access Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-primary-foreground/80 text-sm mt-4">
                30-day money-back guarantee • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default PricingPage