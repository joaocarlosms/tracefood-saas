import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, Shield, BarChart3, Package } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">TraceFood</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-balance text-foreground lg:text-6xl">
          Build Trust Through
          <span className="text-primary"> Transparency</span>
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
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              View Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
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
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold text-balance text-foreground">Ready to Share Your Story?</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Join hundreds of food producers building consumer trust through transparency
        </p>
        <Link href="/signup">
          <Button size="lg" className="text-base">
            Get Started Free
          </Button>
        </Link>
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
