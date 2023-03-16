import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function PostForm({ onSubmit }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author });
    };

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Book</label>
            <input
                id="title"
                type="text"
                required
                value={title}
                placeholder="Enter Book Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="author">Author</label>
            <textarea
                id="author"
                required
                value={author}
                placeholder="Enter Author Name"
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Add Book</button>
        </form>
        </div>
        
    );
}