import { prisma } from '../../server/db/client'
import axios from "axios";
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

/*Components*/
import MenuAppBar from '../../components/navbar'
import PostForm from '../pages/PostForm'
import { Book } from './postBook'
import { useState} from 'react';
import Lottie from "lottie-react";
import book from "../../public/books.json";

export default function Library({posts}){

    console.log(posts)

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
        setCurrentPosts(currentPosts.filter(post => post.id !== id));
    }

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
                <div key={post.id}>
                    <Book name={post.title} author={post.author} category={post.genre}/>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              ))}

          </div>
        </main> 

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

export async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'DELETE':
      const deletedPost = await prisma.post.delete({
        where: {
          id: parseInt(id)
        }
      });
      res.status(200).json(deletedPost);
      break;
    default:
      res.setHeader('Allow', ['DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}


// export default function Library({posts}){

//     console.log(posts)

//     const [currentPosts, setCurrentPosts] = useState(posts)

 
//     /* Session */
//     const { data: session } = useSession()

//     /* Post */
//     const handleSubmit = async ({ title, author, genre }) => {
//         const { data } = await axios.post('/api/posts', {
//             title,
//             author,
//             genre,
//         })
//         console.log(data)
//         setCurrentPosts([data, ...currentPosts])
//     }

//     return(
//     <div className={styles.container}>
//         <MenuAppBar 
//             user={session?.user}
//             onSignIn={signIn}
//             onSignOut={signOut}
//             src={session?.user?.image}
//         />

//         <div className={styles.main}>
//           <h1>Welcome to the Library</h1>

//           <div className={styles.lottie}>
//             <Lottie animationData={book} width={50} height={50} />
//           </div>
//         </div>

//         <main className={styles.main}>
//           <div>
//                 <PostForm onSubmit={handleSubmit} />

//                 <h2>My Books</h2>

//               {currentPosts.map((post) => (
//                 <Book key={post.id} name={post.title} author={post.author} category={post.genre}/>
//               ))}

//           </div>
//         </main> 

//     </div>

//     )
// }

// export async function getServerSideProps() {
//     const posts = await prisma.post.findMany()
//     return {
//       props: {
//         posts: JSON.parse(JSON.stringify(posts)),
//       },
//     }
//   }
