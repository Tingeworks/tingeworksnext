// Get ALL
async function getBlogs(query?: string): Promise<BlogResponse> {
    const res = await fetch(`https://admin.tingeworks.com/api/blogs`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return {
            data: null,
            meta: null
        }
    }

    const data = await res.json()
    return data
}


export {
    getBlogs
}