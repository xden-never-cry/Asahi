import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function setAuth(isAuth: boolean) {
  return isAuth
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth(?![a-zA-Z0-9]).*).*)',
  ],
}

export async function middleware(request: NextRequest) {
  const isAuth = false
  if (!isAuth) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  return NextResponse.next()
}