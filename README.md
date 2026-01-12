# Maya Power - Solar Panel Solutions Website

<<<<<<< HEAD
Live project Link1: https://maya-power-solar-solutions.vercel.app/

Live project link2: https://solar-solutions-git-featur-abfc32-adnan-shahs-projects-a5cfa541.vercel.app/

A modern, responsive web application for Solar Nexus, showcasing solar panel solutions and services. Built with React and Vite, featuring a beautiful UI with WhatsApp integration for seamless customer communication.
=======
A modern, responsive web application for Maya Power, showcasing solar panel solutions and services. Built with React and Vite, featuring a beautiful UI with WhatsApp integration for seamless customer communication.
>>>>>>> fb227dc (updated the UI)

## 🌟 Features

### Core Functionality
- **Multi-page Navigation**: Home, Services, Projects, and About pages
- **WhatsApp Integration**: Contact forms automatically open WhatsApp with pre-filled messages
- **Projection Modal**: Popup modal for "Get a Projection" requests accessible from navbar and hero section
- **Contact Forms**: Multiple contact forms (footer and modal) with validation
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
- **ESLint** - Code linting

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.jsx       # Footer with contact form
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── ProjectionModal.jsx  # Modal for projection requests
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Stats.jsx        # Statistics display
│   │   ├── Teaser.jsx       # Customer testimonials/reviews
│   │   └── WhyChooseUs.jsx  # Benefits section
│   ├── context/             # React Context providers
│   │   └── ModalContext.jsx # Modal state management
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   ├── AboutPage.jsx    # About page
│   │   ├── ProjectsPage.jsx # Projects page
│   │   └── ServicesPage.jsx # Services page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
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
   cd Solar-Panel/frontend
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
- Context API for state management
- Component-based architecture
- Responsive design patterns

---

**Maya Power** - Harnessing the power of the sun to create a sustainable future. 🌞
