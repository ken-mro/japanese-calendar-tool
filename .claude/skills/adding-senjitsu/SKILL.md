---
name: adding-senjitsu
description: Use when adding a new 選日 (senjitsu/selected day) to the Japanese calendar tool. Guides research of calculation rules, calendar type (暦月 vs 節月), and implementation across all layers.
---

# Adding a New 選日 (Senjitsu)

## When to use

- User asks to add a new 選日 (e.g., 天恩日, 母倉日, 大明日, 神吉日, 鬼宿日, 寅の日, 巳の日, etc.)
- User asks to implement a new lucky/unlucky day type

## Research Phase (MANDATORY)

Before writing any code, investigate the 選日 on Wikipedia (Japanese) to determine:

1. **Calculation rules** - How is the day determined? (干支, 旧暦日, 節気, etc.)
2. **Calendar type** - Which calendar system does it use?
   - **節月 (setsu-getsu / solar months)**: Based on 二十四節気. Use `getStarDate()` to find the 節入り date and determine the current solar month. Examples: 一粒万倍日, 天赦日, 三隣亡
   - **旧暦 (kyureki / lunar calendar)**: Based on 旧暦 (old calendar). Use `getOldCalendarDate()` to get the lunar month/day. Examples: 不成就日
3. **Lucky or unlucky** - Is it 吉日 or 凶日? (sets `isLucky`)
4. **Cross-reference with at least one published calendar** to verify the calculation produces correct results for known dates

Getting the calendar type wrong (節月 vs 旧暦) is the most common and critical mistake. Many online sources are ambiguous. Always verify against Wikipedia's description and a published calendar.

## Implementation Checklist

### 1. Add type definition in `src/lib/calculations/senjitsu.ts`

Add entry to `SENJITSU_TYPES`:

```typescript
MY_SENJITSU: {
    name: "漢字名",
    reading: "ひらがな読み",
    romaji: "Romaji-name",
    meaning: "English description of meaning and significance.",
    meaningJa: "日本語での意味の説明。",
    isLucky: true, // or false
},
```

### 2. Add calculation logic in `src/lib/calculations/senjitsu.ts`

In the `getSenjitsu()` function, add the check. Follow existing patterns:

- **If 節月-based**: Use `solarMonth` (already computed) and `dayBranchIndex`/`dayStemIndex` from `getDayZodiac()`
- **If 旧暦-based**: Use `oldDate` from `getOldCalendarDate()` (already computed)
- Add lookup table as a module-level constant (e.g., `const MY_TABLE: Record<number, number[]> = { ... }`)

### 3. Add i18n strings

- `src/lib/i18n/ja.json` - Add Japanese label if needed
- `src/lib/i18n/en.json` - Add English label if needed

### 4. Update the about/senjitsu page

- `src/app/[lang]/about/senjitsu/ClientPage.tsx` - Add explanation for the new 選日

### 5. Add icon support

- `src/components/icons/SenjitsuIcon.tsx` - Add icon/color for the new type

### 6. Write tests

- Add test cases in `tests/senjitsu.spec.ts` using known dates from a published calendar
- Test both Japanese and English display
- Include at least one positive and one negative test case

### 7. Verify

- Run `npx playwright test tests/senjitsu.spec.ts` to confirm tests pass
- Cross-check a few dates manually against a published calendar source

## Common Mistakes

- **Wrong calendar type**: Using 節月 when 旧暦 is correct (or vice versa). Always verify on Wikipedia.
- **Off-by-one in solar months**: `solarMonth` is computed by comparing the date against `getStarDate()`. Month 1 = 小寒〜立春 (roughly Jan), Month 2 = 立春〜啓蟄 (roughly Feb), etc.
- **Forgetting leap months**: For 旧暦-based calculations, handle leap month cases (旧暦の閏月).
- **Untested calculations**: Always verify against a real published calendar before claiming correctness.
