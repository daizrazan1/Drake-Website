# Overview

This is a fan website dedicated to the Canadian rapper Drake, built as a class project for learning purposes. The site showcases Drake's music career, including his discography, information about his record label OVO Sound, and interactive features like a favorite song generator. The website is designed as a Progressive Web App (PWA) with offline capabilities and mobile-responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a traditional multi-page web architecture using static HTML files with client-side JavaScript for interactivity. The design uses Bootstrap 5 for responsive layout and styling, combined with custom CSS for Drake-themed branding. Each page maintains consistent navigation and visual design patterns.

The site structure includes:
- **index.html**: Landing page with hero section and overview
- **about.html**: Artist biography and social media links
- **albums.html**: Interactive album gallery with like functionality
- **ovo.html**: OVO Sound artists showcase with collapsible song lists
- **signup.html**: Favorite song generator form

## Progressive Web App Features
The application implements PWA capabilities through a service worker (sw.js) that enables offline functionality by caching static resources. The manifest.json file defines app metadata, icons, and shortcuts for mobile installation. This allows users to install the website as a native-like app on their devices.

## Data Management
Artist and album information is stored in static JSON files:
- **data.json**: Complete discography with albums, release years, and hit songs
- **count.json**: Like counters for albums (appears to track user engagement)

The application uses client-side JavaScript to fetch and display this data dynamically, avoiding the need for a backend database for this educational project.

## Styling and User Experience
The design emphasizes Drake's brand aesthetic with dark themes, OVO-inspired styling, and smooth animations. Custom CSS includes zoom animations for the OVO owl logo and fade-in effects for content. The site is fully responsive and optimized for both desktop and mobile viewing.

# External Dependencies

## CDN Resources
- **Bootstrap 5.3.0**: CSS framework for responsive design and components
- **Bootstrap Icons 1.5.0**: Icon library for social media and UI elements
- **SimpleLightbox 2.1.0**: Image gallery functionality
- **Google Fonts**: Merriweather and Merriweather Sans typography

## Third-party Services
- **External Image Hosting**: Various image CDNs for Drake photos and album artwork
- **Social Media Integration**: Links to Drake's official Instagram, Twitter, Spotify, and YouTube accounts

## Browser APIs
- **Service Worker API**: For offline functionality and caching
- **Web App Manifest**: For PWA installation capabilities
- **Local Storage**: Potential for storing user preferences and interaction data

The architecture prioritizes simplicity and educational value, using modern web standards while avoiding complex backend infrastructure. The PWA features demonstrate mobile-first design principles and offline-capable web applications.