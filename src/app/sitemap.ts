import { MetadataRoute } from 'next'

const routes = [
  '',
  '/terms',
  '/privacy',
  '/about/eto',
  '/about/nine-star',
  '/about/rokuyo',
  '/about/senjitsu',
  '/about/wafu-getsumei',
  '/about/junichoku',
  '/about/wareki',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  const locales = ['ja', 'en']

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route === '' ? '' : route}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.startsWith('/about') ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            ja: `${baseUrl}/ja${route === '' ? '' : route}`,
            en: `${baseUrl}/en${route === '' ? '' : route}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
