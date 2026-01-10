# Templates - Atomic Design

Les **templates** sont des structures de page réutilisables qui combinent des organismes, molécules et atomes pour créer des layouts cohérents.

## Section

Le composant `Section` est un template générique pour créer toutes les sections du site avec une cohérence visuelle.

### Utilisation de base

```tsx
import { Section } from "@/app/components/templates";

<Section id="ma-section">
  <h2>Mon contenu</h2>
</Section>
```

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | **requis** | ID unique pour l'ancre de navigation |
| `children` | `ReactNode` | **requis** | Contenu de la section |
| `fullHeight` | `boolean` | `false` | Section pleine hauteur (min-h-screen) |
| `containerWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Largeur max du container |
| `background` | `BackgroundConfig` | `undefined` | Configuration du background |
| `paddingY` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Padding vertical |
| `paddingX` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Padding horizontal |
| `className` | `string` | `''` | Classes CSS additionnelles |
| `textColor` | `string` | `''` | Couleur du texte (classe Tailwind) |

### BackgroundConfig

```typescript
type BackgroundConfig = {
  type: "color" | "gradient" | "image" | "pattern";
  value: string; // Classe Tailwind ou URL
  overlay?: boolean; // Pour les images
  overlayOpacity?: number; // 0-1, défaut: 0.5
};
```

### Exemples

#### Section avec couleur de fond

```tsx
<Section
  id="accueil"
  fullHeight
  background={{ type: "color", value: "bg-primary-800" }}
  textColor="text-white"
>
  <h1>Bienvenue</h1>
</Section>
```

#### Section avec gradient

```tsx
<Section
  id="hero"
  fullHeight
  background={{
    type: "gradient",
    value: "bg-gradient-to-r from-primary-800 to-primary-600"
  }}
  textColor="text-white"
>
  <h1>Hero Section</h1>
</Section>
```

#### Section avec image de fond

```tsx
<Section
  id="about"
  fullHeight
  background={{
    type: "image",
    value: "/images/hero-bg.jpg",
    overlay: true,
    overlayOpacity: 0.6
  }}
  textColor="text-white"
>
  <h1>À propos</h1>
</Section>
```

#### Section avec largeur personnalisée

```tsx
<Section
  id="content"
  containerWidth="sm"
  paddingY="xl"
  background={{ type: "color", value: "bg-background-100" }}
>
  <article>Contenu étroit pour la lecture</article>
</Section>
```

#### Section sans padding

```tsx
<Section
  id="gallery"
  paddingY="none"
  paddingX="none"
  containerWidth="full"
>
  <div className="grid grid-cols-3">
    {/* Galerie pleine largeur */}
  </div>
</Section>
```

### Largeurs de container

- `sm`: max-w-3xl (768px)
- `md`: max-w-5xl (1024px)
- `lg`: max-w-7xl (1280px) ⭐ par défaut
- `xl`: max-w-screen-2xl (1536px)
- `full`: max-w-full (100%)

### Paddings

#### Vertical (paddingY)
- `none`: py-0
- `sm`: py-8 md:py-12
- `md`: py-12 md:py-16
- `lg`: py-16 md:py-24 ⭐ par défaut
- `xl`: py-24 md:py-32

#### Horizontal (paddingX)
- `none`: px-0
- `sm`: px-4
- `md`: px-6 ⭐ par défaut
- `lg`: px-8
- `xl`: px-12

### Bonnes pratiques

1. **Toujours définir un `id` unique** pour la navigation par ancres
2. **Utiliser `fullHeight`** pour les sections hero/principales
3. **Adapter `textColor`** selon le background (clair/foncé)
4. **Utiliser `overlay`** pour améliorer la lisibilité sur les images
5. **Choisir `containerWidth`** selon le type de contenu :
   - `sm` : articles, formulaires
   - `md` : contenu standard
   - `lg` : sections avec grilles
   - `full` : galeries, images pleine largeur
