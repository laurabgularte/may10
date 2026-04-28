# May 10 Project 🌸

This repository is dedicated to developing a special and personal project focused on creating a personalized digital experience designed as an anniversary gift.

## 🚀 About the Project

This project is designed to be:

- **Interactive:** Using JavaScript to create real-time responses.
- **Scalable:** Well-organized code to easily add new pages and functions.
- **Customizable:** Styling refined to offer a unique experience.

## ✨ Features

- **Live Counter**: Dynamic day, hour, minute, and second counter since the start date
- **Timeline Section**: Beautiful visual representation of your relationship milestones
- **Photo Gallery**: Polaroid-style image gallery with hover animations
- **Letter Cards**: Five interactive cards with heartfelt messages
- **Spotify Integration**: Embedded playlist featuring your favorite songs together
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Elegant transitions and interactions throughout
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

## 🛠️ Technologies Used

- **HTML5**: Semantic structure with accessibility best practices
- **CSS3**: Modern styling with CSS variables, flexbox, grid, and animations
- **JavaScript**: Interactive functionality with proper event handling and error management
- **Google Fonts**: Dancing Script and Montserrat typefaces
- **Spotify API**: Embedded playlist functionality

## 📁 Project Structure

```
may10/
├── index.html          # Main HTML structure with semantic markup
├── style.css           # Complete styling with responsive design
├── script.js           # Interactive functionality and animations
├── README.md           # This file (bilingual documentation)
└── assets/             # (Optional) Folder for images and media
    ├── foto1.jpg       # Your first trip photo
    ├── foto2.jpg       # Sunday laughs photo
    └── foto3.jpg       # Special moment photo
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (optional, for testing locally)

### Installation

1. **Clone or download the repository:**

   ```bash
   git clone https://github.com/laurabgularte/may10.git
   cd may10
   ```

2. **Open in your browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```

3. **Access at:**
   - Local file: `file:///path/to/may10/index.html`
   - Local server: `http://localhost:8000`

## 🎨 Customization Guide

### Change the Start Date

Edit `script.js` line 2:

```javascript
const dataInicio = new Date("2025-05-10T00:00:00"); // Change to your date
```

### Add Your Photos

Replace the image placeholders in `index.html`:

```html
<img src="foto1.jpg" alt="Our first trip" />
<!-- Replace foto1.jpg -->
<img src="foto2.jpg" alt="Sunday laughs" />
<!-- Replace foto2.jpg -->
<img src="foto3.jpg" alt="Special moment" />
<!-- Replace foto3.jpg -->
```

### Edit Letter Messages

Modify the `MENSAGENS_CARTAS` object in `script.js`:

```javascript
const MENSAGENS_CARTAS = {
  1: "Your custom message here",
  2: "Another message",
  3: "Third message",
  4: "Fourth message",
  5: "Fifth message",
};
```

### Customize Colors

Edit CSS variables in `style.css`:

```css
:root {
  --rosa-suave: #fdf2f2; /* Light pink background */
  --rosa-forte: #d63384; /* Strong pink accent */
  --rosa-claro: #f8d7e1; /* Clear pink highlight */
  --texto: #4a4a4a; /* Main text color */
  --texto-claro: #7a7a7a; /* Light text color */
}
```

### Update Spotify Playlist

Replace the Spotify embed iframe in `index.html` (lines 83-97) with your own playlist link from Spotify.

## 🎯 Color Scheme

| Color       | Hex       | Usage            |
| ----------- | --------- | ---------------- |
| Light Pink  | `#fdf2f2` | Background       |
| Strong Pink | `#d63384` | Titles & Accents |
| Clear Pink  | `#f8d7e1` | Content boxes    |
| Dark Gray   | `#4a4a4a` | Main text        |
| Light Gray  | `#7a7a7a` | Secondary text   |

## ♿ Accessibility Features

This project follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML5 structure
- ✅ ARIA labels and roles for dynamic content
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ High contrast color ratios
- ✅ Screen reader support
- ✅ Responsive text sizing
- ✅ Focus indicators on interactive elements
- ✅ Alternative text for all images

## 🌐 Browser Support

| Browser       | Version | Status             |
| ------------- | ------- | ------------------ |
| Chrome        | Latest  | ✅ Fully Supported |
| Firefox       | Latest  | ✅ Fully Supported |
| Safari        | Latest  | ✅ Fully Supported |
| Edge          | Latest  | ✅ Fully Supported |
| Mobile Safari | Latest  | ✅ Fully Supported |
| Chrome Mobile | Latest  | ✅ Fully Supported |

## 🔮 Future Enhancements

- [ ] Add video section for shared memories
- [ ] Photo upload functionality
- [ ] Dark mode theme toggle
- [ ] Music player integration
- [ ] Timeline event editing interface
- [ ] Guest book/comments section
- [ ] Memory countdown to future dates
- [ ] PWA (Progressive Web App) support
- [ ] Multi-language support extension
- [ ] Email reminder feature

## 💡 Tips for Best Experience

- Add high-quality photos for the gallery
- Keep letter messages concise but heartfelt
- Use a custom Spotify playlist with meaningful songs
- Test on mobile devices to ensure responsive design
- Consider adding a custom domain for gifting
- Enable HTTPS for security when deployed online

## 📝 License

This project is personal and open source. Feel free to modify and adapt it for your own special occasions. Please credit the original author if you share it.

## 👤 Author

**Laura Gularte**

- GitHub: [@laurabgularte](https://github.com/laurabgularte)

---
