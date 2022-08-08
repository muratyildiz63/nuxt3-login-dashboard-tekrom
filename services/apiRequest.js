import axios from 'axios'

export default async(endpoint, method, body) => {
    const runtimeConfig = useRuntimeConfig()
    const config = {
        url: runtimeConfig.public.apiBase + endpoint,
        method,
        data: body
    }
    return await axios.request(config).then(response => response.data)
}

// process.env.baseUrl