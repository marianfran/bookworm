import { prisma } from '../../server/db/client'
import axios from "axios";
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';

/*Components*/
import MenuAppBar from '../../components/navbar'
import PostForm from '../pages/PostForm'
import { Book } from './postBook'

export default function Library({posts}){

    console.log(posts)

    /* Session */
    const { data: session } = useSession()

    /* Post */
    const [editingPost, setEditingPost] = useState(null);

    const handleEditSubmit = async ({ id, title, author, genre }) => {
        const { data } = await axios.put(`/api/posts/${id}`, {
            title,
            author,
            genre,
        });
        setEditingPost(null);
    }

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`/api/posts/${id}`);
    }

    return(
    <div className={styles.container}>
        <MenuAppBar 
            user={session?.user}
            onSignIn={signIn}
            onSignOut={signOut}
            src={session?.user?.image}
        />

        <div>
            <h1>Library</h1>
        </div>

        <main className={styles.main}>
          <div>
            <PostForm onSubmit={handleEditSubmit} />

              {posts.map((post) => (
                <div key={post.id}>
                  {editingPost && editingPost.id === post.id ? (
                    <EditForm
                      onSubmit={handleEditSubmit}
                      onCancel={() => setEditingPost(null)}
                      initialValues={post}
                    />
                  ) : (
                    <>
                      <Book name={post.title} author={post.author} category={post.genre} />
                      <button onClick={() => setEditingPost(post)}>Edit</button>
                      <button onClick={() => {
                          if (window.confirm("Are you sure you want to delete this post?")) {
                            handleDelete(post.id);
                          }
                        }}>Delete</button>
                    </>
                  )}
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





// import { prisma } from '../../server/db/client'
// import axios from "axios";
// import styles from '@/styles/Home.module.css'
// import { useSession, signIn, signOut } from "next-auth/react"

// /*Components*/
// import MenuAppBar from '../../components/navbar'
// import PostForm from '../pages/PostForm'
// import { Book } from './postBook'

// export default function Library({posts}){

//     console.log(posts)

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
//     }

//     return(
//     <div className={styles.container}>
//         <MenuAppBar 
//             user={session?.user}
//             onSignIn={signIn}
//             onSignOut={signOut}
//             src={session?.user?.image}
//         />

//         <div>
//             <h1>Library</h1>
//         </div>

//         <main className={styles.main}>
//           <div>
//               <h2>Create your Reading List</h2>
//                 <PostForm onSubmit={handleSubmit} />

//               {posts.map((post) => (
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
