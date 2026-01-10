# Progression du Projet Tonaku

## ✅ Étapes Complétées

### 1. Setup Initial du Projet (10 janvier 2026)

#### Installation de Next.js

- ✅ **Next.js 16.1.1** installé avec App Router
- ✅ **React 19.2.3** et React DOM
- ✅ **TypeScript 5.9.3** configuré
- ✅ **Tailwind CSS 4.1.18** installé et configuré
- ✅ **ESLint** configuré avec Next.js
- ✅ Gestionnaire de packages : **pnpm 10.18.2**

#### Installation de Tina CMS

- ✅ **tinacms 3.2.0** installé
- ✅ **@tinacms/cli 2.0.7** installé

#### Structure créée

```
client-producte/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── public/
├── .cursor/
│   └── plans/
│       ├── tonaku-projet.md        # Plan complet du projet
│       └── PROGRESSION.md          # Ce fichier
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

#### Repository Git

- ✅ Repository Git initialisé automatiquement
- ✅ Connecté au repository GitHub : tonakuaslb-web/tonaku-website

### 2. Configuration de Tina CMS (10 janvier 2026)

#### Structure Complète Créée

- ✅ **Dossier `tina/`** avec configuration complète
- ✅ **7 Collections** configurées selon le cahier des charges
- ✅ **Dossiers `content/`** avec structure complète :
  - content/pages/ (pages du site)
  - content/histoire/ (timeline 1992-2026)
  - content/team/ (équipe multi-pays)
  - content/missions/ (7 missions)
  - content/projects/ (projets 2026-2027)
  - content/books/ (bibliothèque de livres)
  - content/contact/ (coordonnées multi-pays)
- ✅ **Dossiers `public/`** pour assets :
  - public/uploads/ (images via Tina)
  - public/photos/ (photos historiques)
  - public/books/ (couvertures)
- ✅ **Route `/admin`** créée pour Tina Cloud

#### Fichiers de Contenu Exemples

- ✅ **Pages** : home.mdx (page d'accueil)
- ✅ **Histoire** : 3 événements clés (1992, 2004, 2024-2026)
- ✅ **Équipe** : sylvie-kasamba.mdx (Présidente)
- ✅ **Missions** : mission-1-lecture.mdx
- ✅ **Projets** : soutien-scolaire-2026.mdx
- ✅ **Livres** : minungu-ndembu-tome1.mdx
- ✅ **Contact** : belgique.mdx, congo.mdx, suisse.mdx

#### Configuration Technique

- ✅ `tina/config.ts` - Schéma complet avec 7 collections
- ✅ `tina/README.md` - Documentation complète de Tina CMS
- ✅ `package.json` - Scripts mis à jour pour Tina
- ✅ `.env.example` - Variables d'environnement

---

## 🔄 Prochaines Étapes

### Étape 2 : Configuration Tina Cloud ⚠️ À FAIRE

**Guide complet** : `.cursor/plans/TINA-CLOUD-SETUP.md`

#### Résumé Rapide

1. **Créer un compte Tina Cloud** (https://app.tina.io)
   - Se connecter avec GitHub
   - Gratuit pour 2 utilisateurs

2. **Créer un projet Tina**
   - Sélectionner le repository : `tonakuaslb-web/tonaku-website`
   - Choisir la branche : `pseudo-backend`

3. **Récupérer les tokens**
   - Client ID (NEXT_PUBLIC_TINA_CLIENT_ID)
   - Read-only Token (TINA_TOKEN)

4. **Configurer `.env.local`**
   ```bash
   NEXT_PUBLIC_TINA_CLIENT_ID=votre_client_id
   TINA_TOKEN=votre_token
   ```

5. **Tester l'interface admin**
   - `pnpm dev`
   - Ouvrir http://localhost:3000/admin
   - Se connecter avec GitHub

**Temps estimé** : 10-15 minutes

### Étape 3 : Développement des Composants

1. Créer composant **Header** (logo TONAKU + menu navigation)
2. Créer composant **Hero** (section "Qui sommes-nous ?")
3. Créer composant **History** (Notre histoire 1992-2026 avec timeline)
4. Créer composant **Team** (équipe multi-pays : Belgique, Suisse, Congo)
5. Créer composant **Missions** (7 missions de l'association)
6. Créer composant **Projects** (Projets 2026-2027)
7. Créer composant **Support** (Soutenez-nous avec formulaire de dons)
8. Créer composant **Resources** (Nos ressources - livres/ebooks)
9. Créer composant **Contact** (contact multi-pays + formulaire)
10. Créer composant **Footer** (mémoire de Robert Yava Mayonde)

### Étape 4 : Intégration et Design

1. Intégrer Tina CMS avec les composants
2. Appliquer le design Tailwind
3. Rendre le site responsive
4. Ajouter des animations (optionnel)

### Étape 5 : Déploiement

1. Créer repository GitHub
2. Connecter à Vercel
3. Configurer les variables d'environnement
4. Tester le déploiement

### Étape 6 : Documentation Client

1. Guide de connexion à l'admin
2. Guide de modification de contenu
3. Guide de publication

---

## 📋 Commandes Utiles

### Développement

```bash
# Démarrer le serveur de développement
pnpm dev

# Builder le projet
pnpm build

# Démarrer en production
pnpm start

# Linter le code
pnpm lint
```

### Tina CMS

```bash
# Initialiser Tina (à faire)
pnpm tinacms init

# Démarrer Tina en mode dev (après configuration)
pnpm tinacms dev -c "next dev"

# Builder avec Tina
pnpm tinacms build
```

---

## 📊 État Actuel

| Tâche                 | Statut        | Date        |
| --------------------- | ------------- | ----------- |
| Installation Next.js  | ✅ Complété   | 10 jan 2026 |
| Installation Tina CMS | ✅ Complété   | 10 jan 2026 |
| Configuration Tina    | ✅ Complété   | 10 jan 2026 |
| Création composants   | 🔄 En attente | -           |
| Intégration contenu   | 🔄 En attente | -           |
| Design & Responsive   | 🔄 En attente | -           |
| Déploiement Vercel    | 🔄 En attente | -           |
| Documentation client  | 🔄 En attente | -           |

---

## 🎯 Objectifs

- **Budget** : 0€/mois (hébergement gratuit sur Vercel)
- **Fréquence de mise à jour** : Mensuelle
- **Type de contenu** : Textes + Images
- **Niveau technique client** : Débutant
- **Type de site** : Monopage (single page)

---

**Dernière mise à jour** : 10 janvier 2026
