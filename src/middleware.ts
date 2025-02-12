import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";


export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url })
  }
})
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

function isPublicRoute(req: NextRequest): boolean {
  // Implement your logic to determine if the route is public
  const publicRoutes = ['/public', '/login', '/signup'];
  return publicRoutes.some(route => req.url.includes(route));
}
