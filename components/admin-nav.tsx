"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Package, LayoutDashboard, Users, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function AdminNav() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/producers", label: "Producers", icon: Users },
    { href: "/admin/batches", label: "All Batches", icon: Package },
  ]

  return (
    <div className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-8">
        <Link href="/admin" className="flex items-center gap-2">
          <Package className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">TraceFood Admin</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button variant={isActive ? "secondary" : "ghost"} className={cn("gap-2", isActive && "bg-secondary")}>
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">{user?.name}</p>
          <p className="text-xs text-muted-foreground">Administrator</p>
        </div>
        <Button variant="ghost" size="icon" onClick={logout}>
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
