"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User } from "./types"
import { mockUser } from "./mock-data"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, companyName: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing auth token on mount
    const token = localStorage.getItem("tracefood_auth")
    if (token) {
      // In production, validate token with backend
      setUser(mockUser)
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login - in production, call your auth API
    await new Promise((resolve) => setTimeout(resolve, 1000))
    localStorage.setItem("tracefood_auth", "mock_token")
    setUser(mockUser)
  }

  const signup = async (name: string, email: string, companyName: string, password: string) => {
    // Mock signup - in production, call your auth API
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newUser: User = {
      id: "1",
      email,
      name,
      role: "producer",
      companyName,
      createdAt: new Date(),
    }
    localStorage.setItem("tracefood_auth", "mock_token")
    setUser(newUser)
  }

  const logout = () => {
    localStorage.removeItem("tracefood_auth")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
