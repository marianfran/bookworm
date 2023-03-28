// delete posts by id using axios

import axios from 'axios'

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const { data } = await axios.delete(`http://localhost:3000/api/posts/${id}`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

