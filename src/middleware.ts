import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

export function middleware(request: NextRequest) {
  const isAuth = 0 ; // 登陆状态
  if (!isAuth) {
    if (!request.nextUrl.pathname.startsWith('/auth/login')) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }
  return NextResponse.next()
}