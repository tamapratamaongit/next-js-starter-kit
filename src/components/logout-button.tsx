"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { LogOut, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function LogoutButton() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await authClient.signOut()
            router.push("/login")
            router.refresh()
        } catch (error) {
            console.error("Logout error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing out...
                </>
            ) : (
                <>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </>
            )}
        </Button>
    )
}
