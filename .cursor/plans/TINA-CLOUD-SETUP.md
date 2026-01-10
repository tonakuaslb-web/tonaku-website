# 🚀 Guide de Configuration Tina Cloud

## 📋 Vue d'ensemble

Ce guide vous explique comment configurer **Tina Cloud** (gratuit pour 2 utilisateurs) pour le projet TONAKU.

**Temps estimé** : 10-15 minutes  
**Coût** : 0€/mois (plan gratuit)

---

## ✅ Prérequis

- ✅ Compte GitHub avec accès au repository `tonakuaslb-web/tonaku-website`
- ✅ Code poussé sur GitHub (déjà fait ✓)
- ✅ Configuration Tina locale terminée (déjà fait ✓)

---

## 📝 Étape 1 : Créer un Compte Tina Cloud

### 1.1 Aller sur Tina Cloud

🔗 **URL** : https://app.tina.io

### 1.2 S'inscrire avec GitHub

1. Cliquer sur **"Sign Up"** ou **"Get Started"**
2. Choisir **"Continue with GitHub"**
3. Se connecter avec votre compte GitHub
4. Autoriser Tina à accéder à vos repositories GitHub

**Permissions demandées** :

- ✅ Lecture des repositories
- ✅ Écriture dans les repositories (pour sauvegarder le contenu)
- ✅ Accès aux webhooks (pour les builds automatiques)

> 💡 **Note** : Ces permissions sont normales et nécessaires pour que Tina puisse lire/écrire les fichiers `.mdx`

---

## 📦 Étape 2 : Créer un Projet Tina

### 2.1 Nouveau Projet

1. Dans le dashboard Tina, cliquer sur **"Create a Project"**
2. Ou cliquer sur **"Add a site"**

### 2.2 Sélectionner le Repository

1. **Organization** : `tonakuaslb-web`
2. **Repository** : `tonaku-website`
3. **Branch** : `pseudo-backend` (ou `main` si fusionné)

### 2.3 Configuration Automatique

Tina va scanner votre repository et détecter :

- ✅ Fichier `tina/config.ts`
- ✅ Les 7 collections configurées
- ✅ La structure de contenu

**Cliquer sur "Continue"** ou **"Next"**

### 2.4 Validation

Tina va vérifier la configuration. Si tout est bon, vous verrez :

- ✅ Configuration valide
- ✅ Collections détectées : 7 collections
- ✅ Prêt à être utilisé

**Cliquer sur "Complete Setup"**

---

## 🔑 Étape 3 : Récupérer les Tokens

### 3.1 Accéder aux Tokens

Après la création du projet, vous serez sur le dashboard. Vous devriez voir :

1. **Client ID** (commence par `clt_...`)
2. **Read-only Token** (commence par `...`)

### 3.2 Copier les Tokens

📋 **Copiez ces deux valeurs**, vous en aurez besoin :

```
NEXT_PUBLIC_TINA_CLIENT_ID=clt_xxxxxxxxxxxxxxxxxxxxx
TINA_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> ⚠️ **Important** : Gardez ces tokens en sécurité, surtout le `TINA_TOKEN`

---

## 💻 Étape 4 : Configuration Locale

### 4.1 Créer le fichier `.env.local`

Dans le dossier racine du projet, créer un fichier `.env.local` :

```bash
# Tina Cloud Configuration
NEXT_PUBLIC_TINA_CLIENT_ID=votre_client_id_ici
TINA_TOKEN=votre_token_ici
```

**Remplacer** `votre_client_id_ici` et `votre_token_ici` par vos vraies valeurs.

### 4.2 Vérifier que `.env.local` est ignoré

Le fichier `.env.local` doit être dans `.gitignore` (déjà fait ✓).

**Ne JAMAIS commit `.env.local`** avec vos tokens !

---

## 🧪 Étape 5 : Tester en Local

### 5.1 Démarrer le serveur

```bash
pnpm dev
```

Attendre le message : `✓ Ready in ...`

### 5.2 Ouvrir l'interface admin

🔗 **URL** : http://localhost:3000/admin

### 5.3 Se connecter

1. Vous serez redirigé vers la page de connexion Tina
2. **Se connecter avec GitHub**
3. Autoriser l'accès si demandé
4. Vous serez redirigé vers l'interface admin

### 5.4 Vérifier les Collections

Dans le menu latéral, vous devriez voir :

- 📄 Pages
- 📅 Histoire
- 👥 Équipe
- 🎯 Missions
- 📦 Projets
- 📚 Livres
- 📞 Contact

### 5.5 Tester une Modification

1. Cliquer sur **"Histoire"**
2. Sélectionner **"1992-creation"**
3. Modifier le texte
4. **Sauvegarder**

Si ça fonctionne : **✅ Configuration réussie !**

---

## 🌐 Étape 6 : Configuration Vercel (Production)

### 6.1 Aller sur Vercel

🔗 **URL** : https://vercel.com

### 6.2 Importer le Projet

1. Cliquer sur **"Add New Project"**
2. Importer depuis GitHub : `tonakuaslb-web/tonaku-website`
3. Choisir la branche : `pseudo-backend` ou `main`

### 6.3 Ajouter les Variables d'Environnement

Dans les paramètres du projet Vercel :

**Settings** → **Environment Variables**

Ajouter :

| Key                          | Value           |
| ---------------------------- | --------------- |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Votre Client ID |
| `TINA_TOKEN`                 | Votre Token     |

> ⚠️ **Important** : Le `NEXT_PUBLIC_TINA_CLIENT_ID` doit être ajouté pour tous les environnements (Production, Preview, Development)

### 6.4 Déployer

1. Cliquer sur **"Deploy"**
2. Attendre la fin du déploiement (2-3 min)
3. Votre site est en ligne ! 🎉

### 6.5 Tester l'Admin en Production

1. Aller sur `https://votre-site.vercel.app/admin`
2. Se connecter avec GitHub
3. Modifier du contenu
4. Les changements sont automatiquement commitées sur GitHub
5. Vercel rebuild automatiquement (2-3 min)
6. Les modifications sont en ligne

