# Composants de Cartes - Molecules

Composants de cartes réutilisables pour afficher du contenu structuré dans différentes sections du site.

## Card (Base)

Composant de carte générique qui sert de base aux autres cartes.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | **requis** | Contenu de la carte |
| `variant` | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Variante de style |
| `background` | `string` | `undefined` | Classes Tailwind pour le background |
| `className` | `string` | `''` | Classes CSS additionnelles |
| `onClick` | `() => void` | `undefined` | Fonction appelée au clic |

### Exemple

```tsx
<Card variant="elevated" background="bg-accent-50">
  <h3>Titre de la carte</h3>
  <p>Contenu...</p>
</Card>
```

---

## TimelineCard

Carte spécialisée pour afficher des événements chronologiques avec une ligne verticale.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `year` | `string` | **requis** | Année de l'événement |
| `title` | `string` | **requis** | Titre de l'événement |
| `description` | `string` | **requis** | Description détaillée |
| `isLast` | `boolean` | `false` | Si c'est le dernier élément (masque la ligne) |

### Exemple

```tsx
<TimelineCard
  year="1992"
  title="Création de TONAKU"
  description="Robert Yava Mayonde crée le magasin socioculturel..."
/>
```

### Utilisation

Les `TimelineCard` doivent être placées dans un conteneur avec `space-y-0` pour que les lignes se connectent correctement.

```tsx
<div className="space-y-0">
  <TimelineCard year="1992" title="..." description="..." />
  <TimelineCard year="2004" title="..." description="..." />
  <TimelineCard year="2024" title="..." description="..." isLast />
</div>
```

---

## ProjectCard

Carte pour afficher les projets avec icône, titre, description et liste d'items.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `icon` | `ReactNode` | **requis** | Icône (emoji ou composant) |
| `title` | `string` | **requis** | Titre du projet |
| `description` | `string` | `undefined` | Description optionnelle |
| `items` | `string[]` | **requis** | Liste d'éléments |
| `note` | `string` | `undefined` | Note en italique en bas |
| `backgroundColor` | `string` | `'bg-accent-50'` | Couleur de fond |
| `borderColor` | `string` | `'border-accent-200'` | Couleur de bordure |

### Exemple

```tsx
<ProjectCard
  icon="📖"
  title="Réédition de 3 ouvrages"
  description="Ouvrages en cours de correction :"
  items={[
    "Proverbes et adages Ndembu/Koza",
    "Connaissance des Minungu",
  ]}
  note="Diffusion en ebooks pour réduire les coûts"
  backgroundColor="bg-accent-50"
  borderColor="border-accent-300"
/>
```

### Variantes de couleurs

```tsx
// Couleur accent (jaune/crème)
<ProjectCard backgroundColor="bg-accent-50" borderColor="border-accent-300" ... />

// Couleur primaire (vert)
<ProjectCard backgroundColor="bg-primary-50" borderColor="border-primary-300" ... />
```

---

## MissionCard

Carte horizontale pour afficher les missions avec icône à gauche.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `icon` | `ReactNode` | **requis** | Icône (emoji ou composant) |
| `description` | `string` | **requis** | Description de la mission |
| `borderColor` | `string` | `'border-accent-300'` | Couleur de la bordure gauche |

### Exemple

```tsx
<MissionCard
  icon="📚"
  description="Promouvoir la lecture et l'accès aux livres auprès des jeunes"
  borderColor="border-accent-500"
/>
```

### Utilisation en grille

```tsx
<div className="grid md:grid-cols-2 gap-6">
  <MissionCard icon="📚" description="..." borderColor="border-accent-500" />
  <MissionCard icon="👥" description="..." borderColor="border-primary-500" />
  <MissionCard icon="📖" description="..." borderColor="border-accent-500" />
  <MissionCard icon="📦" description="..." borderColor="border-primary-500" />
</div>
```

---

## Icon (Atom)

Composant d'icône avec fond jaune/doré pour accompagner les cartes.

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | **requis** | Contenu (emoji, SVG, etc.) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Taille de l'icône |
| `className` | `string` | `''` | Classes CSS additionnelles |

### Tailles

- `sm`: 40x40px (w-10 h-10)
- `md`: 48x48px (w-12 h-12) ⭐ par défaut
- `lg`: 64x64px (w-16 h-16)

### Exemple

```tsx
<Icon size="lg">📚</Icon>
<Icon size="md">👥</Icon>
```

---

## Bonnes pratiques

### 1. Cohérence des couleurs

Alternez les couleurs de bordure pour créer un rythme visuel :

```tsx
<MissionCard ... borderColor="border-accent-500" />
<MissionCard ... borderColor="border-primary-500" />
<MissionCard ... borderColor="border-accent-500" />
```

### 2. Espacement

- **Grid** : Utilisez `gap-6` pour l'espacement entre cartes
- **Timeline** : Utilisez `space-y-0` pour connecter les lignes

### 3. Responsive

- **Missions** : `grid md:grid-cols-2` (2 colonnes sur desktop)
- **Projets** : `grid md:grid-cols-3` (3 colonnes sur desktop)
- **Timeline** : Toujours en colonne unique

### 4. Accessibilité

- Utilisez des émojis avec du texte alternatif quand nécessaire
- Assurez-vous que le contraste texte/fond est suffisant
- Les cartes cliquables doivent avoir un `cursor-pointer`

### 5. Conteneurs

Enveloppez les cartes dans des conteneurs avec `max-w-*` pour contrôler la largeur :

```tsx
<div className="max-w-4xl mx-auto">
  <TimelineCard ... />
</div>

<div className="max-w-5xl mx-auto">
  <div className="grid md:grid-cols-2 gap-6">
    <MissionCard ... />
  </div>
</div>
```
