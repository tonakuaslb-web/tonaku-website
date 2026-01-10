# Configuration Tina CMS - TONAKU

## 📚 Collections Configurées

Ce projet Tina CMS contient **7 collections** correspondant au contenu du site TONAKU :

### 1. **Pages** (`content/pages/`)
Contenu des pages principales du site
- Champs : titre, description, contenu riche

### 2. **Histoire** (`content/histoire/`)
Timeline de l'histoire de TONAKU (1992-2026)
- Champs : année, titre, description, image, ordre d'affichage

### 3. **Équipe** (`content/team/`)
Membres de l'équipe (Belgique, Suisse, Congo)
- Champs : nom, rôle, pays, ville, téléphone, email, photo, biographie

### 4. **Missions** (`content/missions/`)
Les 7 missions de l'association
- Champs : titre, description, icône, ordre, statut actif/inactif

### 5. **Projets** (`content/projects/`)
Projets actuels et futurs (ex: Projets 2026-2027)
- Champs : titre, année, statut, description, image, lieu, détails

### 6. **Livres** (`content/books/`)
Bibliothèque des ouvrages de Robert Yava Mayonde
- Champs : titre, auteur, année, ISBN, couverture, description, catégorie, disponibilité (eBook/papier)

### 7. **Contact** (`content/contact/`)
Coordonnées de contact multi-pays
- Champs : pays, ville, adresse, téléphone, email, horaires, notes

---

## 🚀 Utilisation

### Développement Local

Pour démarrer le serveur de développement avec Tina CMS :

```bash
pnpm dev
```

Cette commande lance :
- Next.js sur `http://localhost:3000`
- Interface admin Tina sur `http://localhost:3000/admin`

### Accéder à l'Interface Admin

1. Démarrer le serveur : `pnpm dev`
2. Ouvrir le navigateur : `http://localhost:3000/admin`
3. En mode développement local, aucune authentification n'est requise

### Modifier le Contenu

1. Aller sur `/admin`
2. Sélectionner une collection dans le menu latéral
3. Cliquer sur un fichier existant pour l'éditer
4. Ou créer un nouveau contenu avec le bouton "Create New"
5. Les modifications sont sauvegardées automatiquement dans les fichiers `.mdx`

---

## 📝 Contenu Exemple Créé

Des fichiers exemples ont été créés pour chaque collection :

### Pages
- `home.mdx` - Page d'accueil avec "Qui sommes-nous"

### Histoire
- `1992-creation.mdx` - Création du magasin TONAKU
- `2004-magazine.mdx` - Transformation en magazine
- `2024-transition.mdx` - Transition et renaissance

### Équipe
- `sylvie-kasamba.mdx` - Présidente (Belgique)

### Missions
- `mission-1-lecture.mdx` - Promouvoir la lecture

### Projets
- `soutien-scolaire-2026.mdx` - Programme de soutien scolaire

### Livres
- `minungu-ndembu-tome1.mdx` - Premier ouvrage (2009)

### Contact
- `belgique.mdx` - Coordonnées Belgique
- `congo.mdx` - Coordonnées Congo
- `suisse.mdx` - Coordonnées Suisse

---

## 🔧 Personnalisation du Schéma

Pour modifier le schéma Tina (ajouter/supprimer des champs) :

1. Éditer le fichier `tina/config.ts`
2. Modifier les collections selon les besoins
3. Redémarrer le serveur de développement

### Exemple d'ajout de champ

```typescript
{
  type: "string",
  name: "nouveauChamp",
  label: "Nouveau Champ",
  description: "Description du champ",
}
```

---

## 🌐 Déploiement en Production

### Étape 1 : Créer un Compte Tina Cloud

1. Aller sur https://app.tina.io
2. Créer un compte (gratuit)
3. Créer un nouveau projet
4. Connecter votre repository GitHub

### Étape 2 : Obtenir les Tokens

Tina Cloud vous donnera :
- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`

### Étape 3 : Configurer Vercel

Dans les paramètres de votre projet Vercel, ajouter les variables d'environnement :

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
GITHUB_BRANCH=main
```

### Étape 4 : Déployer

```bash
pnpm build
```

---

## 🔐 Authentification

### En Développement Local
- Aucune authentification requise
- L'admin est accessible librement sur `/admin`

### En Production (avec Tina Cloud)
- Authentification via GitHub OAuth
- Seuls les utilisateurs autorisés peuvent modifier le contenu
- Configuration automatique via Tina Cloud

---

## 📂 Structure des Fichiers

```
tina/
├── config.ts          # Configuration complète des collections
└── README.md          # Ce fichier

content/
├── pages/             # Pages du site
├── histoire/          # Timeline historique
├── team/              # Membres de l'équipe
├── missions/          # Missions de l'association
├── projects/          # Projets actuels/futurs
├── books/             # Bibliothèque de livres
└── contact/           # Coordonnées de contact

public/
├── uploads/           # Images uploadées via Tina
├── photos/            # Photos historiques
└── books/             # Couvertures de livres
```

---

## 💡 Conseils d'Utilisation

### Images
- Uploader les images via l'interface Tina
- Elles seront stockées dans `public/uploads/`
- Optimiser les images avant upload (< 1 MB recommandé)

### Contenu Multimédia
- Formats supportés : JPG, PNG, GIF, WebP
- Les PDF peuvent être uploadés pour les eBooks

### Markdown Enrichi
- Tina supporte le formatage riche (gras, italique, listes, liens)
- Possibilité d'ajouter des citations, du code, etc.

### Ordre d'Affichage
- Utiliser le champ `order` pour contrôler l'ordre d'affichage
- Les éléments avec `order` inférieur apparaissent en premier

---

## 🐛 Dépannage

### L'admin ne charge pas
1. Vérifier que le serveur dev est lancé : `pnpm dev`
2. Vider le cache du navigateur
3. Vérifier la console pour les erreurs

### Modifications non sauvegardées
1. Vérifier que les fichiers dans `content/` ne sont pas en lecture seule
2. Vérifier les permissions Git

### Erreur de build
1. Exécuter `pnpm tinacms build` séparément
2. Vérifier les erreurs dans les fichiers `.mdx`
3. Valider le schéma dans `tina/config.ts`

---

## 📖 Documentation Officielle

- [Tina CMS Documentation](https://tina.io/docs/)
- [Tina avec Next.js](https://tina.io/docs/frameworks/next/)
- [Guide du Schéma](https://tina.io/docs/schema/)
- [Tina Cloud](https://tina.io/docs/tina-cloud/)

---

**Projet** : TONAKU ASBL  
**Date de configuration** : Janvier 2026  
**Version Tina** : 3.2.0
