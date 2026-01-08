import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simple cookie-based auth check without using better-auth in middleware
// This avoids edge runtime issues
export async function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("better-auth.session_token")
    const hasSession = !!sessionCookie

    const isAuthPage = request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathname.startsWith("/register")
    const isDashboard = request.nextUrl.pathname.startsWith("/dashboard")

    // If user is logged in and trying to access auth pages, redirect to dashboard
    if (hasSession && isAuthPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    // If user is not logged in and trying to access dashboard, redirect to login
    if (!hasSession && isDashboard) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register"],
}
