'use client'

import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  Tag, 
  ExternalLink,
  Github,
  Download,
  Star,
  Zap,
  Wrench,
  Bug,
  BookOpen,
  Rocket,
  Plus,
  Minus,
  AlertTriangle
} from 'lucide-react'
import Link from 'next/link'

const changelogEntries = [
  {
    version: 'v1.0.0',
    date: '2024-01-15',
    type: 'major',
    title: 'Initial Release',
    description: '🎉 Devlaunch v1.0 is now live! Production-ready components, templates, and MVPs for modern developers.',
    changes: [
      {
        type: 'added',
        title: 'Component Library',
        items: [
          '150+ production-ready components',
          'Built with shadcn/ui and Tailwind CSS',
          'Full TypeScript support',
          'Accessibility compliant (WCAG 2.1 AA)',
          'Dark mode support',
          'Responsive design'
        ]
      },
      {
        type: 'added',
        title: 'Template Collection',
        items: [
          '50+ complete page templates',
          'Landing page templates',
          'Dashboard templates',
          'Authentication flows',
          'Blog templates',
          'E-commerce templates'
        ]
      },
      {
        type: 'added',
        title: 'UI Blocks',
        items: [
          '100+ reusable UI sections',
          'Hero sections',
          'Feature showcases',
          'Testimonial blocks',
          'Pricing tables',
          'Contact forms'
        ]
      },
      {
        type: 'added',
        title: 'MVP Solutions',
        items: [
          'PYNE - Monetization platform',
          'Zukani - Trades business management',
          'Nexora - Procurement intelligence',
          'Complete starter applications',
          'Production-ready codebase'
        ]
      },
      {
        type: 'added',
        title: 'Platform Features',
        items: [
          'Shopping cart functionality',
          'Secure checkout process',
          'Invoice generation',
          'Email notifications',
          'User accounts',
          'Order management'
        ]
      },
      {
        type: 'added',
        title: 'Documentation',
        items: [
          'Comprehensive guides',
          'API reference',
          'Video tutorials',
          'Best practices',
          'Examples and demos'
        ]
      }
    ],
    highlights: [
      'First major release',
      'Complete platform launch',
      'Production-ready components',
      'Full documentation'
    ],
    breaking: [
      'This is the initial release, no breaking changes'
    ],
    downloads: 15420,
    stars: 1234,
    githubUrl: 'https://github.com/devlaunch/releases/v1.0.0'
  },
  {
    version: 'v0.9.0',
    date: '2024-01-01',
    type: 'minor',
    title: 'Beta Release',
    description: '🚀 Beta release with core features and improved stability. Ready for testing and feedback!',
    changes: [
      {
        type: 'added',
        title: 'Core Components',
        items: [
          'Button component with all variants',
          'Card component with flexible layout',
          'Form components with validation',
          'Navigation components',
          'Modal system'
        ]
      },
      {
        type: 'improved',
        title: 'Performance',
        items: [
          '50% reduction in bundle size',
          'Improved loading times',
          'Better caching strategy',
          'Optimized images'
        ]
      },
      {
        type: 'fixed',
        title: 'Bug Fixes',
        items: [
          'Fixed accessibility issues in modals',
          'Resolved form validation bugs',
          'Fixed responsive design issues',
          'Improved error handling'
        ]
      }
    ],
    highlights: [
      'Beta release',
      'Core component library',
      'Performance improvements',
      'Bug fixes and stability'
    ],
    breaking: [],
    downloads: 8934,
    stars: 892,
    githubUrl: 'https://github.com/devlaunch/releases/v0.9.0'
  },
  {
    version: 'v0.8.0',
    date: '2023-12-15',
    type: 'minor',
    title: 'Alpha 3 - Enhanced Features',
    description: '✨ Enhanced features with improved theming, accessibility, and developer experience.',
    changes: [
      {
        type: 'added',
        title: 'Theming System',
        items: [
          'Custom theme support',
          'CSS variables for easy customization',
          'Multiple color schemes',
          'Dark mode implementation'
        ]
      },
      {
        type: 'added',
        title: 'Accessibility',
        items: [
          'ARIA labels and roles',
          'Keyboard navigation support',
          'Screen reader compatibility',
          'Focus management'
        ]
      },
      {
        type: 'improved',
        title: 'Developer Experience',
        items: [
          'Better TypeScript types',
          'Improved error messages',
          'Enhanced documentation',
          'More examples'
        ]
      }
    ],
    highlights: [
      'Enhanced theming',
      'Accessibility improvements',
      'Better developer experience'
    ],
    breaking: [
      'Updated theme configuration format',
      'Changed some component prop names'
    ],
    downloads: 5678,
    stars: 654,
    githubUrl: 'https://github.com/devlaunch/releases/v0.8.0'
  },
  {
    version: 'v0.7.0',
    date: '2023-12-01',
    type: 'minor',
    title: 'Alpha 2 - Template System',
    description: '🎨 Template system introduction with starter templates and improved documentation.',
    changes: [
      {
        type: 'added',
        title: 'Template System',
        items: [
          'Template generator CLI',
          'Starter templates',
          'Template customization',
          'Template documentation'
        ]
      },
      {
        type: 'added',
        title: 'Documentation',
        items: [
          'Getting started guide',
          'Component documentation',
          'API reference',
          'Examples and tutorials'
        ]
      },
      {
        type: 'improved',
        title: 'Build System',
        items: [
          'Faster build times',
          'Better error reporting',
          'Improved development experience',
          'Hot reload improvements'
        ]
      }
    ],
    highlights: [
      'Template system launch',
      'Comprehensive documentation',
      'Build system improvements'
    ],
    breaking: [],
    downloads: 3456,
    stars: 432,
    githubUrl: 'https://github.com/devlaunch/releases/v0.7.0'
  },
  {
    version: 'v0.6.0',
    date: '2023-11-15',
    type: 'minor',
    title: 'Alpha 1 - Initial Release',
    description: '🔥 First alpha release with core components and basic functionality.',
    changes: [
      {
        type: 'added',
        title: 'Initial Components',
        items: [
          'Basic button component',
          'Simple card component',
          'Input field component',
          'Basic layout components'
        ]
      },
      {
        type: 'added',
        title: 'Foundation',
        items: [
          'Project setup',
          'Build configuration',
          'Basic styling',
          'TypeScript configuration'
        ]
      },
      {
        type: 'added',
        title: 'Testing',
        items: [
          'Unit test setup',
          'Component testing',
          'E2E testing framework',
          'CI/CD pipeline'
        ]
      }
    ],
    highlights: [
      'First alpha release',
      'Core component foundation',
      'Testing infrastructure'
    ],
    breaking: [],
    downloads: 1234,
    stars: 234,
    githubUrl: 'https://github.com/devlaunch/releases/v0.6.0'
  }
]

