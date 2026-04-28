# Guide de Contribution

Merci de votre intérêt pour contribuer à Spiral ! 🚀

## Comment contribuer

### 1. Fork et Clone

```bash
# Fork le repository sur GitHub
# Ensuite, clonez votre fork
git clone https://github.com/your-username/Spiral_website.git
cd Spiral_website
```

### 2. Créer une branche

```bash
git checkout -b feature/votre-feature
```

### 3. Faire vos modifications

- Suivez les conventions de code existantes
- Testez vos changements localement
- Assurez-vous que le site s'affiche correctement sur mobile

### 4. Committer et Pousser

```bash
git add .
git commit -m "feat: description de votre changement"
git push origin feature/votre-feature
```

### 5. Créer une Pull Request

- Allez sur GitHub et créez une PR vers la branche `main`
- Décrivez vos changements
- Attendez la review

## Conventions

### Structure des commits

Utilisez le format Conventional Commits :

```
feat: ajouter une nouvelle fonctionnalité
fix: corriger un bug
docs: mise à jour de la documentation
style: changements de formatage (pas de logique)
refactor: refactoriser le code
perf: amélioration de performance
test: ajouter des tests
```

### Style de code

- Utilisez des noms significatifs pour les variables
- Indentation : 4 espaces pour CSS, 2 pour JSON
- Commentez le code complexe
- Suivisez la structure existante

## Branches

- `main` : Production (stable)
- `develop` : Développement (peut être instable)
- `feature/*` : Nouvelles fonctionnalités
- `bugfix/*` : Corrections de bugs

## Types de contributions

### 🎨 Designs et UI

- Améliorez le design
- Corrigez les bugs visuels
- Proposez de nouvelles mises en page

### 🐛 Bugs

- Signalez les bugs dans Issues
- Proposez des corrections dans les PRs
- Décrivez le problème clairement

### 📖 Documentation

- Améliorez le README
- Ajoutez des commentaires au code
- Créez des guides

### ✨ Fonctionnalités

- Proposez des nouvelles features dans Issues d'abord
- Attendez l'approbation avant de coder
- Testez complètement vos changements

## Installation pour développement

```bash
# Cloner le projet
git clone https://github.com/your-username/Spiral_website.git
cd Spiral_website

# Copier la configuration d'exemple
cp .env.example .env.local

# Éditer .env.local avec vos clés Supabase
nano .env.local

# Démarrer un serveur local
python -m http.server 8000
# ou
npx http-server

# Ouvrir http://localhost:8000
```

## Tester avant de pousser

- [ ] Le site s'affiche correctement
- [ ] Les liens fonctionnent
- [ ] L'authentification marche (si modifié)
- [ ] Mobile responsive OK
- [ ] Pas d'erreurs console (F12)
- [ ] README.md est à jour

## Questions ?

- Ouvrez une discussion : GitHub Discussions
- Signalez un bug : GitHub Issues
- Contactez nous : contact@spiral.com

Merci pour votre contribution ! 🙌
