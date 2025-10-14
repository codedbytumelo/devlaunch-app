import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AnnouncementBanner() {
  return (
    <div className="border-b bg-primary text-primary-foreground">
      <div className="container flex items-center justify-center px-4 py-2 text-center">
        <div className="flex items-center justify-center space-x-2 w-full">
          <span className="text-sm font-medium">
            🚀 New SaaS landing page template coming soon!
          </span>
          <span className="text-sm opacity-90">
            Launch date: October 31, 2025
          </span>
        </div>
        <Button variant="ghost" size="sm" className="ml-4 h-auto p-1 text-primary-foreground hover:bg-primary/80">
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}