# 🎧 Spotify Clone – Music Streaming Web App

A full-featured Spotify-like music streaming platform where users can browse albums, listen to songs, control playback, and enjoy playlists. Includes a powerful admin panel to manage songs and albums.

---

## 🚀 Features

### 🎵 User Functionality
- **Play Music:** Play any song with intuitive controls (Play, Pause, Rewind, Skip Next/Previous).
- **Playlist Streaming:** Stream entire playlists from the Albums section.
- **Category Browsing:** Explore songs across various genres/categories.
- **Playback Controls:** Real-time control over audio playback including seeking, rewinding, and skipping.
- **Responsive UI:** Clean and modern user interface across devices.

### 🛠️ Admin Panel
- **Add Songs & Albums:** Upload and organize songs into albums.
- **Manage Library:** Edit or delete existing songs and albums.
- **List Management:** View all available songs and albums in an organized panel.
- **Authentication:** Secure login system for admin access.

---

## 🧰 Tech Stack

### Frontend
- **React.js** – Interactive UI and component-based architecture
- **React Router** – Page navigation
- **Axios** – API integration

### Backend
- **Node.js & Express.js** – REST API and server-side logic
- **MongoDB** – Database to store songs, albums, and user data
- **Multer / Cloudinary** – Song and image file upload 
- **JWT** – Admin authentication and authorization



---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**

      ```bash
      git clone https://github.com/Uvajanani/Spotify-FullStack.git
      cd Spotify-FullStack
2. **Install frontend & backend dependencies**

- Backend
  ```Bash
  cd Backend
  npm install

- Frontend
  ```Bash
    cd Frontend
    npm install

3. Environment Variables

Create a .env file inside the /server directory with:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    
4. Run the app

- Start backend
  ```bash
  cd Backend
  npm run server

- Start frontend
  ```bash
  cd Frontend
  npm run dev

## 🧑‍💻 Author
- Uvajanani
- MERN Stack Developer
