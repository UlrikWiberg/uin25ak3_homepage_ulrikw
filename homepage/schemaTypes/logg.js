export const logg = {
    name: "logg",
    title: "Logg",
    type: "document",
    fields: [
        {
            name: "dato",
            type: "datetime",
        },
        {
            name: "bruker",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "profiles"}],
                },
            ],
        },
        {
            name: "oppgave",
            type: "string"
        },
        {
            name: "tid",
            type: "number"
        }
    ]
}