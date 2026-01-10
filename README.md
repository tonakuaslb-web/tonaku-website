# Tonaku - Site Web de l'Association

Site web monopage pour l'association Tonaku, construit avec Next.js et Tina CMS pour permettre une gestion de contenu facile et gratuite.

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ installé
- pnpm installé (`npm install -g pnpm`)

### Installation

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le site.

## 🛠️ Technologies Utilisées

- **Next.js 16.1.1** - Framework React avec App Router
- **React 19.2.3** - Bibliothèque UI
- **TypeScript 5.9.3** - Typage statique
- **Tailwind CSS 4.1.18** - Framework CSS utility-first
- **Tina CMS 3.2.0** - Système de gestion de contenu
- **pnpm** - Gestionnaire de packages

## 📁 Structure du Projet

```
client-producte/
├── app/                    # App Router Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   └── admin/             # Routes admin Tina (à créer)
├── components/            # Composants React (à créer)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Activities.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── content/               # Contenu éditable via Tina (à créer)
│   ├── pages/
│   ├── activities/
│   └── team/
├── public/                # Assets statiques
│   └── uploads/           # Images uploadées (à créer)
├── tina/                  # Configuration Tina CMS (à créer)
│   ├── config.ts
│   └── schema.ts
└── .cursor/plans/         # Documentation du projet
```

## 📝 Scripts Disponibles

```bash
# Développement
pnpm dev              # Démarrer en mode développement

# Production
pnpm build            # Builder le projet
pnpm start            # Démarrer en mode production

# Qualité du code
pnpm lint             # Linter le code
```

## 🎨 Design

Le site est une monopage avec les sections suivantes :

1. **Hero** - Bannière d'accueil avec image et slogan
2. **About** - À propos de l'association Tonaku
3. **Activities** - Activités et projets de l'association
4. **Team** - Membres de l'équipe
5. **Contact** - Formulaire de contact et informations
6. **Footer** - Liens et mentions légales

## 🔧 Configuration Tina CMS

*À venir - En cours de configuration*

L'interface d'administration sera accessible à `/admin` après configuration de Tina CMS.

## 🌐 Déploiement

### Vercel (Recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Configurer les variables d'environnement (voir documentation Tina)
4. Déployer automatiquement

Le site sera hébergé gratuitement sur Vercel.

## 📚 Documentation

Pour plus d'informations sur le projet, consultez :

- [Plan complet du projet](.cursor/plans/tonaku-projet.md)
- [Progression et étapes](.cursor/plans/PROGRESSION.md)

## 💰 Coûts

**Total : 0€/mois**

- Hébergement Vercel : Gratuit
- Tina CMS : Gratuit (self-hosted)
- Repository GitHub : Gratuit
- Domaine personnalisé : Optionnel (~10-15€/an)

## 🤝 Contribution

Ce projet est développé pour l'association Tonaku.

## 📄 Licence

Propriété de l'association Tonaku.

---

**Date de création** : 10 janvier 2026  
**Version** : 0.1.0  
**Statut** : En développement 🔄
