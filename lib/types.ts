export interface User {
  id: string
  email: string
  name: string
  role: "producer" | "admin"
  companyName?: string
  createdAt: Date
}

export interface Batch {
  id: string
  producerId: string
  productName: string
  batchNumber: string
  productionDate: Date
  expiryDate?: Date
  quantity: number
  unit: string
  origin: string
  certifications: string[]
  ingredients?: string[]
  story?: string
  images: string[]
  qrCode?: string
  status: "active" | "archived"
  scans: number
  createdAt: Date
  updatedAt: Date
}

export interface Producer {
  id: string
  userId: string
  companyName: string
  description: string
  location: string
  logo?: string
  website?: string
  certifications: string[]
  totalBatches: number
  totalScans: number
  createdAt: Date
}

export interface Scan {
  id: string
  batchId: string
  timestamp: Date
  location?: string
  userAgent?: string
}