const changeTypeIcons = {
  added: Plus,
  improved: Zap,
  fixed: Wrench,
  removed: Minus,
  security: AlertTriangle,
  deprecated: Bug
}

const changeTypeColors = {
  added: 'text-green-600 dark:text-green-400',
  improved: 'text-blue-600 dark:text-blue-400',
  fixed: 'text-purple-600 dark:text-purple-400',
  removed: 'text-red-600 dark:text-red-400',
  security: 'text-orange-600 dark:text-orange-400',
  deprecated: 'text-gray-600 dark:text-gray-400'
}

const versionTypeColors = {
  major: 'destructive',
  minor: 'default',
  patch: 'secondary'
}

export default function ChangelogPage() {
  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Changelog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest features, improvements, and bug fixes in Devlaunch. 
            We believe in transparency and keeping our community informed about every change.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Rocket className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{changelogEntries.length}</div>
              <div className="text-sm text-muted-foreground">Releases</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Plus className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-muted-foreground">Features Added</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Wrench className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-muted-foreground">Bug Fixes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Download className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">
                {changelogEntries.reduce((acc, entry) => acc + entry.downloads, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </CardContent>
          </Card>
        </div>

        {/* RSS Feed */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Subscribe to Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Get notified about new releases and updates
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/rss.xml">
                    <Download className="mr-2 h-4 w-4" />
                    RSS Feed
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://github.com/devlaunch/subscription">
                    <Star className="mr-2 h-4 w-4" />
                    Watch on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changelog Entries */}
        <div className="space-y-8">
          {changelogEntries.map((entry, index) => (
            <Card key={entry.version} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge variant={versionTypeColors[entry.type]}>
                        {entry.type.toUpperCase()}
                      </Badge>
                      <h2 className="text-2xl font-bold">{entry.version}</h2>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(entry.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{entry.title}</h3>
                    <p className="text-muted-foreground">{entry.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{entry.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{entry.stars}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={entry.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Highlights */}
                {entry.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {entry.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Changes */}
                <div className="space-y-4">
                  {entry.changes.map((change, changeIndex) => {
                    const Icon = changeTypeIcons[change.type as keyof typeof changeTypeIcons]
                    const colorClass = changeTypeColors[change.type as keyof typeof changeTypeColors]
                    
                    return (
                      <div key={changeIndex}>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Icon className={`h-4 w-4 mr-2 ${colorClass}`} />
                          {change.title}
                        </h4>
                        <ul className="space-y-1 ml-6">
                          {change.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                {/* Breaking Changes */}
                {entry.breaking.length > 0 && (
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold mb-3 flex items-center text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Breaking Changes
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {entry.breaking.map((change, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-red-600 dark:text-red-400">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quick Links */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    View release notes and discussions on GitHub
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={entry.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Never miss an update. Subscribe to our newsletter or watch us on GitHub.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="https://github.com/devlaunch">
                  <Github className="mr-2 h-4 w-4" />
                  Watch on GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/newsletter">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Subscribe to Newsletter
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              We follow semantic versioning and provide detailed release notes for every update.
            </p>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  )
}