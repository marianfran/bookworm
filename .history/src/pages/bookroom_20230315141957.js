import { useState } from 'react';
import { prisma } from '../../server/db/client'


export async function getServerSideProps() {
  const posts = await prisma.post.findMany();
  return { props: { posts } };
}

export default function BookRoom({ posts }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  async function createPost() {
    await prisma.post.create({
      data: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
    location.reload(); // refresh the page to show the new post
  }

  async function deletePost(id) {
    await prisma.post.delete({
      where: {
        id,
      },
    });
    location.reload(); // refresh the page to show the deleted post
  }

  async function updatePost(id, data) {
    await prisma.post.update({
      where: {
        id,
      },
      data,
    });
    location.reload(); // refresh the page to show the updated post
  }

  return (
    <div>
      <h1>My Book List</h1>
      <form onSubmit={e => { e.preventDefault(); createPost(); }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <input
              type="text"
              value={post.title}
              onChange={e => updatePost(post.id, { title: e.target.value })}
            />
            <input
              type="text"
              value={post.author}
              onChange={e => updatePost(post.id, { author: e.target.value })}
            />
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

