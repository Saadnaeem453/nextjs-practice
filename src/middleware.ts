import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');

    const { pathname } = request.nextUrl;
    const permissions = request.cookies.get('permissions')
    console.log("Current path:", pathname);
    console.log("Token:", token);
    console.log("permission:", permissions);
    const ignoredPaths = [
        /^\/_next\//,
        /^\/static\//,
        /^\/api\//,
        /^\/favicon.ico$/,
        /^\/robots.txt$/,
        /^\/auth\/login$/,
    ];
    const isIgnoredPath = ignoredPaths.some((pattern) => pattern.test(pathname));
    console.log(">>>>>>>>>>___________", isIgnoredPath)

    if (!token) {
        if (isIgnoredPath) {
            return NextResponse.next();
        }
        console.log("No token found, redirecting to login.");
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    console.log(">>>>>>>>>++++++")
    if (permissions) {

        const parsedPermissions = JSON.parse(permissions.value);
        console.log(">>>>>>>>>>>>>", parsedPermissions, pathname, parsedPermissions[pathname] || pathname.startsWith('/auth'))
        if (parsedPermissions[pathname] || pathname.startsWith('/auth')) {
            return NextResponse.next();
        } else {
            return
        }
    }


    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
