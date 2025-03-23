import React, { useState } from 'react';
import '../App.css';
import { FaHeart } from 'react-icons/fa';

const ForumPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([
    {
      title: 'Best way to start a Python project?',
      message: 'I recommend starting with small scripts and working toward modular structure using functions!',
      author: 'Dr. Julian Rrushi',
      timestamp: 'Mar 22, 2:45 PM',
      liked: false,
    },
    {
      title: 'Good microcontroller for robotics?',
      message: 'Arduino Uno is great for beginners but look into Teensy for more complex stuff.',
      author: 'Dr. Hoda Aty-Zohdy',
      timestamp: 'Mar 22, 3:12 PM',
      liked: false,
    }
  ]);

  const [formData, setFormData] = useState({ name: '', title: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.message) return;

    const newPost = {
      ...formData,
      timestamp: new Date().toLocaleString(),
      liked: false,
    };

    setPosts([newPost, ...posts]);
    setFormData({ name: '', title: '', message: '' });
    setShowForm(false);
  };

  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    setPosts(updatedPosts);
  };

  return (
    <div className="forum-container gradient-background">
      <h1 className="forum-title">STEMx Community Forum 🐣</h1>
      <p className="forum-subtitle">Would you like to ask a question or start a new discussion?</p>

      <div className="forum-toggle-buttons">
        <button onClick={() => setShowForm(true)}>+ New Discussion</button>
        <button onClick={() => setShowForm(true)}>❓ Ask a Question</button>
      </div>

      {showForm && (
        <form className="forum-form" onSubmit={handlePost}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
          ></textarea>
          <button type="submit">Post</button>
        </form>
      )}

      <div className="forum-posts">
        {posts.map((post, index) => (
          <div className="forum-post-card" key={index}>
            <h3>{post.title}</h3>
            <p className="forum-message">{post.message}</p>
            <p className="forum-meta">
              — <strong><em>{post.author}</em></strong> · {post.timestamp}
            </p>
            <button
              className={`like-button ${post.liked ? 'liked' : ''}`}
              onClick={() => toggleLike(index)}
            >
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;







