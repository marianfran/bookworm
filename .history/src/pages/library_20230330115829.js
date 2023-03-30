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

    console.log(posts)

    const [updatePopUp, setUpdatePopUp] = useState(false)
    const [pendingUpdate, setPendingUpdate] = useState()

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

    const handlePendingUpdate = (id) => {
        setUpdatePopUp(!updatePopUp)
        const post = currentPosts.find((post) => post.id === id);
        console.log(post)
        setPendingUpdate(post);
        console.log(pendingUpdate)
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
                  onClickUpdate={()=>handlePendingUpdate(post.id)}
                />
              ))}

          </div>
        </main> 
        {
          updatePopUp ? 
            <div className={styles.mainpopup}>
              <div className={styles.book}>
                {/* <h3 className={styles.title}>{props.name}</h3>
                <p className={styles.author}>{props.author}</p>
                <p className={styles.genre}>{props.category}</p> */}

                {/* <div className={styles.bookbtns}>
                    <ButtonApp name='Update' onClick={props.onClickUpdate}/>
                    <ButtonApp name='Delete' onClick={props.onClickDelete}/>
                </div> */}
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
