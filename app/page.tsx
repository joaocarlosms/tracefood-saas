import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, Shield, BarChart3, Package, Leaf, Apple, Wheat, Coffee, Fish, Pizza, Beef, Carrot } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="relative">
              <Package className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-xl -z-10"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              TraceFood
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hover:opacity-80 transition-opacity">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary transition-opacity hover:opacity-90">
                <span className="relative z-10">Get Started</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-32">
            <Leaf className="h-16 w-16 text-primary/40 animate-float delay-1" />
          </div>
          <div className="absolute left-1/4 top-16">
            <Apple className="h-12 w-12 text-primary/40 animate-float-reverse delay-2" />
          </div>
          <div className="absolute left-1/3 top-48">
            <Wheat className="h-14 w-14 text-primary/40 animate-float delay-3" />
          </div>
          <div className="absolute right-1/4 top-24">
            <Coffee className="h-12 w-12 text-primary/40 animate-float-reverse delay-4" />
          </div>
          <div className="absolute -right-4 top-40">
            <Fish className="h-16 w-16 text-primary/40 animate-float delay-2" />
          </div>
          <div className="absolute left-1/5 bottom-32">
            <Pizza className="h-14 w-14 text-primary/40 animate-float-reverse delay-1" />
          </div>
          <div className="absolute right-1/3 bottom-48">
            <Beef className="h-12 w-12 text-primary/40 animate-float delay-4" />
          </div>
          <div className="absolute right-1/5 bottom-24">
            <Carrot className="h-14 w-14 text-primary/40 animate-float-reverse delay-3" />
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/30"></div>
          <div className="absolute inset-0 opacity-60 mix-blend-soft-light bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.4),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(var(--primary-rgb),0.3),transparent_50%)]"></div>
        </div>
        <div className="container relative mx-auto px-4 py-32 text-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse delay-700"></div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-balance text-foreground lg:text-6xl">
              Build Trust Through
              <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Transparency</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              TraceFood empowers food producers to share their story with consumers. Create QR-enabled product pages that
              showcase your origin, certifications, and craftsmanship.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="text-base">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="text-base bg-transparent backdrop-blur-sm">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.1),transparent_40%)]"></div>
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-10 top-1/4">
            <Wheat className="h-14 w-14 text-primary/30 animate-float delay-2" />
          </div>
          <div className="absolute right-10 top-1/3">
            <Coffee className="h-16 w-16 text-primary/30 animate-float-reverse delay-3" />
          </div>
          <div className="absolute left-1/4 bottom-1/4">
            <Apple className="h-12 w-12 text-primary/30 animate-float delay-4" />
          </div>
          <div className="absolute right-1/4 bottom-1/3">
            <Leaf className="h-14 w-14 text-primary/30 animate-float-reverse delay-1" />
          </div>
        </div>
        <div className="container relative mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-balance text-foreground lg:text-4xl">
            Everything You Need for Food Traceability
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">QR Code Generation</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Instantly generate unique QR codes for each batch that link to detailed product stories
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Certification Display</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Showcase your organic, fair trade, and quality certifications to build consumer confidence
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Analytics Dashboard</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Track QR code scans, engagement metrics, and consumer interest in real-time
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Batch Management</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Easily manage product batches with production dates, origins, and ingredient details
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(var(--primary-rgb),0.1),transparent_40%)]"></div>
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-20 top-20">
            <Fish className="h-16 w-16 text-primary/30 animate-float delay-3" />
          </div>
          <div className="absolute right-20 top-32">
            <Carrot className="h-14 w-14 text-primary/30 animate-float-reverse delay-2" />
          </div>
          <div className="absolute left-1/3 bottom-20">
            <Pizza className="h-12 w-12 text-primary/30 animate-float delay-1" />
          </div>
          <div className="absolute right-1/3 bottom-32">
            <Beef className="h-14 w-14 text-primary/30 animate-float-reverse delay-4" />
          </div>
        </div>
        <div className="container relative mx-auto px-4 py-32 text-center">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"></div>
            <h2 className="mb-6 text-4xl font-bold text-balance text-foreground lg:text-5xl">Ready to Share Your Story?</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Join hundreds of food producers building consumer trust through transparency
            </p>
            <Link href="/signup">
              <Button size="lg" className="text-base relative bg-primary hover:bg-primary/90">
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 hover:opacity-100 transition-opacity"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TraceFood. Building trust through transparency.</p>
        </div>
      </footer>
    </div>
  )
}
