/** @type {import('./$types').RequestHandler} */
export async function POST(e) {

    try {
        let data = await e.request.text()

        e.cookies.set("ghtx-lang", data, {
            path: "/",
            maxAge: 31_556_926,
            secure: false
        });

        return new Response("ok");
    } 
    catch (error) {
        return new Response("error");
    }
    

    
}