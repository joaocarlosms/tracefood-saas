"use client"

import { AuthGuard } from "@/components/auth-guard"
import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Package, QrCode, TrendingUp } from "lucide-react"
import { mockProducers } from "@/lib/mock-data"

export default function AdminDashboardPage() {
  const totalProducers = mockProducers.length
  const totalBatches = mockProducers.reduce((sum, p) => sum + p.totalBatches, 0)
  const totalScans = mockProducers.reduce((sum, p) => sum + p.totalScans, 0)

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform overview and statistics</p>
          </div>

          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Producers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{totalProducers}</div>
                <p className="text-xs text-primary">+2 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Batches</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{totalBatches}</div>
                <p className="text-xs text-muted-foreground">Across all producers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Scans</CardTitle>
                <QrCode className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{totalScans.toLocaleString()}</div>
                <p className="text-xs text-primary">+18% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Engagement</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">92%</div>
                <p className="text-xs text-primary">+3% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Top Producers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Producers by Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockProducers
                  .sort((a, b) => b.totalScans - a.totalScans)
                  .map((producer) => (
                    <div
                      key={producer.id}
                      className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={producer.logo || "/placeholder.svg"}
                          alt={producer.companyName}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-foreground">{producer.companyName}</h3>
                          <p className="text-sm text-muted-foreground">{producer.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {producer.totalScans.toLocaleString()} scans
                        </p>
                        <p className="text-xs text-muted-foreground">{producer.totalBatches} batches</p>
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
