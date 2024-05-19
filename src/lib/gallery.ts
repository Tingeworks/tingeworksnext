// Get ALL
async function getProjects(query?: string): Promise<ProjectResponse> {
    const res = await fetch(`https://admin.tingeworks.com/api/projects?populate=*`)

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






// Get through Slug
async function getProject(slug: string): Promise<ProjectResponse> {
    const res = await fetch(`https://admin.tingeworks.com/api/projects?filters[slug][$eq]=${slug}&populate=*`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return {
            data: null,
            meta: null
        }
    }

    const data = await res.json()
    console.log(data)
    return data

}




export {
    getProjects,
    getProject
}
