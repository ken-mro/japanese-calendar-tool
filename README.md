# Japanese Calendar Tool | 和暦・干支・九星 計算ツール

A web application that calculates Japanese era (和暦), Sexagenary cycle (十干十二支), zodiac sign (星座), and Nine Star Ki (九星) from a given birthdate.

生年月日から西暦・和暦・十干十二支・星座・九星を計算するウェブアプリケーションです。

![Japanese Calendar Tool](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features | 機能

- **Daily Calendar (Himekuri)**: Interactive daily calendar with "tear-off" animation, displaying daily Eto, Nine Star Ki, and customized details.
- **Omikuji (Fortune Slip)**: Traditional Japanese fortune telling with detailed localized results.
- **Daily Calendar (日めくりカレンダー)**: Traditional daily view with Rokuyo, Senjitsu, Moon phase, and responsive design.
- **Western Year (西暦)**: Display the Gregorian calendar year
- **Japanese Era (和暦)**: Calculate Japanese era names from Keicho (1596) to Reiwa
- **Sexagenary cycle (十干十二支)**: Calculate the 60-year cycle including Heavenly Stems and Earthly Branches
- **Zodiac Sign (星座)**: Determine the Western zodiac sign
- **Nine Star Ki (九星)**: Calculate the Nine Star Ki based on Setsubun year boundary

## Supported Eras | 対応元号

- Modern: 令和、平成、昭和、大正、明治
- Edo Period: 慶応、元治、文久、万延、安政、嘉永、弘化、天保、文政、文化、享和、寛政、天明、安永、明和、宝暦、寛延、延享、寛保、元文、享保、正徳、宝永、元禄、貞享、天和、延宝、寛文、万治、明暦、承応、慶安、正保、寛永、元和、慶長

## Tech Stack | 技術スタック

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS (Japanese Traditional "Wafu" Design)
- **Font**: Noto Serif JP

## Getting Started | 使い方

### Prerequisites | 前提条件

- Node.js 16.x or higher
- npm or yarn

### Installation | インストール

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/japanese-calendar-tool.git
   cd japanese-calendar-tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production | 本番用ビルド

```bash
npm run build
npm start
```

### Deployment | デプロイ

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click **Deploy**.

このプロジェクトは [Vercel](https://vercel.com) へのデプロイに最適化されています。

1. Git リポジトリ（GitHub など）にコードをプッシュします。
2. Vercel にプロジェクトをインポートします。
3. 自動的に Next.js が検出され、ビルド設定が行われます。
4. **Deploy** をクリックします。

## Internationalization | 多言語対応

The application supports both Japanese and English:

- Default language is detected from browser settings
- Users can switch languages using the toggle in the header
- Language preference is saved in localStorage

アプリケーションは日本語と英語に対応しています：

- デフォルトはブラウザの言語設定を検出
- ヘッダーのトグルで言語切り替え可能
- 言語設定は localStorage に保存

## Project Structure | プロジェクト構成

```
src/
├── app/
│   ├── [lang]/
│   │   ├── daily/      # Daily Calendar feature
│   │   │   └── page.tsx
│   │   ├── about/      # About pages
│   │   └── page.tsx    # Home page
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/
│   ├── cards/          # Display cards
│   ├── icons/          # Icon components (Senjitsu, NineStar, etc.)
│   ├── DateInput.tsx   # Date input form
│   ├── DailyCalendar.tsx # Main Daily View Component
│   ├── DetailHeader.tsx # Header for sub-pages
│   ├── Header.tsx      # Main Header
│   ├── LanguageSwitcher.tsx
│   └── ResultDisplay.tsx  # Results display
├── lib/
│   ├── calculations/
│   │   ├── japaneseEra.ts   # 和暦計算
│   │   ├── zodiac.ts        # 十干十二支計算
│   │   ├── constellation.ts # 星座計算
│   │   └── nineStar.ts      # 九星計算
│   └── i18n/
│       ├── config.tsx  # i18n context
│       ├── en.json     # English translations
│       └── ja.json     # Japanese translations
└── types/
    └── calendar.ts     # Type definitions
```

## SEO | SEO 対策

### Comprehensive SEO Implementation

This application implements industry-standard SEO best practices for maximum search engine visibility and social media engagement:

#### Meta Tags & Open Graph

- **Locale-specific metadata** for Japanese (ja) and English (en) versions
- **Open Graph tags** for rich social media previews (Facebook, LinkedIn)
- **Twitter Card support** with `summary_large_image` format
- **Dynamic Open Graph images** (1200x630px) for all major pages
- **Comprehensive keywords** tailored to each page and locale
- **Canonical URLs** to prevent duplicate content issues
- **Hreflang tags** for proper language/region targeting

#### Structured Data (JSON-LD)

- **WebApplication schema** with detailed feature lists and localized descriptions
- **Organization schema** for brand identity
- **BreadcrumbList schema** for navigation hierarchy (utility available)
- Support for **FAQPage schema** on informational pages

#### Technical SEO

- **XML Sitemap** (`/sitemap.xml`) with:
  - All routes in both Japanese and English
  - Proper `changeFrequency` values (daily, always, monthly, yearly)
  - Optimized priority values (1.0 for home, 0.9 for daily, 0.7 for about pages)
  - Language alternates for each URL
- **Robots.txt** (`/robots.txt`) with sitemap reference
- **Middleware-based locale detection** for automatic language redirection
- **Resource hints** (preconnect, dns-prefetch) for performance optimization

#### Performance Optimizations

- Preconnect to Google Fonts and AdSense for faster loading
- Edge runtime for Open Graph image generation
- Optimized favicon and app icons

#### Configuration

Set the base URL in `.env.local` for production:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

This ensures all metadata, sitemaps, and structured data use the correct production URLs.

## License | ライセンス

MIT License

## Contributing | 貢献

Contributions are welcome! Please feel free to submit a Pull Request.
