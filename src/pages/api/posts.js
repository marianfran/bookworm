import { prisma } from '../../../server/db/client'

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'POST':

        const { title, author, genre } = req.body;
        const post = await prisma.post.create({
            data: {
                title,
                author,
                genre
            },
        });
            //Update or create data in your database
            res.status(201).json(post)
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
