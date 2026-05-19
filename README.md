# TimeTravel Agency - Webapp Interactive

Webapp immersive pour une agence de voyage temporel fictive de luxe, creee avec IA generative dans le cadre d'un projet pedagogique M1/M2 Digital & IA.

Membres du groupe : Anthony LALBA, Frédéric MACABIAU et Nicolas COMBAL

## Description

TimeTravel Agency propose une experience utilisateur premium pour decouvrir trois destinations temporelles uniques :
- **Paris 1889** - La Belle Epoque et l'Exposition Universelle
- **Cretace (-68M d'annees)** - L'ere des dinosaures
- **Florence 1504** - La Renaissance italienne

## Stack Technique

| Technologie | Usage |
|-------------|-------|
| **Next.js 16** | Framework React avec App Router |
| **TypeScript** | Typage statique |
| **Tailwind CSS v4** | Stylisation utility-first |
| **Framer Motion** | Animations et transitions |
| **AI SDK 6** | Integration chatbot IA |
| **shadcn/ui** | Composants UI accessibles |
| **Vercel** | Hebergement et deploiement |

## Features Implementees

### Landing Page Interactive
- Hero section avec video de fond immersive
- Animations fluides au scroll avec Framer Motion
- Musique d'ambiance activable/desactivable
- Design dark mode premium

### Galerie des Destinations
- 3 cartes interactives avec effets de survol
- Modales detaillees pour chaque destination
- Sons d'ambiance specifiques a chaque epoque
- Images et visuels personnalises

### Chatbot IA Conversationnel
- Assistant virtuel specialise voyage temporel
- Personnalite chaleureuse et passionnee d'histoire
- Reponses en francais avec expertise sur les 3 destinations
- Interface de chat moderne avec streaming des reponses

### Section About
- Presentation de l'agence et ses valeurs
- Points forts : Securite, Guides experts, Technologie de pointe

## IA Utilisees

| Outil | Usage | Modele |
|-------|-------|--------|
| **v0 by Vercel** | Generation de code | Claude |
| **Mistral AI** | Chatbot conversationnel | mistral-small-latest |
| **Assets externes** | Visuels et audio | Fournis par l'utilisateur |

## Installation

### Prerequisites
- Node.js 18+
- pnpm (recommande)

### Installation locale

```bash
# Cloner le repository
git clone <repository-url>
cd timetravel-agency

# Installer les dependances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Ajouter votre cle API Mistral dans .env.local

# Lancer le serveur de developpement
pnpm dev
```

### Variables d'environnement

```env
MISTRAL_API_KEY=votre_cle_api_mistral
```

Vous pouvez obtenir une cle API Mistral gratuite sur [console.mistral.ai](https://console.mistral.ai/)

## Structure du Projet

```
├── app/
│   ├── api/chat/       # Route API pour le chatbot
│   ├── globals.css     # Styles globaux et tokens
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/
│   ├── about.tsx       # Section A propos
│   ├── chatbot.tsx     # Widget chatbot IA
│   ├── destinations.tsx # Galerie des destinations
│   ├── footer.tsx      # Pied de page
│   ├── header.tsx      # Navigation
│   └── hero.tsx        # Section hero avec video
└── components/ui/      # Composants shadcn/ui
```

## Credits

### APIs et Services
- [Mistral AI](https://mistral.ai/) - API de generation de texte
- [Vercel AI SDK](https://sdk.vercel.ai/) - Integration IA
- [Vercel](https://vercel.com/) - Hebergement

### Bibliotheques
- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Lucide Icons](https://lucide.dev/) - Icones

### Assets
- Images et visuels : Fournis dans le cadre du projet
- Audio d'ambiance : Fournis dans le cadre du projet

## Licence

Projet pedagogique realise dans le cadre du cursus M1/M2 Digital & IA.

---

*Cree avec v0 by Vercel*
