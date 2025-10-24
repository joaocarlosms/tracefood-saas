import type { User, Batch, Producer, Scan } from "./types"

export const mockUser: User = {
  id: "1",
  email: "producer@example.com",
  name: "John Smith",
  role: "producer",
  companyName: "Artisan Farms",
  createdAt: new Date("2024-01-15"),
}

export const mockAdminUser: User = {
  id: "admin-1",
  email: "admin@tracefood.com",
  name: "Admin User",
  role: "admin",
  createdAt: new Date("2024-01-01"),
}

export const mockProducer: Producer = {
  id: "1",
  userId: "1",
  companyName: "Artisan Farms",
  description: "Family-owned organic farm producing premium olive oil since 1985",
  location: "Tuscany, Italy",
  logo: "/placeholder.svg?key=rgxj4",
  website: "https://artisanfarms.example.com",
  certifications: ["Organic", "Fair Trade", "Non-GMO"],
  totalBatches: 24,
  totalScans: 1847,
  createdAt: new Date("2024-01-15"),
}

export const mockProducers: Producer[] = [
  mockProducer,
  {
    id: "2",
    userId: "2",
    companyName: "Mountain Dairy Co.",
    description: "Artisanal cheese makers in the Swiss Alps",
    location: "Gruyères, Switzerland",
    logo: "/placeholder.svg?key=dairy1",
    certifications: ["Organic", "PDO"],
    totalBatches: 18,
    totalScans: 892,
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    userId: "3",
    companyName: "Coastal Coffee Roasters",
    description: "Direct trade coffee roasters since 2010",
    location: "Portland, Oregon",
    logo: "/placeholder.svg?key=coffee1",
    certifications: ["Fair Trade", "Organic", "Rainforest Alliance"],
    totalBatches: 32,
    totalScans: 2341,
    createdAt: new Date("2024-01-20"),
  },
]

export const mockBatches: Batch[] = [
  {
    id: "1",
    producerId: "1",
    productName: "Extra Virgin Olive Oil",
    batchNumber: "EVOO-2024-001",
    productionDate: new Date("2024-03-15"),
    expiryDate: new Date("2026-03-15"),
    quantity: 500,
    unit: "bottles",
    origin: "Tuscany, Italy",
    certifications: ["Organic", "PDO"],
    ingredients: ["100% Organic Olives"],
    story:
      "Hand-picked olives from our century-old groves, cold-pressed within 4 hours of harvest to preserve maximum flavor and nutrients.",
    images: ["/olive-oil-bottles-in-tuscan-countryside.jpg", "/olive-grove-harvest.jpg"],
    qrCode: "https://tracefood.app/trace/1",
    status: "active",
    scans: 342,
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    producerId: "1",
    productName: "Organic Honey",
    batchNumber: "HON-2024-002",
    productionDate: new Date("2024-02-20"),
    quantity: 200,
    unit: "jars",
    origin: "Tuscany, Italy",
    certifications: ["Organic"],
    ingredients: ["100% Raw Wildflower Honey"],
    story:
      "Our bees forage on wildflowers across 50 acres of organic meadows, producing this golden, unfiltered honey.",
    images: ["/organic-honey-jars-with-wildflowers.jpg"],
    qrCode: "https://tracefood.app/trace/2",
    status: "active",
    scans: 156,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    producerId: "1",
    productName: "Aged Balsamic Vinegar",
    batchNumber: "BAL-2024-003",
    productionDate: new Date("2024-01-10"),
    quantity: 150,
    unit: "bottles",
    origin: "Modena, Italy",
    certifications: ["PDO", "Organic"],
    ingredients: ["Organic Grape Must"],
    story:
      "Aged for 12 years in traditional wooden barrels, this balsamic vinegar offers complex flavors of fig and cherry.",
    images: ["/aged-balsamic-vinegar-in-wooden-barrels.jpg"],
    qrCode: "https://tracefood.app/trace/3",
    status: "active",
    scans: 89,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
]

export const mockScans: Scan[] = [
  { id: "1", batchId: "1", timestamp: new Date("2024-03-20T10:30:00"), location: "New York, USA" },
  { id: "2", batchId: "1", timestamp: new Date("2024-03-21T14:15:00"), location: "London, UK" },
  { id: "3", batchId: "1", timestamp: new Date("2024-03-22T09:45:00"), location: "Paris, France" },
  { id: "4", batchId: "2", timestamp: new Date("2024-02-25T16:20:00"), location: "Berlin, Germany" },
  { id: "5", batchId: "2", timestamp: new Date("2024-02-26T11:10:00"), location: "Rome, Italy" },
]
