"use client"

import { AuthGuard } from "@/components/auth-guard"
import { DashboardNav } from "@/components/dashboard-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, QrCode, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"
import { mockBatches, mockProducer } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const totalScans = mockBatches.reduce((sum, batch) => sum + batch.scans, 0)
  const activeBatches = mockBatches.filter((b) => b.status === "active").length

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <DashboardNav />
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {mockProducer.companyName}</p>
          </div>

          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Batches</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{mockBatches.length}</div>
                <p className="text-xs text-muted-foreground">{activeBatches} active</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Scans</CardTitle>
                <QrCode className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{totalScans}</div>
                <p className="text-xs text-primary">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Scans/Batch</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{Math.round(totalScans / mockBatches.length)}</div>
                <p className="text-xs text-muted-foreground">Per batch</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Engagement</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">94%</div>
                <p className="text-xs text-primary">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Batches */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Batches</CardTitle>
              <Link href="/dashboard/batches">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBatches.slice(0, 3).map((batch) => (
                  <div
                    key={batch.id}
                    className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{batch.productName}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {batch.batchNumber}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {batch.quantity} {batch.unit} • {batch.origin}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{batch.scans} scans</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(batch.productionDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </AuthGuard>
  )
}
