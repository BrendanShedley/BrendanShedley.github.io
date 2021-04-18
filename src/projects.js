export const PROJECTS = [
    {
        name: "Genetic Drift",
        url_name: "genetic-drift",
        summary: "A self-driving drift racing simulation powered by neural networks and a genetic algorithm",
        description: "",
        categories: ["AI", "Game", "Original"],
        tools: ["Unity", "C#"],
        embed_html: "/projects/Out of Ctrls/index.html",
    },
    {
        name: "Trailblazer",
        url_name: "trailblazer",
        summary: "A multiplayer party platformer, based on games like SKATE and parkourse.",
        description: "",
        categories: ["Game", "Online", "Original"],
        tools: ["Unity", "C#", "Photon"],
        embed_html: "",
    },
]

export const TOOL_INFO = {
    "Unity": {
        link: "unity.com",
        icon: "./assets/unity.png"
    },
    "C#": {
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        icon: "./assets/c-sharp.png"
    },
}

export function get_project(name) {
    return PROJECTS.find(project => project.url_name === name)
}