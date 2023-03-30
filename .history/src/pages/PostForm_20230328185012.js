import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import ButtonApp from '../../components/button';

export default function PostForm({ onSubmit }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    console.log(author, title, genre);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author, genre });
    };

    return (
        <div className={styles.postform}>
        <h2>Create a Reading List</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Book Title: </label>
            <input
                id="name"
                type="text"
                required
                value={title}
                placeholder="Enter Book Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>

            <label htmlFor="title">Author:</label>
            <input
                id="author"
                type="text"
                required
                value={author}
                placeholder="Enter Author"
                onChange={(e) => setAuthor(e.target.value)}
            />
            <br></br>

            <label htmlFor="title">Genre:</label>
            <input
                id="genre"
                type="text"
                required
                value={genre}
                placeholder="Enter Genre"
                onChange={(e) => setGenre(e.target.value)}
            />
            <br></br>

            <ButtonApp name='Add Book'></ButtonApp>
        </form>

        </div>
        
    );
}