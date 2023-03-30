import { prisma } from '../../../../server/db/client'

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
       case 'GET':
            const posts = await prisma.post.findUnique({
                where: {
                    id: parseInt(req.query.id),
                },
            });
            res.status(200).json(posts)
            break
        case 'PUT':
            const { title, author, genre } = req.body;
            const post = await prisma.post.update({
                where: {
                    id: parseInt(req.query.id),
                },
                data: {
                    title,
                    author,
                    genre,
                },
            });
            res.status(200).json(post)
            break
        case 'DELETE':
            const deletedPost = await prisma.post.delete({
                where: {
                    id: parseInt(req.query.id),
                },
            });
            res.status(200).json(deletedPost)
            break
        default:
    }
}
