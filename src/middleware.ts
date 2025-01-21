import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth(?![a-zA-Z0-9]).*).*)',
  ],
}

export function middleware(request: NextRequest) {
  const isAuth = false; // 登陆状态
  if (!isAuth) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  return NextResponse.next()
}