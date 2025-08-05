# KRWIN Homepage

KRWIN is a payments network that supports retail, consumers, and financial institutions to send money and make payments quickly and safely on blockchain networks. Experience KRWIN's innovation that connects existing complex financial networks into one.

## Key Features

- **Real-time 1:1 KRW Peg**: Always pegged 1:1 to Korean Won, providing stable value
- **Transparency**: All transaction records are stored on blockchain, ensuring trust
- **Global Transfer Support**: Easy and fast money transfer and payment anywhere in the world
- **Fast and Low Fees**: Anyone can use it cheaply without complex procedures

## Tech Stack

### Frontend

- **React 19** - Latest React features and hooks-based development
- **TypeScript** - Type safety and improved development productivity
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### Build Tools

- **Vite** - Fast development server and build tool
- **ESLint** - Code quality and consistency maintenance
- **PostCSS** - CSS preprocessing and optimization

### Internationalization

- **React i18next** - Multi-language support (English/Korean)
- **Language Detection & Switching** - Automatic user preference language detection

## Project Structure

```
krwin-homepage/
├── src/
│   ├── components/          # Reusable components
│   │   ├── common/         # Common components (SEO, PopupModal, etc.)
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── transparency/   # Transparency-related components
│   ├── pages/              # Page components
│   │   ├── Home/           # Main page
│   │   ├── About/          # Company introduction
│   │   ├── Transparency/   # Financial transparency
│   │   ├── Technology/     # Technology introduction
│   │   └── NotFound/       # 404 page
│   ├── i18n/               # Multi-language settings and translation files
│   ├── utils/              # Utility functions
│   ├── assets/             # Images, fonts, icons, etc.
│   └── types/              # TypeScript type definitions
├── public/                  # Static files
├── dist/                    # Build output
└── docs/                    # Documentation
```

## Core Pages

### Home

- KRWIN introduction and vision
- Real-time financial status
- Issuance and redemption status
- New internet financial system

### About

- Why choose KRWIN
- Company introduction (Initech, fanC)
- Core values and achievements

### Transparency

- Real-time financial data
- Collateral asset size
- Issued KRWIN status
- Issuance and redemption statistics

### Technology

- Technical features
- Core values
- Innovative technology introduction

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Running

```bash
# Install dependencies
yarn install

# Start development server
yarn run dev

# Build for production
yarn run build

# Preview build output
yarn run preview

# Code linting
yarn run lint
```

### Environment Setup

1. **Development Server**: `http://localhost:5173`
2. **Build Optimization**: Automatic code splitting and compression
3. **SEO Optimization**: Automatic meta tag and structured data generation

## Multi-language Support

- **English (Default)**: `en`
- **Korean**: `ko`
- Language switching available through header language selection dropdown
- User preferred language stored in local storage

## Design System

### Typography

- **Pretendard**: Main font family
- Various weights support (Thin ~ Black)
- Optimized font loading and display

### Colors

- **Primary Colors**: Blue series (#0A2540, #6295FF)
- **Secondary Colors**: Purple series (#A68DFF, #C1B0FF)
- **Neutral Colors**: Gray series (#6B7280, #939393)

### Components

- **Cards**: Rounded corners, shadow effects
- **Buttons**: Hover effects, transition animations

## Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Touch-friendly** interface
- **Accessibility** considerations (ARIA labels, keyboard navigation)

## Development Tools

### Code Quality

- **ESLint**: Code style and quality checking
- **TypeScript**: Static type checking
- **Prettier**: Code formatting (recommended)

### Performance Optimization

- **Code Splitting**: Page-based chunk separation
- **Image Optimization**: WebP support and compression
- **Font Optimization**: WOFF2 format and font-display: swap

## License

This project is distributed under the MIT License.

## Contact

- **Website**: [https://krwin.io](https://krwin.io)

---

**KRWIN** - The New Standard for KRW-based Digital Assets
