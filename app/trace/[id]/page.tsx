import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, MapPin, Calendar, Award, Leaf } from "lucide-react"
import { mockBatches, mockProducer } from "@/lib/mock-data"

export default function TracePage({ params }: { params: { id: string } }) {
  const batch = mockBatches.find((b) => b.id === params.id)

  if (!batch) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center gap-2 px-4 py-4">
          <Package className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">TraceFood</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img
            src={batch.images[0] || "/placeholder.svg"}
            alt={batch.productName}
            className="aspect-video w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="mb-4">
              <h1 className="mb-2 text-3xl font-bold text-balance text-foreground">{batch.productName}</h1>
              <p className="text-muted-foreground">Batch: {batch.batchNumber}</p>
            </div>

            {batch.story && <p className="mb-6 leading-relaxed text-foreground">{batch.story}</p>}

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Origin</p>
                  <p className="text-sm text-muted-foreground">{batch.origin}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Production Date</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(batch.productionDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Package className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Quantity</p>
                  <p className="text-sm text-muted-foreground">
                    {batch.quantity} {batch.unit}
                  </p>
                </div>
              </div>

              {batch.expiryDate && (
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Best Before</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(batch.expiryDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        {batch.certifications.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Certifications</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {batch.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Ingredients */}
        {batch.ingredients && batch.ingredients.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Ingredients</h2>
              </div>
              <ul className="space-y-2">
                {batch.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-foreground">
                    • {ingredient}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Producer Info */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">About the Producer</h2>
            <div className="flex items-start gap-4">
              {mockProducer.logo && (
                <img
                  src={mockProducer.logo || "/placeholder.svg"}
                  alt={mockProducer.companyName}
                  className="h-16 w-16 rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="mb-1 font-semibold text-foreground">{mockProducer.companyName}</h3>
                <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{mockProducer.description}</p>
                <p className="text-sm text-muted-foreground">
                  <MapPin className="mr-1 inline h-4 w-4" />
                  {mockProducer.location}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Verified by TraceFood • Building trust through transparency</p>
        </div>
      </footer>
    </div>
  )
}
