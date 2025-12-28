# Digital Business Card 📇

![Vercel Deployment](https://deploy-badge.vercel.app/api?url=https://valay-digital-business-card.vercel.app&name=Digital%20Business%20Card)

A sleek, responsive, and modern digital business card built with **React** and **Vite**. This project is designed to serve as a personal landing page that centralizes professional links, bios, and social media profiles in a mobile-friendly format.

---

## 🚀 Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Dark Mode UI:** A modern, professional dark-themed aesthetic.
- **Component-Based:** Built using modular React components (`Info`, `About`, `Interests`, and `Footer`).
- **Quick Actions:** Integrated buttons for direct Email and LinkedIn connectivity.
## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Custom CSS3

## 📦 Installation & Setup

To get a local copy up and running, follow these steps:

1. **Clone the repository**
    ```sh
    git clone https://github.com/Valay-2004/Digital-Business-Card.git
    cd Digital-Business-Card
    ```
2. **Install dependencies**
	```sh
    npm install
    ```
    
3. **Start the development server**
	```sh
    npm run dev
    ```
    
4. **Build for production**
    ```sh
    npm run build
    ```
## 📂 Project Structure

```
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # UI Components
│   │   ├── About.jsx    # "About Me" section
│   │   ├── Footer.jsx   # Social media links
│   │   ├── Info.jsx     # Profile photo & contact buttons
│   │   └── Interests.jsx # Hobbies section
│   ├── App.jsx          # Main application shell
│   ├── App.css          # Component-specific styles
│   └── main.jsx         # Entry point
└── index.html           # HTML template
```

## 🔧 Customization

To personalize this card for yourself:
1. Open `src/components/Info.jsx` to update your **Name**, **Role**, and **Links**.
2. Replace the profile image in `public/` with your own.
3. Edit `About.jsx` and `Interests.jsx` to reflect your professional background and personality.

---

**Created by [Valay](https://github.com/Valay-2004)**

---

### **How to add this to your repo:**

1. Create a new file in your project root called `README.md`.
2. Paste the content above into it.
3. Save, commit, and push:
   ```sh
    git add README.md
    git commit -m "docs: add comprehensive README"
    git push origin main
    ```

## 🔗 Live Demo
Check out the live version here:  
**[https://valay-digital-business-card.vercel.app/](https://valay-digital-business-card.vercel.app/)**
