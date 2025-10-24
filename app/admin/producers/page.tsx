"use client"

import { AuthGuard } from "@/components/auth-guard"
import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MapPin } from "lucide-react"
import { mockProducers } from "@/lib/mock-data"

export default function AdminProducersPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground">Producers</h1>
            <p className="text-muted-foreground">Manage all registered food producers</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockProducers.map((producer) => (
              <Card key={producer.id}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <img
                      src={producer.logo || "/placeholder.svg"}
                      alt={producer.companyName}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold text-foreground">{producer.companyName}</h3>
                      <p className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {producer.location}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{producer.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {producer.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Batches</p>
                      <p className="font-semibold text-foreground">{producer.totalBatches}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Scans</p>
                      <p className="font-semibold text-primary">{producer.totalScans.toLocaleString()}</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
