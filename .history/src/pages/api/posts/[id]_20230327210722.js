// delete posts by id using axios

import axios from 'axios';

const handleDelete = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    setCurrentPosts(currentPosts.filter((post) => post.id !== id));
}





