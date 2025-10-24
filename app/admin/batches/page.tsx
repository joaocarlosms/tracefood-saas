"use client"

import { AuthGuard } from "@/components/auth-guard"
import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"
import { mockBatches } from "@/lib/mock-data"

export default function AdminBatchesPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground">All Batches</h1>
            <p className="text-muted-foreground">View all product batches across the platform</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockBatches.map((batch) => (
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
                      <span className="text-muted-foreground">Producer:</span>
                      <span className="font-medium text-foreground">Artisan Farms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium text-foreground">
                        {batch.quantity} {batch.unit}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Scans:</span>
                      <span className="font-medium text-primary">{batch.scans}</span>
                    </div>
                  </div>

                  <Link href={`/trace/${batch.id}`} className="block">
                    <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                      <Eye className="h-4 w-4" />
                      View Public Page
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