---

## 👥 Étape 7 : Ajouter un Deuxième Utilisateur

### 7.1 Inviter un Utilisateur

1. Dans Tina Cloud dashboard : **Settings** → **Team Members**
2. Cliquer sur **"Invite Member"**
3. Entrer l'email de la personne
4. Elle recevra une invitation

### 7.2 Accepter l'Invitation

La personne invitée :

1. Reçoit un email de Tina
2. Clique sur le lien
3. Se connecte avec son compte GitHub
4. A maintenant accès à l'admin

---

## 🎯 Workflow de Modification

### Pour le Client (Utilisateur Final)

1. **Aller sur** : `https://votre-site.vercel.app/admin`
2. **Se connecter** avec GitHub
3. **Choisir une collection** (ex: Histoire)
4. **Modifier le contenu** dans l'interface visuelle
5. **Cliquer sur "Save"**
6. **Attendre 2-3 minutes** que Vercel rebuild
7. **Les modifications sont en ligne !**

> 💡 **C'est tout !** Pas besoin de connaître Git, GitHub, ou le code.

---

## 💰 Coûts et Limites

### Plan Gratuit Tina Cloud

| Fonctionnalité     | Limite         |
| ------------------ | -------------- |
| **Prix**           | **0€/mois**    |
| **Utilisateurs**   | **2 maximum**  |
| **Modifications**  | **Illimitées** |
| **Collections**    | **Illimitées** |
| **Fichiers**       | **Illimités**  |
| **Bande passante** | **Illimitée**  |
| **Support**        | Community      |

### Si Vous Avez Besoin de Plus d'Utilisateurs

| Plan        | Prix      | Utilisateurs |
| ----------- | --------- | ------------ |
| Free        | 0€/mois   | 2            |
| **Starter** | ~29$/mois | 5            |
| Team        | ~99$/mois | 20           |

**Pour TONAKU** : 2 utilisateurs devraient suffire (ex: Sylvie + Michel)

---

## 🔧 Dépannage

### Problème : "Unauthorized" lors de la connexion

**Solution** :

1. Vérifier que les tokens sont corrects dans `.env.local`
2. Vérifier que `NEXT_PUBLIC_TINA_CLIENT_ID` est bien public (commence par `clt_`)
3. Redémarrer le serveur : `pnpm dev`

### Problème : Collections vides

**Solution** :

1. Vérifier que les fichiers `.mdx` existent dans `content/`
2. Vérifier que `tina/config.ts` pointe vers les bons dossiers
3. Recharger la page admin

### Problème : Modifications non sauvegardées

**Solution** :

1. Vérifier la connexion internet
2. Vérifier que GitHub a bien les permissions d'écriture
3. Regarder les erreurs dans la console du navigateur (F12)

### Problème : Site ne rebuild pas après modification

**Solution** :

1. Aller sur Vercel dashboard
2. Vérifier que le webhook GitHub est configuré
3. Déclencher un rebuild manuel si nécessaire

---

## 📚 Ressources

- **Documentation Tina** : https://tina.io/docs/
- **Tina Cloud Dashboard** : https://app.tina.io
- **Support Tina** : https://discord.com/invite/zumN63Ybpf (Discord)
- **Pricing** : https://tina.io/pricing/

---

## ✅ Checklist Finale

Avant de considérer la configuration terminée :

- [ ] Compte Tina Cloud créé
- [ ] Projet Tina créé et lié au repository GitHub
- [ ] Tokens copiés et ajoutés dans `.env.local`
- [ ] Interface admin accessible sur `http://localhost:3000/admin`
- [ ] Test de modification réussi en local
- [ ] Projet déployé sur Vercel
- [ ] Variables d'environnement ajoutées sur Vercel
- [ ] Interface admin accessible en production
- [ ] Test de modification réussi en production
- [ ] Deuxième utilisateur invité (optionnel)
- [ ] Documentation remise au client

---

## 🎓 Formation du Client

### Document à Fournir au Client

Créer un guide simplifié pour le client :

**"Comment modifier le contenu du site TONAKU"**

1. Aller sur : `https://tonaku-website.vercel.app/admin`
2. Cliquer sur "Se connecter avec GitHub"
3. Choisir une section à modifier (Histoire, Équipe, etc.)
4. Faire les modifications
5. Cliquer sur "Save"
6. Attendre 2-3 minutes
7. Recharger le site, c'est en ligne !

---

**Configuration complète !** 🎉

Le site TONAKU est maintenant entièrement fonctionnel avec un CMS moderne et gratuit.

---

**Dernière mise à jour** : 10 janvier 2026  
**Statut** : ✅ Prêt pour la production
