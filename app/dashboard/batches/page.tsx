"use client"

import { useState } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { DashboardNav } from "@/components/dashboard-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye, Pencil, QrCode } from "lucide-react"
import Link from "next/link"
import { mockBatches } from "@/lib/mock-data"

export default function BatchesPage() {
  const [batches] = useState(mockBatches)

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <DashboardNav />
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Batches</h1>
              <p className="text-muted-foreground">Manage your product batches and traceability</p>
            </div>
            <Link href="/dashboard/batches/new">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Batch
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {batches.map((batch) => (
              <Card key={batch.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={batch.images[0] || "/placeholder.svg"}
                    alt={batch.productName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{batch.productName}</h3>
                      <Badge variant={batch.status === "active" ? "default" : "secondary"}>{batch.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{batch.batchNumber}</p>
                  </div>

                  <div className="mb-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium text-foreground">
                        {batch.quantity} {batch.unit}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Origin:</span>
                      <span className="font-medium text-foreground">{batch.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Scans:</span>
                      <span className="font-medium text-primary">{batch.scans}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/trace/${batch.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </Link>
                    <Link href={`/dashboard/batches/${batch.id}/edit`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <QrCode className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
