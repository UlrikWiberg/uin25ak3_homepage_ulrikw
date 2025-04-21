export const profiles = {
    name: "profiles",
    title: "Profiles",
    type: "document",
    fields: [
        {
            name: "profilnavn",
            type: "string"
        },
        {
            name: "image",
            type: "image"
        },
        {
            name: "email",
            type: "string"
        },
        {
            name: "profileslug",
            title: "slug",
            type: "slug",
            options: {
                source: "profilnavn",
                slugify: input => input .toLowerCase().replace(/\s+/g, "-")
            },
        },
        {
            name: "interesser",
            title: "Interreser",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ]
        },
        {
            name: "biografi",
            title: "Biografi",
            type: "text"
        },
        {
            name: "logg",
            title: "Logg",
            type: "array",
            of: [
                {type: "reference", to: [{type: "logg"}]}
            ],
        }
    ]
}