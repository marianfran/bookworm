import { prisma } from '../../../server/db/client';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'DELETE':
      try {
        const deletedPost = await prisma.post.delete({
          where: { id: parseInt(id) }
        });
        res.status(200).json(deletedPost);
      } catch (error) {
        res.status(500).json({ message: 'Failed to delete post' });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}
