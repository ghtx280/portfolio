/** @type {import('./$types').PageServerLoad} */
export async function load(e) {
    let data = await (await e.fetch("/projects.json")).json()

    return {
        projects: data
    }

}