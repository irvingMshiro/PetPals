import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
    publicRoutes: ['/', '/profile']
})

export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};