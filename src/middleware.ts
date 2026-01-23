import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ja", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // files like favicon.ico, sitemap.xml, images
  ) {
    return;
  }

  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Locale detection logic requested by user:
  // "If the user's preference is Japanese, redirect to ja and other to en."
  const acceptLanguage = request.headers.get("accept-language") || "";
  const isJapanese = acceptLanguage.toLowerCase().includes("ja");
  
  const locale = isJapanese ? "ja" : "en";

  request.nextUrl.pathname = `/${locale}${pathname}`;
  // Preserve query parameters
  request.nextUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|favicon.ico|sitemap.xml|robots.txt|images|icons).*)',
  ],
};
