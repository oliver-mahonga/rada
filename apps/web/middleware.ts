import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Get the token from cookies 
  // (Note: localStorage isn't accessible in Middleware, so we'll 
  // need a small tweak in your Login/Signup pages to set a cookie)
  const token = request.cookies.get('rada_token')?.value;
  const { pathname } = request.nextUrl;

  // 2. Define protected and public routes
  const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/onboarding');
  const isPublicRoute = pathname === '/login' || pathname === '/signup' || pathname === '/';

  // 3. Redirect logic
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    // Optional: Store the intended destination to redirect back after login
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isPublicRoute && token && pathname !== '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// 4. Configure which paths this middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};