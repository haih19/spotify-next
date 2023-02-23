import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {getToken} from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
   const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
   })

   const {pathname} = request.nextUrl

   //request which already have token or will be allowed

   if (token || pathname.includes('/api/auth') || pathname.includes('/_next')) {
      if (pathname === '/login') {
         return NextResponse.redirect(new URL('/', request.url))
      }
      return NextResponse.next()
   }

   // if user has not logged in => redirect to login page

   if (!token && pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url))
   }

   return NextResponse.next()
}
