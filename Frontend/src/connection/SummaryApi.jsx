export const baseURL = import.meta.env.VITE_API_URL

const SummaryApi = {
    getBlog: {
        url: '/api/blog/get',
        method: 'get'
    },
}

export default SummaryApi