# GrindFix CMS (Next.js + Supabase)

CMS wspiera:
- blog (`/blog`, `/blog/[slug]`)
- strony uslug (`/[slug]`)
- panel admina z logowaniem (`/admin`)

Gdy Supabase nie jest skonfigurowany, aplikacja czyta dane fallback z `src/lib/data.ts` i `src/lib/articles.ts`.

## 1. Start lokalny

```bash
npm install
npm run dev
```

## 2. Konfiguracja Supabase

1. Utworz projekt w Supabase.
2. W SQL Editor uruchom:
   - `supabase/schema.sql`
3. Skonfiguruj `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
ADMIN_EMAILS=admin@twojadomena.pl
```

`ADMIN_EMAILS` jest opcjonalne:
- jesli puste, kazdy zalogowany user Supabase moze publikowac
- jesli ustawione, publikowac moga tylko e-maile z listy (po przecinku)

4. W Supabase Auth utworz konto administratora (Email + Password).

## 3. Panel admina

- Wejdz na `/admin/login`
- Zaloguj sie kontem z Supabase Auth
- W `/admin` masz 2 formularze:
  - publikacja artykulu bloga
  - publikacja strony uslugi

Publikacja dziala jako `upsert` po `slug`:
- nowy slug -> nowa strona
- istniejacy slug -> aktualizacja tresci

## 4. Automatyczne SEO

Przy zapisie z panelu:
- slug tworzy sie automatycznie z tytulu
- opis SEO (excerpt/description) tworzy sie automatycznie z tresci
- czas czytania liczy sie automatycznie (blog)
- metadata strony artykulu jest normalizowana (title/description)
- canonical i OpenGraph sa generowane na stronach

Kod SEO i admin:
- `src/lib/seo.ts`
- `src/lib/admin/content.ts`
- `src/app/api/admin/blog/route.ts`
- `src/app/api/admin/services/route.ts`

## 5. Uwaga o routingu uslug

Statyczne strony uslug (np. `src/app/mobilny-serwis-rowerowy-warszawa/page.tsx`) maja wyzszy priorytet niz dynamiczne `/[slug]`.
Dynamiczny route sluzy glownie do dodawania nowych stron uslug bez tworzenia nowych plikow w kodzie.
