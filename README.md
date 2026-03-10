# Maya Power - Solar Panel Solutions Website

Live project Link: https://maya-power.vercel.app/

## 🌟 Features

### Core Functionality
- **Multi-page Navigation**: Home, Services, Projects, and About pages
- **WhatsApp Integration**: Contact forms automatically open WhatsApp with pre-filled messages
- **Projection Modal**: Popup modal for "Get a Projection" requests (opened via **ModalContext** from navbar, hero, and services)
- **Toast Notifications**: Global success/error toasts (via **ToastContext**) after form submissions in footer and projection modal
- **Contact Forms**: Multiple contact forms (footer and modal) with validation
- **SEO**: Per-page meta tags, canonical URLs, Open Graph & Twitter cards, sitemap, robots.txt, and JSON-LD structured data
- **Responsive Design**: Mobile-first approach, fully responsive across all devices

### UI/UX Features
- **Modern Dark Footer**: Redesigned footer with gradient backgrounds and improved form layout
- **Animated Hero Section**: Eye-catching hero with animated solar panel graphics
- **Customer Testimonials**: Reviews section with star ratings and customer feedback
- **Statistics Display**: Key metrics and achievements showcase
- **Smooth Animations**: Intersection Observer-based animations for scroll-triggered effects
- **Gradient Designs**: Beautiful cyan-to-blue gradient themes throughout

### Form Features
- **Field Validation**: 
  - All fields are required
  - Phone number validation (exactly 10 digits)
  - Email validation
  - Real-time input filtering for phone numbers
- **WhatsApp Integration**: Forms send data directly to WhatsApp (number: 9270420922)
- **User-Friendly**: Clear labels, placeholders, and error messages

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.10.1** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **react-helmet-async** - SEO meta tags per page
- **@emailjs/browser** - Email/contact form integration (if used)
- **ESLint** - Code linting

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Footer.jsx          # Footer with contact form + toasts
│   │   ├── Hero.jsx            # Hero section with CTA (opens projection modal)
│   │   ├── Navbar.jsx          # Navigation bar (opens projection modal)
│   │   ├── ProjectionModal.jsx # Modal for projection requests + toasts
│   │   ├── ProductTieUps.jsx   # Product/partner tie-ups section
│   │   ├── Services.jsx        # Services showcase (opens projection modal)
│   │   ├── SolarJourney.jsx    # Solar journey / process section
│   │   ├── SEO.jsx             # Per-page SEO: title, description, canonical, Open Graph, Twitter cards
│   │   ├── Stats.jsx           # Statistics display
│   │   ├── Teaser.jsx          # Customer testimonials/reviews
│   │   └── WhyChooseUs.jsx     # Benefits section
│   ├── context/                # React Context providers
│   │   ├── ModalContext.jsx   # Global projection modal (open/close) — used by App, Hero, Navbar, Services
│   │   └── ToastContext.jsx   # Global toast notifications (success/error) — used by App, Footer, ProjectionModal
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Home page
│   │   ├── AboutPage.jsx       # About page (story, values, team, timeline)
│   │   ├── ProjectsPage.jsx    # Projects page
│   │   └── ServicesPage.jsx    # Services page
│   ├── App.jsx                 # Main app with routing, ModalProvider, ToastProvider
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Maya-Power/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Key Components

### Context providers (App.jsx)
- **ModalProvider** – Exposes `openModal` / `closeModal` / `isModalOpen`. Used so Hero, Navbar, and Services can open the same projection modal without prop drilling. App renders `<ProjectionModal isOpen={isModalOpen} onClose={closeModal} />`.
- **ToastProvider** – Exposes `addToast({ message, type: 'success'|'error', duration })`. Renders a fixed toast container (bottom-right). Used by Footer and ProjectionModal to show success/error after form actions.

### Hero Section
- Animated solar panel graphics
- Gradient text effects
- Call-to-action button that opens projection modal
- Responsive typography

### Footer
- Dark theme with gradient backgrounds
- Contact form with WhatsApp integration
- Company links and resources
- Social media links
- Contact information (email and phone)

