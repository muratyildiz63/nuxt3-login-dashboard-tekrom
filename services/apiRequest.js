import axios from 'axios'

export default async(endpoint, method, body) => {
    const config = {
        url: "http://localhost:3000" + endpoint,
        method,
        data: body
    }
    return await axios.request(config).then(response => response.data)
}

// process.env.baseUrl