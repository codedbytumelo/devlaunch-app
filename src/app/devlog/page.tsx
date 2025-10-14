'use client'

import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  User, 
  Tag, 
  ExternalLink,
  Github,
  MessageCircle,
  Share2,
  Rocket,
  Zap,
  Wrench,
  BookOpen,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

const devlogEntries = [
  {
    id: '1',
    title: 'Devlaunch v1.0 Launch',
    excerpt: 'We are excited to announce the official launch of Devlaunch v1.0! After months of development and testing, our platform is now ready to help developers build products faster.',
    content: `
We are thrilled to announce the official launch of Devlaunch v1.0! This marks a significant milestone in our journey to provide developers with high-quality components, templates, and MVPs.

## What's New in v1.0

### 🚀 Core Features
- **Component Library**: 150+ production-ready components built with shadcn/ui and Tailwind CSS
- **Template Collection**: 50+ complete templates for various use cases
- **UI Blocks**: 100+ reusable UI sections and blocks
- **MVP Solutions**: Complete starter applications including PYNE, Zukani, and Nexora

### 🎨 Design System
- Consistent design language across all components
- Dark mode support with proper contrast ratios
- Responsive design that works on all devices
- Accessibility-first approach with ARIA labels and keyboard navigation

### 🛠️ Developer Experience
- TypeScript support throughout
- Comprehensive documentation with examples
- Easy installation and setup
- Active community support

## What's Next

We're already working on v1.1 with exciting new features:
- More components and templates
- Advanced theming system
- Performance optimizations
- Integration with popular frameworks

Thank you to everyone who supported us during the beta phase. We couldn't have done it without our amazing community!
    `,
    author: 'Sarah Chen',
    date: '2024-01-15',
    tags: ['launch', 'v1.0', 'announcement'],
    category: 'Release',
    readTime: '5 min read',
    featured: true,
    imageUrl: '/devlaunch-logo.png'
  },
  {
    id: '2',
    title: 'Building Accessible Components: Our Journey',
    excerpt: 'Learn about our commitment to accessibility and how we ensure all our components meet WCAG 2.1 AA standards.',
    content: `
At Devlaunch, accessibility isn't an afterthought—it's a core principle that guides everything we build. Today, we want to share our journey and commitment to creating inclusive components.

## Why Accessibility Matters

Web accessibility ensures that people with disabilities can use your products effectively. This includes:
- Visual impairments (screen readers, magnifiers)
- Motor impairments (keyboard navigation, voice control)
- Cognitive disabilities (clear language, consistent design)
- Hearing impairments (captions, visual indicators)

## Our Accessibility Process

### 1. Design Phase
- Color contrast checking (minimum 4.5:1 for normal text)
- Focus indicators design
- Clear typography hierarchy
- Consistent interaction patterns

### 2. Development Phase
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader testing

### 3. Testing Phase
- Automated testing with axe-core
- Manual testing with screen readers
- Keyboard-only navigation testing
- Color blindness simulation

## Challenges We Overcame

### Complex Component States
One of our biggest challenges was handling complex component states while maintaining accessibility. For example, our multi-select dropdown component needed to:
- Announce selection changes to screen readers
- Manage focus properly
- Provide clear visual feedback
- Support keyboard navigation

### Mobile Accessibility
Ensuring accessibility on mobile devices required special attention to:
- Touch target sizes (minimum 44x44px)
- Gesture support
- Screen reader compatibility
- Zoom and scaling behavior

## Tools We Use

- **axe-core**: Automated accessibility testing
- **VoiceOver & NVDA**: Screen reader testing
- **WAVE**: Web accessibility evaluation tool
- **Color Contrast Analyzer**: Color contrast checking

## Results

Our commitment to accessibility has resulted in:
- 100% WCAG 2.1 AA compliance for all components
- Positive feedback from users with disabilities
- Improved SEO performance
- Better overall user experience for everyone

## Continuing the Journey

Accessibility is an ongoing process. We're committed to:
- Regular accessibility audits
- Community feedback incorporation
- Staying updated with WCAG guidelines
- Educating our users about accessibility best practices

Remember: building accessible products isn't just about compliance—it's about creating better experiences for everyone.
    `,
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    tags: ['accessibility', 'wcag', 'inclusive-design'],
    category: 'Development',
    readTime: '8 min read',
    featured: false,
    imageUrl: '/devlaunch-logo.png'
  },
  {
    id: '3',
    title: 'Performance Optimization: How We Achieved 90+ Lighthouse Scores',
    excerpt: 'Deep dive into our performance optimization strategies and the techniques we used to achieve excellent Lighthouse scores across all components.',
    content: `
Performance is a key feature of any web application. At Devlaunch, we've made it our mission to ensure that all our components are not just functional, but also blazing fast. Here's how we achieved consistent 90+ Lighthouse scores.

## Our Performance Philosophy

We believe that performance should be:
- **Measurable**: We track key metrics consistently
- **Continuous**: Optimization is an ongoing process
- **User-centric**: Focus on real user experience
- **Practical**: Balance performance with developer experience

## Key Optimization Techniques

### 1. Bundle Size Optimization

#### Tree Shaking
We implemented aggressive tree shaking to ensure only used code is included:
\`\`\`javascript
// Before: Import entire library
import * as Components from '@devlaunch/components'

// After: Import specific components
import { Button, Card } from '@devlaunch/components'
\`\`\`

#### Code Splitting
Dynamic imports for heavy components:
\`\`\`javascript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))
\`\`\`

### 2. Rendering Optimization

#### React.memo and useMemo
Strategic use of React optimization hooks:
\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => transformItem(item))
  }, [data])
  
  return <div>{processedData}</div>
})
\`\`\`

#### Virtualization
For large lists, we implemented virtual scrolling:
\`\`\`javascript
import { FixedSizeList as List } from 'react-window'

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
)

const MyList = ({ items }) => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={35}
  >
    {Row}
  </List>
)
\`\`\`

### 3. Asset Optimization

#### Image Optimization
- Next.js Image component for automatic optimization
- WebP format support
- Lazy loading for off-screen images
- Responsive image serving

#### CSS Optimization
- PurgeCSS for removing unused styles
- CSS custom properties for theming
- Critical CSS inlining
- Efficient selector patterns

### 4. Caching Strategy

#### Browser Caching
Optimized cache headers for static assets:
\`\`\`javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
\`\`\`

#### Service Worker
Offline support and caching:
\`\`\`javascript
// service-worker.js
const CACHE_NAME = 'devlaunch-v1'
const urlsToCache = [
  '/',
  '/static/js/main.js',
  '/static/css/main.css'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})
\`\`\`

## Measurement and Monitoring

### Key Metrics
We track these Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s

### Tools We Use
- **Lighthouse**: Automated performance auditing
- **WebPageTest**: Detailed performance analysis
- **Chrome DevTools**: Real-time performance monitoring
- **Sentry**: Performance error tracking

## Results

Our optimization efforts resulted in:
- **95+ Lighthouse scores** across all components
- **60% reduction** in bundle size
- **40% improvement** in FCP
- **50% reduction** in LCP
- **Zero layout shift** issues

## Continuous Optimization

Performance optimization is not a one-time task. We:
- Run performance audits weekly
- Monitor real user metrics
- Stay updated with latest optimization techniques
- Continuously refine our build process

## Tips for Your Projects

Based on our experience, here are key takeaways:
1. **Measure first**: You can't optimize what you don't measure
2. **Focus on impact**: Target optimizations that provide the biggest ROI
3. **Balance is key**: Don't sacrifice developer experience for marginal gains
4. **Keep learning**: Performance best practices evolve constantly

Remember: Fast websites lead to better user experience, higher conversion rates, and improved SEO. It's worth the investment!
    `,
    author: 'Alex Thompson',
    date: '2024-01-05',
    tags: ['performance', 'optimization', 'lighthouse'],
    category: 'Technical',
    readTime: '12 min read',
    featured: false,
    imageUrl: '/devlaunch-logo.png'
  },
  {
    id: '4',
    title: 'Community Spotlight: Amazing Projects Built with Devlaunch',
    excerpt: 'Celebrating our community members who have built incredible projects using Devlaunch components and templates.',
    content: `
One of the most rewarding aspects of building Devlaunch is seeing what our community creates with our tools. Today, we want to spotlight some amazing projects built with Devlaunch components and templates.

## Project Spotlights

### 1. EcoTracker - Sustainability Dashboard

**Built by**: Maria Garcia, Independent Developer
**Components Used**: Dashboard Cards, Charts, Navigation System
**Template**: Admin Dashboard Template

EcoTracker is a comprehensive sustainability dashboard that helps businesses track their environmental impact. Maria used our dashboard template and customized it with real-time data visualization.

**Key Features**:
- Real-time carbon footprint tracking
- Interactive charts and graphs
- Goal setting and progress tracking
- Team collaboration features

**What Maria Says**:
> "Devlaunch components saved me months of development time. The accessibility features were already built-in, and the performance optimizations meant I didn't have to worry about speed."

### 2. LearnFlow - Online Education Platform

**Built by**: David Kim, EdTech Startup
**Components Used**: Forms, Cards, Modals, Tables
**Template**: Learning Management System

LearnFlow is an innovative online education platform that makes learning interactive and engaging. David's team used our learning management template as a starting point and built upon it extensively.

**Key Features**:
- Interactive course content
- Progress tracking
- Student-teacher communication
- Assessment and grading system

**What David Says**:
> "The component quality is outstanding. We were able to focus on our core features instead of building UI components from scratch. The documentation made integration seamless."

### 3. HealthConnect - Telemedicine Platform

**Built by**: Dr. Sarah Johnson, Healthcare Startup
**Components Used**: Forms, Navigation, Cards, Buttons
**Template**: Healthcare Portal

HealthConnect connects patients with healthcare providers through a secure, HIPAA-compliant platform. Dr. Johnson's team leveraged our healthcare template and components to build a professional medical interface.

**Key Features**:
- Video consultations
- Appointment scheduling
- Medical records management
- Secure messaging

**What Dr. Johnson Says**:
> "As a healthcare platform, accessibility and security were our top priorities. Devlaunch components met all our requirements out of the box, which was crucial for our compliance needs."

### 4. Artisan - Creative Portfolio Platform

**Built by**: James Wilson, Creative Agency
**Components Used**: Gallery, Cards, Modals, Navigation
**Template**: Portfolio Template

Artisan is a beautiful portfolio platform for creative professionals to showcase their work. James and his team created a stunning visual experience using our portfolio template and custom components.

**Key Features**:
- Responsive image galleries
- Artist profiles and portfolios
- Client project management
- E-commerce integration

**What James Says**:
> "The design flexibility of Devlaunch components allowed us to create a unique visual identity while maintaining consistency. Our clients love the professional look and feel."

## Community Contributions

We're also grateful for the community members who have contributed back to Devlaunch:

### Open Source Contributions
- **@techwizard99**: Added 15 new components to the library
- **@designguru**: Improved our accessibility documentation
- **@perfexpert**: Optimized bundle sizes by 30%
- **@accessibility_champ**: Fixed 50+ accessibility issues

### Template Contributions
- **@startup_builder**: Created a SaaS template
- **@ecom_dev**: Built an e-commerce template
- **@mobile_first**: Contributed mobile-first templates

### Documentation Improvements
- **@doc_master**: Translated documentation to Spanish
- **@tutorial_king**: Created video tutorials
- **@code_ninja**: Added comprehensive code examples

## How to Get Featured

Want to see your project featured here? Here's how:

1. **Build Something Amazing**: Use Devlaunch components or templates in your project
2. **Share Your Story**: Tell us about your project and how Devlaunch helped
3. **Show Results**: Include metrics, user feedback, or business impact
4. **Give Back**: Consider contributing back to the project

Submit your project through our [GitHub Discussions](https://github.com/devlaunch/discussions) or join our [Discord community](https://discord.gg/devlaunch).

## What's Next for Community Features

We're working on more ways to showcase and support our community:

### Upcoming Features
- **Community Gallery**: Public showcase of projects built with Devlaunch
- **Developer Profiles**: Highlight community contributors
- **Success Stories**: Detailed case studies of successful projects
- **Community Events**: Virtual meetups and workshops

### How You Can Help
- Share your projects on social media with #BuiltWithDevlaunch
- Write blog posts about your experience
- Help other community members in our forums
- Contribute to our open source project

## Thank You

A huge thank you to everyone in our community. Your projects, feedback, and contributions make Devlaunch better every day. We're excited to see what you'll build next!

Keep creating, keep sharing, and keep inspiring others. Together, we're building the future of web development, one component at a time.
    `,
    author: 'Emma Davis',
    date: '2023-12-28',
    tags: ['community', 'showcase', 'projects'],
    category: 'Community',
    readTime: '10 min read',
    featured: false,
    imageUrl: '/devlaunch-logo.png'
  }
]

const categories = ['All', 'Release', 'Development', 'Technical', 'Community']
const tags = ['launch', 'v1.0', 'accessibility', 'performance', 'community', 'showcase']

export default function DevlogPage() {
  const featuredPost = devlogEntries.find(entry => entry.featured)
  const regularPosts = devlogEntries.filter(entry => !entry.featured)

  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Devlog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our development journey, learn from our experiences, and stay updated with the latest news and insights from the Devlaunch team.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="default">Featured</Badge>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/devlog/${featuredPost.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
              <div className="md:w-1/3 bg-muted flex items-center justify-center p-8">
                <div className="text-center">
                  <Rocket className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <div className="text-sm text-muted-foreground">Featured Article</div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/devlog/${post.id}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Stay Updated
            </CardTitle>
            <CardDescription>
              Subscribe to our newsletter to get the latest devlog posts, product updates, and exclusive content delivered to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-md mx-auto">
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{devlogEntries.length}</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <User className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-muted-foreground">Contributors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-muted-foreground">Comments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Share2 className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">2.5K</div>
              <div className="text-sm text-muted-foreground">Social Shares</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}