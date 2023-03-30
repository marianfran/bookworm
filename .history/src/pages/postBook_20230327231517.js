import styles from '@/styles/Post.module.css'
import ButtonApp from '../../components/button'
import axios from 'axios'

export default function Book( props ) {

    const { id } = props;

    /* Delete */
    const handleDelete = async (id) => {
        await axios.delete(`/api/posts/${id}`);
        setCurrentPosts(currentPosts.filter((post) => post.id !== id));
    }

    /* Update */
    const handleUpdate = async (id) => {
        await axios.put(`/api/posts/${id}`);
        setCurrentPosts(currentPosts.filter((post) => post.id !== id));
    }


    return (
        <div className={styles.book}>
            <h3 className={styles.title}>{props.name}</h3>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.genre}>{props.category}</p>

            <div className={styles.bookbtns}>
                <ButtonApp name='Update' onClick={() => handleUpdate}/>
                <ButtonApp name='Delete' onClick={() => handleDelete(id)}/>
            </div>
        </div>
    )
}