### Projection Modal
- Accessible via "Get a Projection" buttons
- Form fields: Full Name, Email, Phone (10 digits), Location
- Validates all fields before submission
- Opens WhatsApp with formatted message
- Keyboard accessible (ESC to close)
- Prevents body scroll when open

### Contact Forms
Both the footer form and projection modal include:
- **Name/Full Name**: Text input
- **Email**: Email validation
- **Phone**: 10-digit validation, auto-filters non-numeric characters
- **Location**: Text input
- All fields are required
- Submit opens WhatsApp with formatted message

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layouts, stacked elements
- **Tablet**: 2-column grids, optimized spacing
- **Desktop**: Multi-column layouts, enhanced spacing

Breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Configuration

### WhatsApp Integration
The WhatsApp number is configured in:
- `src/components/Footer.jsx` (line 63)
- `src/components/ProjectionModal.jsx` (line 81)

To change the WhatsApp number, update the `whatsappNumber` variable in both files.

### Form Validation
- Phone numbers must be exactly 10 digits
- All form fields are required
- Email format is validated by browser
- Real-time input filtering prevents invalid characters

## 🔍 SEO

The project is set up for search engines and social sharing.

### Per-page SEO (`SEO.jsx`)

Every page uses the **SEO** component (powered by `react-helmet-async`) to set:

- **Title** – `{title} | Maya Power` (default: "Maya Power - Solar Energy Solutions in Maharashtra")
- **Meta description** – Unique per page for snippets and social previews
- **Canonical URL** – Avoids duplicate content (e.g. `https://mayapower.com/about`)
- **Open Graph** – `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`, `og:locale` for Facebook/LinkedIn
- **Twitter cards** – `summary_large_image` with title, description, image, URL
- **Optional** – `noindex` for pages that should not be indexed

**Usage on a page:**

```jsx
import SEO from '../components/SEO';

<SEO
  title="Page Title Here"
  description="Unique description for this page (155–160 chars recommended)."
  path="/page-path"
  image="/optional-og-image.jpg"  // defaults to /og-image.jpg
  noindex={false}                 // set true to hide from search engines
/>
```

**Where it’s used:** `Home.jsx`, `AboutPage.jsx`, `ServicesPage.jsx`, `ProjectsPage.jsx`.

**Base URL:** Configured in `src/components/SEO.jsx` as `SITE_URL = 'https://mayapower.com'`. Update this if the production domain changes.

### Default meta & structured data (`index.html`)

The root HTML includes:

- Primary meta: title, description, keywords, author, robots, language, revisit-after
- Open Graph and Twitter meta for the homepage
- **Theme color** – `#7d2e3d`
- **JSON-LD** – Organization and WebSite schemas for rich results (name, url, logo, description, address, publisher)

### Sitemap & robots

- **`public/sitemap.xml`** – Lists `/`, `/about`, `/services`, `/projects` with `changefreq` and `priority`. Update when adding or removing main routes.
- **`public/robots.txt`** – Allows all crawlers and points to `Sitemap: https://mayapower.com/sitemap.xml`. Update the Sitemap URL if the domain changes.

### Social share image

- Default OG/Twitter image: **`/og-image.jpg`** (place in `public/`). The SEO component uses `SITE_URL` to build the full image URL.
- Per-page images can be passed via the `image` prop on `<SEO />`.

## 🎯 Features in Detail

### Navigation
- Fixed navbar with scroll effects
- Mobile hamburger menu
- Active route highlighting
- Smooth scroll to sections

### Animations
- Intersection Observer for scroll-triggered animations
- Fade-in and slide-up effects
- Staggered animations for testimonials
- Smooth transitions throughout

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is private and proprietary.

## 👥 Development

Built with modern React practices:
- Functional components with hooks
- Context API for global state: **ModalContext** (projection modal), **ToastContext** (notifications)
- Component-based architecture
- Responsive design patterns
- Per-page SEO via `react-helmet-async` (SEO.jsx)

---

**Maya Power** - Harnessing the power of the sun to create a sustainable future. 🌞
