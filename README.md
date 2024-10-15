# 🚀 Blog Website - Production Ready 🚀

Welcome to my latest project! This repository showcases a fully functional blog website, built as part of the "Chai aur React" series by [Hitesh Chaudhary sir ](https://www.youtube.com/@chaiaurcode) on the "Chai aur Code" YouTube channel. The project aims to deliver a production-grade web application with a seamless user experience, using a modern tech stack.

## 🎥 Demo
You can check out the live demo of the blog website here: [Deployed Blog Website](https://dhairya-writes.vercel.app/)

Feel free to explore, create an account, and start blogging!

## ✨ Features
- **User Authentication:** Users must either sign up or log in to access the website.
- **View Blogs:** All active blog posts are shown on the homepage once logged in.
- **Create Posts:** Dedicated page for creating blog posts with a rich text editor, making it easy to write articles like in MS Word.
- **Edit Your Posts:** Users can directly edit their own blog posts from the homepage.
- **Read-Only Mode for Other Blogs:** View other users' blog posts without the option to edit.
- **Image Handling:** Add and manage images effortlessly within blog posts.
- **Responsive Design:** Optimized for various screen sizes to provide a smooth user experience on mobile, tablet, and desktop.

## 🔧 Tech Stack
This project utilizes a modern tech stack to deliver a high-quality, maintainable codebase:
- **Frontend:**  
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces
  - [React Router](https://reactrouter.com/) - For seamless page navigation
  - [Redux Toolkit](https://redux-toolkit.js.org/) - State management made simple
- **Backend-as-a-Service:**  
  - [Appwrite](https://appwrite.io/) - User authentication, database, and more
- **Form Handling:**  
  - [React Hook Form](https://react-hook-form.com/) - For managing forms and form validation
- **Rich Text Editing:**  
  - [TinyMCE](https://www.tiny.cloud/) - Rich text editor to create and edit blog posts
- **Content Rendering:**  
  - [HTML Parser](https://www.npmjs.com/package/react-html-parser) - Parsing HTML content within React

## 🛠️ Setup
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website ```

2. **Install dependencies:**
```bash
npm install 
```

3. **Configure Appwrite backend:**
   Set up an [Appwrite](https://appwrite.io/) instance and configure user authentication and database for storing blog posts.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Visit localhost to see the project running

🚀 Usage
Once the project is up and running, you can:

- Sign Up / Log In: Create an account or log in to access the blog website.
- Explore Blog Posts: View all active blog posts on the homepage.
- Create a Blog Post: Navigate to the "Add Post" page to write a new blog post using the integrated rich text editor.
- Edit Your Posts: Click on any of your blog posts from the homepage to edit them.
- Enjoy Blogging! Share your thoughts and ideas with the world.

📁 Folder Structure
The project's folder structure follows a clean and modular design:
``` bash
blog-website/
├── public/                # Public files and assets
├── src/
│   ├── components/        # Reusable components (e.g., Header, Footer, PostForm)
│   ├── pages/             # Page components (e.g., HomePage, CreatePostPage)
│   ├── redux/             # Redux store and slices
│   ├── services/          # API service configurations (Appwrite)
│   ├── utils/             # Utility functions and helpers
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

🤝 Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or create a pull request. Let's make this project even better together.
