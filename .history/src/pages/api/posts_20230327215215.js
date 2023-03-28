// import { prisma } from '../../../server/db/client'

// export default async function handler(req, res) {
//   const { method, query: { id } } = req;

//   switch (method) {
//     case 'POST':
//       const { title, author, genre } = req.body;
//       const post = await prisma.post.create({
//         data: {
//           title,
//           author,
//           genre
//         },
//       });
//       res.status(201).json(post)
//       break;
//     case 'DELETE':
//       const deletedPost = await prisma.post.delete({
//         where: {
//           id: parseInt(id)
//         }
//       });
//       res.status(200).json(deletedPost);
//       break;
//     default:
//       res.setHeader('Allow', ['POST', 'DELETE'])
//       res.status(405).end(`Method ${method} Not Allowed`)
//       break;
//   }
// }




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
            break
          
    }
}
