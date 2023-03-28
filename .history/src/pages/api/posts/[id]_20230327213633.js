import { getPostById, deletePostById } from  '../../server/posts'
export default async function handler(req, res) {
    const { id } = req.query;
    const post = await getPostById(id);

    switch (req.method) {
        case 'GET':
            res.status(200).json(post);
            break;
        case 'DELETE':
            // Delete post by id
            await deletePostById(id);
            res.status(200).json({ message: 'Post deleted' });
            break;
    }
}
