import { MetadataRoute } from 'next'

const routes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/daily', changeFrequency: 'always' as const, priority: 0.9 },
  { path: '/about/eto', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about/nine-star', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about/rokuyo', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about/senjitsu', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about/wafu-getsumei', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about/junichoku', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about/wareki', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  const locales = ['ja', 'en']

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route.path}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ja: `${baseUrl}/ja${route.path}`,
            en: `${baseUrl}/en${route.path}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
