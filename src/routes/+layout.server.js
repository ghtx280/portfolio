/** @type {import('./$types').LayoutServerLoad} */
export async function load(e) {
    return {
        lang: e.cookies.get("ghtx-lang") || "ukr"
    }
}