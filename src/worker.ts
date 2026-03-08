export default {
    async fetch(request: Request, env: any) {

        const url = new URL(request.url)

        // request asset normal
        let response = await env.ASSETS.fetch(request)

        // jika file tidak ada
        if (response.status === 404) {

            // fallback ke SPA index.html
            const indexRequest = new Request(
                new URL("/index.html", request.url),
                request
            )

            return env.ASSETS.fetch(indexRequest)
        }

        return response
    }
}