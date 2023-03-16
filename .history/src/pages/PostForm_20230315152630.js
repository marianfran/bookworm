import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function PostForm({ onSubmit }) {
    const [confession, setConfession] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, confession });
    };

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Pseudonym</label>
            <input
                id="name"
                type="text"
                required
                value={name}
                placeholder="Enter your pseudonym"
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="confession">Confession</label>
            <textarea
                id="confession"
                required
                value={confession}
                placeholder="Enter your confession here"
                onChange={(e) => setConfession(e.target.value)}
            />
            <button type="submit">Confess</button>
        </form>
        </div>
        
    );
}