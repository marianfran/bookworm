import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function PostForm({ onSubmit }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author });
    };

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>

            <select>
                <option value="fiction">Fiction</option>
                <option value="nonfiction">Non-Fiction</option>
                <option value="poetry">Poetry</option>
            </select>
            <label htmlFor="title">Book Title</label>
            <input
                id="name"
                type="text"
                required
                value={title}
                placeholder="Enter Book Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label htmlFor="title">Author</label>
            <input
                id="name"
                type="text"
                required
                value={author}
                placeholder="Enter Author"
                onChange={(e) => setAuthor(e.target.value)}
            />
            <br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
        
    );
}