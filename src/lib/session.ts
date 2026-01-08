import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function getSession() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    return session
}

export async function getCurrentUser() {
    const session = await getSession()

    if (!session) {
        return null
    }

    return {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image || "",
    }
}
