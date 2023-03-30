import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import PostForm from "./PostForm";

export default function AddPost({ user }) {
    const router = useRouter();

    const handleSubmit = async ({ title, author }) => {
        const { data } = await axios.post('/api/posts', {
            title,
            author,

        })
        console.log(data)
}

return (
    <>
        <Head>
            <title>Add Post</title>
        </Head>
        <div>
            <h1>Add Post</h1>
            <PostForm onSubmit={handleSubmit} />
        </div>
    </> 
)

}