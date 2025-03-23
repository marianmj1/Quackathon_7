import React, { useState } from 'react';
import '../App.css';

const ForumPage = () => {
  const [posts, setPosts] = useState([
    {
      name: 'Dr. Julian Rrushi',
      title: 'Best way to start a Python project?',
      message: 'I recommend starting with small scripts and working toward modular structure using functions!',
      timestamp: 'Mar 22, 2:45 PM'
    },
    {
      name: 'Marian Morales',
      title: 'Where can I borrow a Raspberry Pi?',
      message: 'Check with the Systems Lab — they usually have a few kits you can check out!',
      timestamp: 'Mar 22, 3:15 PM'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.message) return;

    const newPost = {
      ...formData,
      timestamp: new Date().toLocaleString('en-US', {
        hour: 'numeric', minute: 'numeric', hour12: true,
        month: 'short', day: 'numeric'
      })
    };

    setPosts([newPost, ...posts]);
    setFormData({ name: '', title: '', message: '' });
  };

  return (
    <div className="gradient-background forum-container">
      <h1 className="forum-title">STEMx Community Forum 👥</h1>
      <p className="forum-subtitle">Have a question or want to start a discussion?</p>

      {/* Post Form */}
      <form onSubmit={handlePost} className="forum-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Post</button>
      </form>

      {/* Posts Section */}
      <div className="forum-posts">
        {posts.map((post, index) => (
          <div className="forum-post-card" key={index}>
            <h3>{post.title}</h3>
            <p className="forum-message">{post.message}</p>
            <p className="forum-meta">
              — <strong>{post.name}</strong> · {post.timestamp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;


