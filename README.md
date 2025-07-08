# 🔗 Frontend Mentor - Shortly URL Shortening API Challenge Solution

This is my solution to the [Shortly URL shortening API Challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) on Frontend Mentor. The challenge helped me build a modern, responsive React application using real-world API integration and localStorage.

## 📋 Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 📌 Overview

### ✅ The Challenge

Users should be able to:

- View the optimal layout for any screen size
- Shorten any valid URL using an external API
- See a list of their shortened links, even after refreshing
- Copy a shortened link to the clipboard
- See an error message if the input is empty

### 🖼 Screenshot

![Screenshot](./src/assets/screenshot.jpg)

### 🔗 Links

- 🔧 Solution Repo: [GitHub Repository](https://github.com/callmesophiii/url-shortening-api-master)
- 🌐 Live Site: [View Live on Vercel](https://url-shortening-api-master-git-main-callmesophiiis-projects.vercel.app)

---

## 🛠 My Process

### 🏗 Built With

- HTML5 & Semantic Markup
- CSS3 (Custom properties, Flexbox, Grid)
- Mobile-first Responsive Design
- React (via Vite)
- React Hooks (`useState`)
- TinyURL API
- LocalStorage API

### 📚 What I Learned

This project helped me gain practical experience with:

- Consuming public APIs using `fetch` in React
- Handling errors and network issues with `try/catch`
- Saving and retrieving data from localStorage
- Responsive layout using Flexbox and media queries
- Working around CORS and API limitations (e.g., switching from CleanURI to TinyURL due to CORS)

### 🔧 Continued Development

I'd like to:

- Add a "Copy to Clipboard" button with feedback animation
- Show the link list immediately after shortening
- Add loading/error states using custom UI elements
- Use a backend proxy in the future for APIs with CORS issues

### 🔍 Useful Resources

- [TinyURL API Docs](https://tinyurl.com/app/dev) – Super simple and reliable API for shortening links
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – Helped with layout
- [React Docs](https://react.dev/) – Essential for hooks and component structure

---

## 👤 Author

- GitHub: [@callmesophiii](https://github.com/callmesophiii)
- Frontend Mentor: [@callmesophiii](https://www.frontendmentor.io/profile/callmesophiii)

---

## 🙌 Acknowledgments

Thanks to Frontend Mentor for this challenge and to TinyURL for their freely accessible API. Also shoutout to OpenAI's ChatGPT for assistance troubleshooting API and CORS issues during development.








