'use client'

import { useState, useEffect, useRef } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCartStore } from '@/store/cart-store'
import { 
  ShoppingCart, 
  ArrowLeft,
  CreditCard,
  Download,
  CheckCircle,
  Lock,
  Mail,
  User,
  Folder,
  HardDrive,
  FileArchive
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const { 
    items, 
    getTotalItems, 
    getTotalPrice, 
    hasPremiumItems, 
    clearCart 
  } = useCartStore()

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [isClient, setIsClient] = useState(false) // Track if we're on the client
  const [downloadLocation, setDownloadLocation] = useState('') // New state for download location
  const [showLocationInput, setShowLocationInput] = useState(false) // Control when to show location input
  const [isDownloading, setIsDownloading] = useState(false) // Track download state
  
  // Ref for card number input to handle cursor position
  const cardNumberRef = useRef<HTMLInputElement>(null)

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Format card number with spaces every 4 digits and handle cursor position
  const formatCardNumber = (value: string, previousValue: string) => {
    // Remove all non-digit characters
    const cleanedValue = value.replace(/\D/g, '');
    // Add space after every 4 digits
    const formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim();
    
    // Handle cursor position
    if (cardNumberRef.current) {
      const cursorPosition = cardNumberRef.current.selectionStart || 0;
      const isDeleting = value.length < previousValue.length;
      
      if (!isDeleting && cleanedValue.length > 4 && cleanedValue.length % 4 === 1) {
        // If we just added a digit that causes a space to be added, move cursor forward
        setTimeout(() => {
          if (cardNumberRef.current) {
            cardNumberRef.current.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
          }
        }, 0);
      }
    }
    
    return formattedValue;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      if (name === 'cardNumber') {
        return {
          ...prev,
          [name]: formatCardNumber(value, prev.cardNumber)
        };
      } else if (name === 'expiryDate') {
        // Format expiry date as MM/YY
        const cleanedValue = value.replace(/\D/g, '');
        if (cleanedValue.length >= 2) {
          return {
            ...prev,
            [name]: cleanedValue.substring(0, 2) + '/' + cleanedValue.substring(2, 4)
          };
        }
        return {
          ...prev,
          [name]: cleanedValue
        };
      } else {
        return {
          ...prev,
          [name]: value
        };
      }
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate a unique order ID only on the client
    const newOrderId = isClient ? `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : ''
    setOrderId(newOrderId)

    // In a real app, this would create the order in the database
    // and process payment if needed
    console.log('Order submitted:', {
      items,
      customer: formData,
      total: getTotalPrice(),
      orderId: newOrderId
    })

    // Simulate sending email with invoice and download link
    console.log(`Sending invoice and download link to: ${formData.email}`)
    console.log(`Download link: /download/${newOrderId}`)

    setIsProcessing(false)
    setOrderComplete(true)
  }

  // Function to simulate downloading files and trigger browser's save dialog
  const handleDownloadNow = async () => {
    setIsDownloading(true)
    
    try {
      // In a real application, this would be the actual URL to your ZIP file
      // For this example, we'll simulate a download with a dummy file
      
      // Create a dummy blob to simulate a file
      const dummyContent = `This is a dummy ZIP file for order ${orderId}. 
In a real application, this would contain all the purchased items.
Items: ${items.map(item => item.name).join(', ')}
Download location: ${downloadLocation || 'Default'}`;
      
      const blob = new Blob([dummyContent], { type: 'application/zip' });
      
      // Create a download link and trigger the browser's save dialog
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      // Set the filename - using the download location if provided
      const filename = downloadLocation 
        ? `${downloadLocation.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.zip` 
        : `purchase_${orderId}.zip`;
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsDownloading(false);
      }, 100);
      
      console.log(`Download triggered for: ${filename}`);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  }

  // New function to handle "Continue Shopping" button click
  const handleContinueShopping = () => {
    // Clear the cart first
    clearCart()
    // Then navigate to the checkout page which will show the empty cart
    router.push('/checkout')
  }

  // Show loading state during SSR
  if (!isClient) {
    return (
      <LayoutWrapper>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading checkout...</p>
          </div>
        </div>
      </LayoutWrapper>
    )
  }

  if (items.length === 0) {
    return (
      <LayoutWrapper>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
            <h1 className="mt-4 text-2xl font-bold text-foreground">Your cart is empty</h1>
            <p className="mt-2 text-muted-foreground">
              Add some components, templates, or blocks to get started.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/components">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Components
              </Link>
            </Button>
          </div>
        </div>
      </LayoutWrapper>
    )
  }

  if (orderComplete) {
    return (
      <LayoutWrapper showNavbar={false} showFooter={false}>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl">Order Complete!</CardTitle>
              <CardDescription>
                Thank you for your purchase. Your invoice has been sent to your email.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  You can now download your purchased items.
                </p>
                <p className="text-xs text-muted-foreground">
                  Order ID: {orderId}
                </p>
              </div>
              
              {/* Download Location Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Download Folder Name</Label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowLocationInput(!showLocationInput)}
                    className="h-8 px-2 text-xs"
                  >
                    {showLocationInput ? 'Cancel' : 'Customize'}
                  </Button>
                </div>
                
                {showLocationInput ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Folder className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="e.g., My Website Project"
                        value={downloadLocation}
                        onChange={(e) => setDownloadLocation(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This will be used as the filename for your download.
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {downloadLocation || `purchase_${orderId}`}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  onClick={handleDownloadNow}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Preparing Download...
                    </>
                  ) : (
                    <>
                      <FileArchive className="mr-2 h-4 w-4" />
                      Download Now
                    </>
                  )}
                </Button>
                
                <div className="text-xs text-center text-muted-foreground">
                  Clicking above will open your browser's save dialog
                </div>
                
                <Button variant="outline" className="w-full" onClick={handleContinueShopping}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/cart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          <p className="mt-2 text-muted-foreground">
            {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    We'll use this information to send your invoice and download links.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information - Only show if there are premium items */}
              {hasPremiumItems() && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Information
                    </CardTitle>
                    <CardDescription>
                      Your payment information is secure and encrypted.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        type="text"
                        required
                        value={formData.cardName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        ref={cardNumberRef}
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength={19} // 16 digits + 3 spaces
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          required
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          type="text"
                          placeholder="123"
                          required
                          value={formData.cvv}
                          onChange={handleInputChange}
                          maxLength={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Lock className="h-4 w-4" />
                      <span>Your payment information is encrypted and secure</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isProcessing}
                  className="min-w-[200px]"
                >
                  {isProcessing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {hasPremiumItems() ? (
                        <>
                          <CreditCard className="mr-2 h-4 w-4" />
                          Pay ${getTotalPrice().toFixed(2)}
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Get Free Items
                        </>
                      )}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
                            <Download className="h-6 w-6 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {item.name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Badge variant={item.tier === 'FREE' ? 'secondary' : 'default'} className="text-xs">
                            {item.tier}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {item.price === 0 ? 'Free' : `$${(item.price * item.quantity).toFixed(2)}`}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxes</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {hasPremiumItems() ? (
                    <div className="rounded-md bg-blue-50 p-3 dark:bg-blue-950">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                          Secure payment processing
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-md bg-green-50 p-3 dark:bg-green-950">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          No payment required
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
