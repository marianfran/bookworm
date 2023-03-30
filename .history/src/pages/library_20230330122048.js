import { prisma } from '../../server/db/client'
import axios from "axios";
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

/*Components*/
import MenuAppBar from '../../components/navbar'
import PostForm from '../pages/PostForm'
import Book from './postBook'
import { useState} from 'react';
import Lottie from "lottie-react";
import book from "../../public/books.json";
import ButtonApp from '../../components/button'

export default function Library({posts}){

    const [updatePopUp, setUpdatePopUp] = useState(false)
    const [pendingUpdate, setPendingUpdate] = useState()
    console.log(pendingUpdate)

    const [currentPosts, setCurrentPosts] = useState(posts)

    /* Session */
    const { data: session } = useSession()

    /* Post */
    const handleSubmit = async ({ title, author, genre }) => {
        const { data } = await axios.post('/api/posts', {
            title,
            author,
            genre,
        })
        console.log(data)
        setCurrentPosts([data, ...currentPosts])
    }

    /* Delete */
    const handleDelete = async (id) => {
        await axios.delete(`/api/posts/${id}`);
        setCurrentPosts(currentPosts.filter((post) => post.id !== id));
    };

    /* Update */

    const [newTitle, setNewTitle] = useState(pendingUpdate?.title)
    const [newAuthor, setNewAuthor] = useState(pendingUpdate?.author)
    const [newGenre, setNewGenre] = useState(pendingUpdate?.genre)

    const handlePendingUpdate = (post) => {
      console.log(post)
        setUpdatePopUp(!updatePopUp)
        setPendingUpdate(post);
        setNewTitle(post.title)
        setNewAuthor(post.author)
        setNewGenre(post.genre)
    };

    const handleUpdate = async (id, { title, author, genre }) => {
      e.preventDefault()

        const { data } = await axios.put(`/api/posts/${pendingUpdate.id}`, {
            title: newTitle,
            author: newAuthor,
            genre: newGenre,
        });
        console.log(data)
        setCurrentPosts(currentPosts.map((post) => (post.id === id ? data : post)));
        // setUpdatePopUp(!updatePopUp)
    };

    return(
    <div className={styles.container}>
        <MenuAppBar 
            user={session?.user}
            onSignIn={signIn}
            onSignOut={signOut}
            src={session?.user?.image}
        />

        <div className={styles.main}>
          <h1>Welcome to the Library</h1>

          <div className={styles.lottie}>
            <Lottie animationData={book} width={50} height={50} />
          </div>
        </div>

        <main className={styles.main}>
          <div>
                <PostForm onSubmit={handleSubmit} />

                <h2>My Books</h2>

              {currentPosts.map((post) => (
                <Book 
                  key={post.id} 
                  name={post.title} 
                  author={post.author} 
                  category={post.genre} 
                  onClickDelete={()=>handleDelete(post.id)}
                  onClickUpdate={()=>handlePendingUpdate(post)}
                />
              ))}

          </div>
        </main> 
        {
          updatePopUp ? 
            <div className={styles.mainpopup}>
              <div className={styles.book}>
              {/* <div className={styles.book}>
                <h3 className={styles.title}>{props.name}</h3>
                <p className={styles.author}>{props.author}</p>
                <p className={styles.genre}>{props.category}</p> */}

                <form className={styles.form} onSubmit={handleUpdate}>
                  <input
                    className={styles.input}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <input
                    className={styles.input}
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                  />
                  <input
                    className={styles.input}
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                  />
                  <ButtonApp name='Update Book'/>
                </form>
              </div>
            </div>
          : null
        }
    </div>

    )
}

export async function getServerSideProps() {
    const posts = await prisma.post.findMany()
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    }
  }
