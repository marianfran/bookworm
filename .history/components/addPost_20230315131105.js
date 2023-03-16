import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import PostForm from "./postform";

export default function AddPost({}) {
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
            <title>Add Book</title>
        </Head>
        <div>
            <h1>Add Book</h1>
            <PostForm onSubmit={handleSubmit} />
        </div>
    </> 
)

}