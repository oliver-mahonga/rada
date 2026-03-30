import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('rada_token')?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/onboarding');
  const isAuthRoute = pathname === '/login' || pathname === '/signup';

  // If trying to access protected areas without a cookie, we let it pass 
  // so the Client-Side Dashboard can check localStorage as a backup.
  if (isProtectedRoute && !token) {
    return NextResponse.next();
  }

  // Prevent logged-in users from seeing login/signup again
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};