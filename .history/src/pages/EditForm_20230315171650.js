import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function EditForm({ onSubmit, initialValues }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (initialValues) {
            setAuthor(initialValues.author);
            setTitle(initialValues.title);
            setGenre(initialValues.genre);
        }
    }, [initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            onSubmit({ id: initialValues.id, title, author, genre });
            setIsEditing(false);
        } else {
            onSubmit({ title, author, genre });
        }
        setTitle('');
        setAuthor('');
        setGenre('');
    };

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>

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
                    id="author"
                    type="text"
                    required
                    value={author}
                    placeholder="Enter Author"
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <br></br>

                <label htmlFor="title">Genre</label>
                <input
                    id="genre"
                    type="text"
                    required
                    value={genre}
                    placeholder="Enter Genre"
                    onChange={(e) => setGenre(e.target.value)}
                />
                <br></br>

                <button type="submit">{isEditing ? 'Save' : 'Submit'}</button>
                {isEditing && <button onClick={() => setIsEditing(false)}>Cancel</button>}
            </form>
        </div>
    );
}
