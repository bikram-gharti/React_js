# 📝 Note App

A simple and elegant note-taking application built with **React** and **Vite**.

## 🚀 Features

- **Create Notes** - Add notes with a title and detailed description
- **Two-Way Binding** - Real-time input synchronization with form fields
- **Visual Notes** - Display notes in a stylish card layout with custom background
- **Delete Notes** - Remove notes with a single click
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

## 🛠️ Technologies

- **React 19.2.6** - UI library with hooks for state management
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Remix Icon** - Beautiful icon library for UI elements

## 📦 Installation

```bash
npm install
```

## 🎯 Getting Started

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Builds the project for production.

### Lint
```bash
npm run lint
```
Checks code quality with ESLint.

## 📋 Project Structure

```
src/
├── App.jsx       - Main component with note logic
├── main.jsx      - Entry point
├── index.css     - Global styles
└── assets/       - Images and static assets
```

## 💡 How It Works

The app maintains state for note title, details, and a collection of all notes. When you submit a note, it's added to the list and displayed as a visual card. You can delete any note by clicking the close button.
