import createClient from "@sanity/client"

export const client = createClient({
    projectId: "zu7t7fab",
    dataset: "production",
    apiVersion: "v2025-04-13",
    useCdn: false,
})
