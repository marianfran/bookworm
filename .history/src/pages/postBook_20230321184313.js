const express = require('express');
const router = express.Router();
const postsData = require('../../data/posts'); // You'll need to implement this to fetch the post data

router.delete('/', (req, res) => {
  const postId = req.params.id;
  // Delete the post with the specified ID from your data store
  // In this example, we assume that the posts data is stored in a separate module
  const deletedPost = postsData.deletePost(postId);

  if (!deletedPost) {
    // If no post was deleted, return a 404 error response
    return res.status(404).json({ error: 'Post not found' });
  }

  // Return a success response with the deleted post data
  res.status(200).json({ message: 'Post deleted successfully', post: deletedPost });
});

module.exports = router;




// import styles from '@/styles/Post.module.css'
// import ButtonApp from '../../components/button'
// import { useState } from 'react'

// export function Book( props ) {

//     const { id, onDelete } = props;

//     const handleDelete = async (id) => {
//         await axios.delete(`/api/posts/${id}`);
//         setCurrentPosts(currentPosts.filter((post) => post.id !== id));
//     }

//     return (
//         <div className={styles.book}>
//             <h3 className={styles.title}>{props.name}</h3>
//             <p className={styles.author}>{props.author}</p>
//             <p className={styles.genre}>{props.category}</p>

//             <div className={styles.bookbtns}>
//                 <ButtonApp name='Update'/>
//                 <ButtonApp name='Delete' onClick={() => handleDelete(id)}/>
//             </div>
//         </div>
//     )
// }