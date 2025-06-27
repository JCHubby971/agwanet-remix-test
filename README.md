# AGWANET Remix – Prototype Auth & Documents

Ce projet est un prototype basé sur **Remix** (framework React full-stack) développé dans le cadre du projet AGWANET.

## 🔐 Fonctionnalité principale

- Page de **connexion sécurisée** (`/login`)
- Création de **session via cookie** (token simulé)
- Accès au **dashboard** uniquement après connexion
- Route `/documents` protégée
- Appels à une API Express avec **authentification par token**

## 📁 Structure du projet

- `/app/routes/login.jsx` → Formulaire de connexion
- `/app/routes/dashboard.jsx` → Dashboard protégé
- `/app/routes/documents.jsx` → Liste documentaire
- `/app/session.server.js` → Stockage de session cookie sécurisé

## 🚀 Lancer le projet

```bash
npm install
npm run dev

Accès : http://localhost:5173

🔗 API connectée
Ce projet se connecte à une API Express externe :
👉 Voir le dépôt API ici : https://github.com/JCHubby971/api-server

💡 À venir

- Authentification JWT réelle

- Prévisualisation PDF

- Dashboard client avec KPIs