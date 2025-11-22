# Nerul Cemetery Website

A comprehensive, modern, and serene web presence for Nerul Cemetery in Navi Mumbai. This project is built with the latest web technologies including **Next.js 16**, **React 19**, and **Tailwind CSS 4**, designed to provide a dignified and accessible platform for the community.

The website serves as a digital information hub, offering details about burial services, cemetery rules, gallery of the grounds, and contact information, all wrapped in a peaceful and respectful user interface.

## 🌟 Key Features

### 🎨 Design & UX
- **Peaceful Aesthetic**: A calming color palette using Sage Green (`sage-50` to `sage-900`) and Warm Stone (`stone-50` to `stone-900`) tones to reflect tranquility.
- **Responsive Layout**: Fully adaptive design that works seamlessly on mobile phones, tablets, and desktop computers.
- **Glassmorphism Effects**: Modern UI touches with backdrop blurs in headers, modals, and overlays.
- **Smooth Animations**: Extensive use of `framer-motion` for entrance animations, hover effects, and page transitions.

### 🧩 Functional Modules
- **Interactive Gallery**: A filterable image gallery with a custom-built lightbox that supports keyboard navigation and touch swipe gestures.
- **Notice Board System**: A dynamic tabbed interface to switch between "Important Announcements" and "Rules & Regulations".
- **Contact System**: A fully functional contact form with validation and loading states, integrated with Google Maps for location.
- **Dynamic Routing**: Utilizes Next.js App Router for efficient and SEO-friendly page navigation.

## 🛠️ Tech Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) | The React Framework for the Web (App Router) |
| **UI Library** | [React 19](https://react.dev/) | Library for building user interfaces |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Production-ready animation library for React |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | SVG icons (FontAwesome, etc.) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript |
| **Linting** | [ESLint](https://eslint.org/) | Pluggable linting utility |

## 📂 Project Structure

```
nerul-cemetery/
├── public/
│   ├── nerul-cemetery Image/  # Gallery and site images
│   └── Review-image/          # Testimonial user avatars
├── src/
│   ├── app/
│   │   ├── about/             # About Us page (History, Mission, Values)
│   │   ├── contact/           # Contact page (Form, Map, Info)
│   │   ├── gallery/           # Gallery page (Grid, Lightbox)
│   │   ├── notice/            # Notices & Rules page
│   │   ├── components/        # Shared components
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── Header.tsx     # Responsive navigation bar
│   │   │   └── StructuredData.tsx # SEO JSON-LD
│   │   ├── globals.css        # Global styles & Tailwind directives
│   │   ├── layout.tsx         # Root layout wrapper
│   │   └── page.tsx           # Landing page
├── next.config.ts             # Next.js config
├── package.json               # Dependencies & Scripts
└── tsconfig.json              # TypeScript config
```

## 📖 Page Overview

### 🏠 Home (`/`)
The landing page introduces visitors to the cemetery with a full-screen hero section, followed by:
- **Services Overview**: Cards highlighting key offerings like "Peaceful Environment" and "Compassionate Care".
- **Testimonials**: Reviews from families who have used the services.
- **Call to Action**: Prominent links to Contact and Gallery pages.

### ℹ️ About (`/about`)
Dedicated to the history and mission of Nerul Cemetery.
- **Mission & Vision**: Clearly stated goals of the organization.
- **History Timeline**: A vertical timeline showing the journey of the cemetery over 50+ years.
- **Core Values**: Grid displaying values like Compassion, Respect, and Peace.

### 🖼️ Gallery (`/gallery`)
A visual tour of the grounds.
- **Categorized View**: Filter images by 'Entrance', 'Pathways', 'Facilities', etc.
- **Lightbox**: Click any image to view it full-screen.
- **Touch Support**: Swipe left/right on mobile devices to navigate images.

### 📢 Notice (`/notice`)
A central place for updates.
- **Notices Tab**: Lists upcoming events, maintenance schedules, and office hour changes.
- **Rules Tab**: detailed list of cemetery regulations, fees, and policies.
- **URL State**: The active tab is reflected in the URL hash (e.g., `/notice#rules`).

### 📞 Contact (`/contact`)
- **Contact Form**: Fields for Name, Email, Phone, Subject, and Message.
- **Location**: Embedded Google Map showing the exact location in Sector 2, Nerul.
- **Quick Info**: Cards for Address, Phone, Email, and Office Hours.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Karangupta97/nerul-cemetery.git
   cd nerul-cemetery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

**Developed by [Karan Gupta](https://github.com/Karangupta97)**
