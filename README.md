# the crappy chronometer

A clock that displays the current time as a QR code that can be scanned to view the time.

## 🚀 Live Demo

Visit the live demo: [https://parthib22.github.io/the-crappy-chronometer/](https://parthib22.github.io/the-crappy-chronometer/)

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/parthib22/the-crappy-chronometer.git
cd the-crappy-chronometer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with the production-ready files.

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/parthib22/the-crappy-chronometer)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. The project will be automatically built and deployed
4. Your site will be live at a custom Vercel URL

### GitHub Pages (Alternative)

This project can also be deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual GitHub Pages Setup

If you fork this repository, you'll need to:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on the next push to `main`

## 🏗️ Tech Stack

- **Bundler**: Webpack 5
- **QR Code Generation**: [qrcode](https://www.npmjs.com/package/qrcode) npm package
- **Styling**: CSS3 with Inter font
- **Deployment**: GitHub Pages via GitHub Actions

## 📱 Features

- Real-time QR code generation
- Updates every second
- Mobile-responsive design
- Offline functionality (after first load)
- Clean, minimalist interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
