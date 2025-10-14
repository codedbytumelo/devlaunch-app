"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Github, Menu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/store/cart-store"
import { ThemeAwareImage } from "@/components/theme-aware-image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const getTotalItems = useCartStore((state) => state.getTotalItems)

  const menuData = {
    Components: [
      { name: "Free Components", href: "/components/free", description: "High-quality free components" },
      { name: "Premium Components", href: "/components/premium", description: "Advanced premium components" },
      { name: "Explore All Components", href: "/components", description: "Browse our complete collection" },
    ],
    Templates: [
      { name: "Free Templates", href: "/templates/free", description: "Starter templates for quick setup" },
      { name: "Premium Templates", href: "/templates/premium", description: "Professional-grade templates" },
      { name: "Explore All Templates", href: "/templates", description: "Complete template library" },
    ],
    Blocks: [
      { name: "Free Blocks", href: "/blocks/free", description: "Essential UI blocks" },
      { name: "Premium Blocks", href: "/blocks/premium", description: "Advanced UI blocks" },
      { name: "Explore All Blocks", href: "/blocks", description: "Full block collection" },
    ],
    Resources: [
      { name: "Documentation", href: "/documentation", description: "Comprehensive guides and API reference" },
      { name: "Devlog", href: "/devlog", description: "Latest development updates" },
      { name: "Changelog", href: "/changelog", description: "Version history and updates" },
    ],
    Tools: [
      { name: "DevAI", href: "/tools/devai", description: "Build products using AI prompts" },
    ],
    MVP: [
      { name: "PYNE", href: "/mvp/pyne", description: "Unified monetization and business intelligence platform" },
      { name: "Zukani", href: "/mvp/zukani", description: "Business management software for tradespeople" },
      { name: "Nexora", href: "/mvp/nexora", description: "Procurement intelligence platform with AI insights" },
    ],
  }

  const ListItem = ({
    className,
    title,
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }) => (
    <NavigationMenuLink asChild>
      <a
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        href={href}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  )

  const MegaMenuContent = ({
    items,
    title,
  }: {
    items: { name: string; href: string; description: string }[]
    title: string
  }) => (
    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      <div className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Explore our collection of {title.toLowerCase()} built for modern development.
            </p>
          </a>
        </NavigationMenuLink>
      </div>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <ListItem title={item.name} href={item.href}>
              {item.description}
            </ListItem>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center space-x-2" href="/">
          <ThemeAwareImage
            lightSrc="/devlaunch-logo-light.png"
            darkSrc="/devlaunch-logo-dark.png"
            alt="Devlaunch Logo"
            width={102}
            height={114}
            className="h-8 w-8"
          />
          <span className="text-lg font-bold">Devlaunch</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {Object.entries(menuData).map(([title, items]) => (
              <NavigationMenuItem key={title}>
                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenuContent items={items} title={title} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
              {getTotalItems() > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="md:hidden px-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-4 px-4 py-3">
            {Object.entries(menuData).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-2">{title}</h3>
                <div className="space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
