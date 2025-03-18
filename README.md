# React Note App with Firebase Integration

WADS Assignment - Building a Note Application with React and Firebase

## Project Overview

This project is a note-taking application built with React and Firebase, developed as part of the Web Application Development and Security (WADS) course assignment. The application allows users to create, read, update, and delete notes with real-time data persistence using Firebase Firestore.

## Features

- Create new notes with text content
- Real-time updates using Firebase Firestore
- Edit existing notes
- Delete notes
- Responsive design using Tailwind CSS and DaisyUI
- Modern UI with animations

## Technologies Used

- React 18.3.1
- Firebase 11.4.0
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Type Animation

## Firebase Integration

The application uses the following Firebase services:

- Firestore Database for data persistence
- Firebase Analytics for usage tracking

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/Qyuzet/react-noteapp-firebase.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a Firebase project and update the configuration in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id",
};
```

4. Run the development server:

```bash
npm run dev
```

## Project Structure

```
react-noteapp-firebase/
├── src/
│   ├── main.jsx        # Main application entry
│   ├── firebase.js     # Firebase configuration
│   └── index.css       # Global styles
├── public/
│   └── noteapp.png     # App icon
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## Firebase Implementation

The application implements full CRUD operations using Firebase:

- CREATE: Notes are added to Firestore using `addDoc`
- READ: Notes are fetched using `getDocs`
- UPDATE: Notes are updated using `updateDoc`
- DELETE: Notes are removed using `deleteDoc`

## Styling

- Tailwind CSS for utility-first styling
- DaisyUI for pre-built components
- Custom animations for enhanced user experience

## Development Tools

- Vite for fast development and building
- ESLint for code quality
- PostCSS for CSS processing

## Author

- [Qyuzet](https://github.com/Qyuzet)
- Instagram: [@riqyuzet](https://www.instagram.com/riqyuzet/)
- Medium: [@riqyuzet](https://medium.com/@riqyuzet)

## Assignment Context

This project was developed as part of the Web Application Development and Security (WADS) course assignment, demonstrating the implementation of:

- React components and state management
- Firebase integration for real-time data storage
- Modern web development practices
- Responsive design principles
