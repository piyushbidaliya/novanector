export const baseURL = import.meta.env.VITE_API_URL

const SummaryApi = {
    register: {
        url: '/api/auth/register',
        method: 'post'
    },
    login: {
        url: '/api/auth/login',
        method: 'post',
    },
    getBlog: {
        url: '/api/blog/get',
        method: 'get'
    },
}

export default SummaryApi